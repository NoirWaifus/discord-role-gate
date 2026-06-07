export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #020204 0%, #06070D 100%)",
        color: "#F1F1F5",
        fontFamily: 'Inter, sans-serif',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 20px",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "960px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            background: "linear-gradient(180deg, rgba(148,95,249,0.14) 0%, rgba(6,7,13,0.92) 100%)",
            border: "1px solid rgba(148,95,249,0.22)",
            borderRadius: "28px",
            padding: "36px 28px",
            boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(210,109,255,0.08)",
              border: "1px solid rgba(210,109,255,0.18)",
              color: "#D26DFF",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            NoirWaifus Vault
          </div>

          <div
            style={{
              marginTop: "18px",
              color: "#E976FF",
              fontFamily: 'Allura, cursive',
              fontSize: "34px",
              lineHeight: 1,
            }}
          >
            private access
          </div>

          <h1
            style={{
              margin: "8px 0 16px",
              fontSize: "clamp(40px, 7vw, 68px)",
              lineHeight: 0.95,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            NSFW Vault
          </h1>

          <p
            style={{
              margin: "0 0 26px",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#8C8E9C",
              maxWidth: "520px",
            }}
          >
            Exclusive NSFW content, private drops and members-only access through the
            NoirWaifus Discord.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a
              href="https://discord.gg/H9zuEXcsPN"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #945FF9 0%, #D26DFF 100%)",
                color: "#F1F1F5",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 700,
                boxShadow: "0 10px 30px rgba(148,95,249,0.28)",
              }}
            >
              Join on Discord
            </a>

            <a
              href="https://noirwaifus.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                   padding: "14px 22px",
                borderRadius: "999px",
                background: "transparent",
                color: "#F1F1F5",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                border: "1px solid rgba(241,241,245,0.14)",
              }}
            >
              Back to Store
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          {[
            "Private NSFW drops",
            "Members-only content",
            "Early access updates",
            "Direct access through Discord",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(6,7,13,0.92)",
                border: "1px solid rgba(148,95,249,0.14)",
                borderRadius: "22px",
                padding: "22px 20px",
                boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
              }}
            >
              <div
                style={{
                  color: "#F1F1F5",
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {item}
              </div>
              <div
                style={{
                  color: "#8C8E9C",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                Access is handled inside the private community, not on the public shop.
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
