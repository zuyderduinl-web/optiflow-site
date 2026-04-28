export default function Home() {
  return (
    <main
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        background: "#0B1B34",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      {/* NAV */}
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <img
          src="/icon_1024.png"
          alt="Optiflow"
          style={{ height: "28px" }}
        />
      </div>

      {/* HERO */}
      <section
        style={{
          marginTop: "40px",
          maxWidth: "500px"
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "600",
            lineHeight: 1.2
          }}
        >
          Zorg dat elke kandidaat wordt opgevolgd
          zonder dat je er zelf achteraan hoeft
        </h1>

        <p style={{ marginTop: "16px", color: "#AAB4C3" }}>
          Automatiseer je follow-up na eerste contact en voorkom dat gesprekken stilvallen.
        </p>

        <button
          style={{
            marginTop: "24px",
            padding: "14px",
            width: "100%",
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Plan een korte demo
        </button>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          marginTop: "60px",
          background: "#fff",
          color: "#000",
          padding: "20px",
          borderRadius: "12px"
        }}
      >
        <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
          Hoe het werkt
        </h2>

        <div style={{ marginTop: "16px" }}>
          <p>1. Jij benadert iemand</p>
          <p>2. Optiflow neemt de follow-up over</p>
          <p>3. Meer reacties zonder extra werk</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "18px" }}>
          Benieuwd hoe dit werkt in jouw proces?
        </h2>

        <button
          style={{
            marginTop: "20px",
            padding: "14px",
            width: "100%",
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Plan een demo
        </button>
      </section>
    </main>
  );
}
