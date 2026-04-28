export default function Home() {
  return (
    <main style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      background: "#0B1B34",
      color: "#fff",
      minHeight: "100vh"
    }}>

      {/* NAV */}
      <div style={{
        padding: "20px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        <img src="/icon_1024.png" alt="Optiflow" style={{ height: "28px", objectFit: "contain" }} 
/>

      {/* HERO */}
      <section style={{
        padding: "40px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "40px"
      }}>

        <div style={{ maxWidth: "500px" }}>
          <h1 style={{
            fontSize: "32px",
            lineHeight: 1.2,
            fontWeight: "600"
          }}>
            Zorg dat elke kandidaat wordt opgevolgd
            zonder dat je er zelf achteraan hoeft
          </h1>

          <p style={{
            marginTop: "16px",
            color: "#AAB4C3"
          }}>
            Automatiseer je follow-up na eerste contact en voorkom dat gesprekken stilvallen.
          </p>

          <button style={{
            marginTop: "24px",
            padding: "14px 18px",
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "10px",
            fontWeight: "500"
          }}>
            Plan een korte demo
          </button>
        </div>

        <div style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "20px"
        }}>
          <img src="/icon_1024.png" alt="Optiflow" style={{
            width: "100%",
            borderRadius: "12px"
          }} />
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section style={{
        background: "#fff",
        color: "#000",
        padding: "60px 20px"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600" }}>
            Hoe het werkt
          </h2>

          <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>1. Jij benadert iemand</div>
            <div>2. Optiflow neemt de follow-up over</div>
            <div>3. Meer reacties zonder extra werk</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "20px" }}>
          Benieuwd hoe dit werkt in jouw proces?
        </h2>

        <button style={{
          marginTop: "20px",
          padding: "14px 20px",
          background: "#fff",
          color: "#000",
          borderRadius: "10px",
          border: "none"
        }}>
          Plan een demo
        </button>
      </section>

    </main>
  );
}
