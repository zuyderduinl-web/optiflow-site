export default function Home() {
  return (
    <main style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      background: "#0B1B34",
      color: "#fff",
      minHeight: "100vh",
      padding: "40px 20px"
    }}>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* NAV */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "60px"
        }}>
          <img src="/icon_1024.png" style={{ height: "32px" }} />
        </div>

        {/* HERO */}
        <section style={{
          display: "grid",
          gap: "60px",
          alignItems: "center"
        }}>

          {/* LEFT */}
          <div style={{ maxWidth: "520px" }}>
            <h1 style={{
              fontSize: "44px",
              lineHeight: 1.1,
              fontWeight: "600",
              letterSpacing: "-1px"
            }}>
              Zorg dat elke kandidaat wordt opgevolgd
              zonder dat je er zelf achteraan hoeft
            </h1>

            <p style={{
              marginTop: "20px",
              color: "#AAB4C3",
              fontSize: "18px"
            }}>
              Je hebt iemand gesproken of benaderd, maar daarna hoor je niks meer.
              Optiflow zorgt dat de follow-up automatisch gebeurt.
            </p>

            <button style={{
              marginTop: "28px",
              padding: "16px 22px",
              background: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer"
            }}>
              Bekijk hoe dit werkt (2 min)
            </button>
          </div>

          {/* RIGHT - FAKE UI */}
          <div style={{
            background: "linear-gradient(145deg, #1a2a4a, #0f1e38)",
            borderRadius: "20px",
            padding: "24px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
          }}>

            <div style={{
              background: "#fff",
              color: "#000",
              borderRadius: "14px",
              padding: "20px",
              fontSize: "14px"
            }}>

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px"
              }}>
                <strong>Lisa Jansen</strong>
                <span style={{ color: "#666" }}>Benaderd</span>
              </div>

              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}>
                <div style={{
                  background: "#f5f5f5",
                  padding: "10px",
                  borderRadius: "8px"
                }}>
                  ✔ Eerste bericht verstuurd
                </div>

                <div style={{
                  background: "#f5f5f5",
                  padding: "10px",
                  borderRadius: "8px"
                }}>
                  ⏳ Follow-up over 2 dagen
                </div>

                <div style={{
                  background: "#f5f5f5",
                  padding: "10px",
                  borderRadius: "8px"
                }}>
                  ⏳ Laatste reminder over 5 dagen
                </div>
              </div>

              <div style={{
                marginTop: "16px",
                padding: "12px",
                background: "#fafafa",
                borderRadius: "8px",
                fontSize: "13px",
                color: "#333"
              }}>
                Hoi Lisa,<br /><br />
                Leuk dat we even contact hadden.<br /><br />
                Sta je open om kort te praten over de rol bij Tech BV?<br /><br />
                Groet,<br />
                Henk
              </div>

            </div>
          </div>

        </section>

        {/* FLOW */}
        <section style={{
          marginTop: "100px",
          background: "#111",
          borderRadius: "16px",
          padding: "30px",
          textAlign: "center",
          color: "#ccc"
        }}>
          LinkedIn bericht → Optiflow → automatische follow-up mail
        </section>

        {/* GRID */}
        <section style={{
          marginTop: "100px",
          display: "grid",
          gap: "40px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
        }}>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
              Herkenbaar?
            </h2>
            <ul style={{ marginTop: "16px", color: "#AAB4C3" }}>
              <li>• Je hebt contact maar hoort niks</li>
              <li>• Follow-up schiet er tussendoor</li>
              <li>• Kandidaten verdwijnen</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
              Resultaat
            </h2>
            <ul style={{ marginTop: "16px", color: "#AAB4C3" }}>
              <li>• Meer reacties zonder extra werk</li>
              <li>• Consistente opvolging</li>
              <li>• Geen gemiste kandidaten</li>
            </ul>
          </div>

        </section>

        {/* CTA */}
        <section style={{
          marginTop: "120px",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "26px", fontWeight: "500" }}>
            Benieuwd hoe dit werkt?
          </h2>

          <button style={{
            marginTop: "24px",
            padding: "18px 28px",
            background: "#fff",
            color: "#000",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Plan een demo
          </button>
        </section>

      </div>
    </main>
  );
}
