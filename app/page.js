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

          {/* TEXT */}
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
              fontWeight: "500",
              cursor: "pointer"
            }}>
              Bekijk hoe dit werkt
            </button>
          </div>

          {/* VISUAL CARD */}
          <div style={{
            background: "linear-gradient(145deg, #1a2a4a, #0f1e38)",
            borderRadius: "20px",
            padding: "24px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
          }}>
            <div style={{
              background: "#fff",
              color: "#000",
              padding: "20px",
              borderRadius: "12px",
              fontSize: "14px"
            }}>
              <p>
                Hoi Lisa,<br /><br />
                Leuk dat we even contact hadden.<br /><br />
                Sta je open om kort te praten over de rol bij Tech BV?<br /><br />
                Laat even weten wat voor jou uitkomt 🙂<br /><br />
                Groet,<br />
                Henk
              </p>
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
          fontSize: "16px",
          color: "#ccc"
        }}>
          LinkedIn bericht → Optiflow → automatische follow-up mail
        </section>

        {/* GRID SECTION */}
        <section style={{
          marginTop: "100px",
          display: "grid",
          gap: "40px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
        }}>

          {/* PROBLEEM */}
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

          {/* RESULTAAT */}
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
