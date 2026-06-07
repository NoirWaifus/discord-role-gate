import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 })
  }

  const clientId = process.env.DISCORD_CLIENT_ID!
  const clientSecret = process.env.DISCORD_CLIENT_SECRET!
  const redirectUri = process.env.DISCORD_REDIRECT_URI!
  const botToken = process.env.DISCORD_BOT_TOKEN!
  const guildId = process.env.DISCORD_GUILD_ID!
  const roleId = process.env.DISCORD_ROLE_ID!

  const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  })

  const tokenData = await tokenRes.json()
  const accessToken = tokenData.access_token

  if (!accessToken) {
    return NextResponse.json({ error: 'No access token', details: tokenData }, { status: 400 })
  }

  const userRes = await fetch('https://discord.com/api/users/@me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  const user = await userRes.json()
  const userId = user.id

  const joinRes = await fetch(`https://discord.com/api/guilds/${guildId}/members/${userId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bot ${botToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ access_token: accessToken }),
  })

  if (!joinRes.ok && joinRes.status !== 204 && joinRes.status !== 201) {
    const txt = await joinRes.text()
    return NextResponse.json({ error: 'Join failed', details: txt }, { status: 400 })
  }

  const roleRes
