import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #3a2847 0%, #16111d 38%, #0c0911 100%)",
        color: "#f7eefe",
        display: "grid",
        placeItems: "center",
        padding: "32px 20px",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 760,
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 28,
          padding: "48px 28px",
          background: "rgba(255,255,255,0.06)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.38)",
          backdropFilter: "blur(18px)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 14px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#f3cfff",
            marginBottom: 22,
          }}
        >
          Members Only
        </div>
        gba(255,255,255,0.05)",
            }}
          >
            Join Discord First
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
            textAlign: "left",
          }}
        >
          {[
            "Exclusive member-only drops",
            "Early access before public release",
            "Hidden art and bonus content",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "16px 16px",
                borderRadius: 18,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(247,238,254,0.84)",
                fontSize: 14,
                lineHeight: 1.5,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
            lineHeight: 0.95,
            margin: "0 0 18px",
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          Private Vault
        </h1>

        <p
          style={{
            maxWidth: 560,
            margin: "0 auto 16px",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            lineHeight: 1.7,
            color: "rgba(247,238,254,0.82)",
          }}
        >
          Unlock the hidden side of NoirWaifus. This private area gives approved members
          access to exclusive drops, unreleased artwork, and secret content you will not
          find in the public shop.
        </p>

        <p
          style={{
            maxWidth: 520,
            margin: "0 auto 30px",
            fontSize: 15,
            lineHeight: 1.7,
            color: "rgba(247,238,254,0.62)",
          }}
        >
          Join the Discord, get verified, and step inside the vault.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          <Link
            href="/api/auth/login"
            style={{
              padding: "15px 24px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #ffb7ef 0%, #d69cff 100%)",
              color: "#170f1f",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 12px 30px rgba(214,156,255,0.35)",
            }}
          >
            Enter the Vault
          </Link>

          <a
            href="https://discord.gg/H9zuEXcsPN"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "15px 24px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#f7eefe",
              fontWeight: 700,
              textDecoration: "none",
              background: "r
