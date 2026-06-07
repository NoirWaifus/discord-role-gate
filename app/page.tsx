export default function Home() {
  const pillStyle = {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(255, 214, 230, 0.18)",
    background: "rgba(255, 240, 246, 0.06)",
    color: "#f7d9e6",
    fontSize: "11px",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
  };

  const cardStyle = {
    background: "rgba(255, 245, 248, 0.05)",
    border: "1px solid rgba(255, 214, 230, 0.1)",
    borderRadius: "20px",
    padding: "18px 18px",
    color: "rgba(255, 236, 242, 0.86)",
    fontSize: "14px",
    lineHeight: 1.6,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top, rgba(255, 196, 221, 0.16) 0%, rgba(255, 196, 221, 0) 28%),
          radial-gradient(circle at 80% 20%, rgba(214, 170, 255, 0.12) 0%, rgba(214, 170, 255, 0) 24%),
          linear-gradient(180deg, #130c14 0%, #0d0910 46%, #070609 100%)
        `,
        color: "#fff4f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 18px",
        fontFamily: `Georgia, "Times New Roman", serif`,
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "32px",
            border: "1px solid rgba(255, 214, 230, 0.12)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.42)",
            padding: "40px 28px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "auto -40px -40px auto",
              width: "180px",
              height: "180px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle, rgba(255,194,220,0.22) 0%, rgba(255,194,220,0) 72%)",
              pointerEvents: "none",
            }}
          />

          <div style={pillStyle}>NoirWaifus Private Access</div>

          <h1
            style={{
              margin: "22px 0 14px",
              fontSize: "clamp(48px, 9vw, 88px)",
              lineHeight: 0.95,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#fff3f7",
            }}
          >
            Private
            <br />
            Vault
          </h1>

          <p
            style={{
              margin: "0 0 28px",
              maxWidth: "540px",
              fontSize: "18px",
              lineHeight: 1.75,
              color: "rgba(255, 231, 239, 0.82)",
              fontFamily: `"Trebuchet MS", "Helvetica Neue", sans-serif`,
            }}
          >
            The hidden side of NoirWaifus. Exclusive drops, early access, private
            announcements and members-only chaos for the girls who know where the good
            stuff lives.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginBottom: "22px",
            }}
          >
            <a
              href="https://discord.gg/H9zuEXcsPN"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 26px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
                color: "#1a1017",
                background:
                  "linear-gradient(135deg, #ffd6e6 0%, #f0b8d2 55%, #e6a8c8 100%)",
                boxShadow: "0 14px 34px rgba(240, 184, 210, 0.28)",
                fontFamily: `"Trebuchet MS", "Helvetica Neue", sans-serif`,
              }}
            >
              Join the Vault
            </a>

            <a
              href="https://noirwaifus.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 22px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "15px",
                color: "#ffe8f1",
                border: "1px solid rgba(255, 214, 230, 0.18)",
                background: "rgba(255,255,255,0.03)",
                fontFamily: `"Trebuchet MS", "Helvetica Neue", sans-serif`,
              }}
            >
              Back to Store
            </a>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "rgba(255, 220, 232, 0.62)",
              fontFamily: `"Trebuchet MS", "Helvetica Neue", sans-serif`,
            }}
          >
            Soft luxury, private drops, zero public nonsense.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          <div
            style={{
              borderRadius: "28px",
              border: "1px solid rgba(255, 214, 230, 0.12)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.025) 100%)",
              padding: "28px 22px",
              boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ ...pillStyle, marginBottom: "18px" }}>Inside the Vault</div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "14px",
              }}
            >
              <div style={cardStyle}>Exclusive drops before anyone else sees them.</div>
              <div style={cardStyle}>Private updates and members-only announcements.</div>
              <div style={cardStyle}>Early access to releases and limited launches.</div>
              <div style={cardStyle}>Bonus content for people actually inside the circle.</div>
            </div>
          </div>

          <div
            style={{
              borderRadius: "28px",
              border: "1px solid rgba(255, 214, 230, 0.12)",
              background:
                "linear-gradient(180deg, rgba(32,19,28,0.88) 0%, rgba(17,11,18,0.95) 100%)",
              padding: "26px 22px",
              boxShadow: "0 24px 70px rgba(0,0,0,0.32)",
            }}
          >
            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "28px",
                lineHeight: 1.1,
                color: "#fff1f6",
              }}
            >
              Cute Noir energy.
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.75,
                color: "rgba(255, 228, 237, 0.78)",
                fontFamily: `"Trebuchet MS", "Helvetica Neue", sans-serif`,
              }}
            >
              Not loud, not generic, not public-facing chaos. This page should feel like a
              whispered invite, not a marketplace banner.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
