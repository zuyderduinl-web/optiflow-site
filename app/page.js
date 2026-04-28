<section style={{
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "40px",
  alignItems: "center",
  marginTop: "40px"
}}>

  <div style={{ maxWidth: "520px" }}>
    <h1 style={{
      fontSize: "42px",
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

  {/* VISUAL */}
  <div style={{
    background: "#fff",
    borderRadius: "16px",
    padding: "20px"
  }}>
    <p style={{ color: "#000", fontSize: "14px" }}>
      Hoi Lisa,<br /><br />
      Leuk dat we even contact hadden.<br /><br />
      Sta je open om kort te praten over de rol bij Tech BV?<br /><br />
      Laat even weten wat voor jou uitkomt 🙂<br /><br />
      Groet,<br />
      Henk
    </p>
  </div>

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
