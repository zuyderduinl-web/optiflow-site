export default function Home() {
  return (
    <main style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      background: "#0B1B34",
      color: "#fff",
      minHeight: "100vh",
      padding: "40px 20px"
    }}>

      {/* CONTAINER */}
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto"
      }}>

        {/* NAV */}
        <div style={{ marginBottom: "60px" }}>
          <img src="/icon_1024.png" style={{ height: "32px" }} />
        </div>

        {/* HERO */}
        <section style={{
          display: "grid",
          gap: "40px",
          alignItems: "center"
        }}>

          <div style={{ maxWidth: "520px" }}>
            <h1 style={{
              fontSize: "40px",
              lineHeight: 1.1,
              fontWeight: "600"
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
              Dit zorgt dat de follow-up automatisch gebeurt.
            </p>

            <button style={{
              marginTop: "24px",
              padding: "16px 20px",
              background: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer"
            }}>
              Bekijk hoe dit werkt
            </button>
          </div>

        </section>

        {/* FLOW */}
        <section style={{
          marginTop: "80px",
          background: "#111",
          borderRadius: "16px",
          padding: "30px",
          textAlign: "center"
        }}>
          <p style={{ fontSize: "16px" }}>
            LinkedIn bericht → Optiflow → automatische follow-up mail
          </p>
        </section>

        {/* GRID SECTION */}
        <section style={{
          marginTop: "80px",
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
              <li>• Meer reacties</li>
              <li>• Consistente opvolging</li>
              <li>• Geen gemiste kandidaten</li>
            </ul>
          </div>

        </section>

        {/* EMAIL */}
        <section style={{
          marginTop: "80px",
          background: "#fff",
          color: "#000",
          padding: "30px",
          borderRadius: "16px",
          maxWidth: "600px"
        }}>
          <h3>Voorbeeld bericht</h3>

          <p style={{ marginTop: "12px" }}>
            Hoi Lisa,<br /><br />
            Leuk dat we even contact hadden.<br /><br />
            Sta je open om kort te praten over de rol bij Tech BV?<br /><br />
            Laat even weten wat voor jou uitkomt 🙂<br /><br />
            Groet,<br />
            Henk
          </p>
        </section>

        {/* CTA */}
        <section style={{
          marginTop: "100px",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "22px" }}>
            Benieuwd hoe dit werkt?
          </h2>

          <button style={{
            marginTop: "20px",
            padding: "16px 24px",
            background: "#fff",
            color: "#000",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer"
          }}>
            Plan een demo
          </button>
        </section>

      </div>
    </main>
  );
}
