import { NextRequest, NextResponse } from 'next/server';

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const GUILD_ID = process.env.DISCORD_GUILD_ID;
const ACCESS_ROLE_ID = process.env.DISCORD_ACCESS_ROLE_ID;

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/^@/, '');
}

export async function POST(req: NextRequest) {
  try {
    if (!BOT_TOKEN || !GUILD_ID || !ACCESS_ROLE_ID) {
      return NextResponse.json(
        { hasAccess: false, error: 'Missing environment variables' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const rawUsername = String(body?.username || '');
    const username = normalize(rawUsername);

    if (!username) {
      return NextResponse.json(
        { hasAccess: false, error: 'Username is required' },
        { status: 400 }
      );
    }

    const searchRes = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}/members/search?query=${encodeURIComponent(username)}&limit=10`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bot ${BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!searchRes.ok) {
      const errorText = await searchRes.text();
      return NextResponse.json(
        { hasAccess: false, error: `Discord API error: ${errorText}` },
        { status: 500 }
      );
    }

    const members = await searchRes.json();

    const match = Array.isArray(members)
      ? members.find((member: any) => {
          const discordUsername = normalize(member?.user?.username || '');
          const globalName = normalize(member?.user?.global_name || '');
          const nick = normalize(member?.nick || '');
          const discriminator = member?.user?.discriminator;
          const legacyTag =
            discriminator && discriminator !== '0'
              ? normalize(`${member.user.username}#${discriminator}`)
              : '';

          return (
            discordUsername === username ||
            globalName === username ||
            nick === username ||
            legacyTag === username
          );
        })
      : null;

    if (!match) {
      return NextResponse.json({ hasAccess: false, reason: 'member_not_found' });
    }

    const roles = Array.isArray(match.roles) ? match.roles : [];
    const hasAccess = roles.includes(ACCESS_ROLE_ID);

    return NextResponse.json({
      hasAccess,
      reason: hasAccess ? 'access_granted' : 'missing_role',
    });
  } catch (error) {
    return NextResponse.json(
      { hasAccess: false, error: 'Unexpected server error' },
      { status: 500 }
    );
  }
}
