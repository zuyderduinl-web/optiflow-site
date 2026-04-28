export default function Home() {
  return (
    <main style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      background: "#0B1B34",
      color: "#fff",
      minHeight: "100vh",
      padding: "20px",
      lineHeight: 1.5
    }}>

      {/* NAV */}
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <img src="/icon_1024.png" alt="Optiflow" style={{ height: "28px" }} />
      </div>

      {/* HERO */}
      <section style={{ marginTop: "40px", maxWidth: "520px" }}>
        <h1 style={{
          fontSize: "28px",
          fontWeight: "600",
          lineHeight: 1.2
        }}>
          Zorg dat elke kandidaat wordt opgevolgd
          zonder dat je er zelf achteraan hoeft
        </h1>

        <p style={{ marginTop: "16px", color: "#AAB4C3" }}>
          Je hebt iemand gesproken of benaderd, maar daarna verwatert het.  
          Dit zorgt dat de follow-up automatisch gebeurt.
        </p>

        <button style={{
          marginTop: "24px",
          padding: "14px",
          width: "100%",
          background: "#fff",
          color: "#000",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px"
        }}>
          Bekijk hoe dit werkt
        </button>
      </section>

      {/* PROBLEEM */}
      <section style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
          Herkenbaar?
        </h2>

        <ul style={{ marginTop: "16px", color: "#AAB4C3" }}>
          <li>• Je hebt contact gehad maar hoort niks meer</li>
          <li>• Follow-up schiet er tussendoor</li>
          <li>• Kandidaten verdwijnen zonder reactie</li>
        </ul>
      </section>

      {/* HOE HET WERKT */}
      <section style={{
        marginTop: "60px",
        background: "#fff",
        color: "#000",
        padding: "20px",
        borderRadius: "12px"
      }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
          Hoe het werkt
        </h2>

        <div style={{ marginTop: "16px" }}>
          <p>1. Je benadert iemand (bijv. via LinkedIn)</p>
          <p>2. Optiflow neemt de follow-up over</p>
          <p>3. Kandidaten worden automatisch opgevolgd</p>
        </div>
      </section>

      {/* VOORBEELD MAIL */}
      <section style={{
        marginTop: "60px",
        background: "#111",
        padding: "20px",
        borderRadius: "12px",
        fontSize: "14px"
      }}>
        <h3 style={{ marginBottom: "10px" }}>
          Voorbeeld van een bericht dat automatisch wordt gestuurd:
        </h3>

        <p>
          Hoi Lisa,<br /><br />
          Leuk dat we even contact hadden.<br /><br />
          Sta je open om kort te praten over de rol bij Tech BV?<br /><br />
          Laat even weten wat voor jou uitkomt 🙂<br /><br />
          Groet,<br />
          Henk
        </p>
      </section>

      {/* RESULTAAT */}
      <section style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
          Resultaat
        </h2>

        <ul style={{ marginTop: "16px", color: "#AAB4C3" }}>
          <li>• Meer reacties zonder extra werk</li>
          <li>• Consistente follow-up</li>
          <li>• Geen kandidaten meer vergeten</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{ marginTop: "80px", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "18px" }}>
          Benieuwd hoe dit werkt in jouw proces?
        </h2>

        <button style={{
          marginTop: "20px",
          padding: "14px",
          width: "100%",
          background: "#fff",
          color: "#000",
          border: "none",
          borderRadius: "10px"
        }}>
          Plan een korte demo
        </button>
      </section>

    </main>
  );
}
