export default function Services() {
  const services = [
    { icon: "🖨️", title: "Printing", desc: "Color & Black Printing" },
    { icon: "📄", title: "Photocopy", desc: "Fast & High Quality Copies" },
    { icon: "🪪", title: "ID Card Printing", desc: "PVC & Office ID Cards" },
    { icon: "📚", title: "Spiral Binding", desc: "Projects & Thesis Binding" },
    { icon: "🏷️", title: "Flex & Banner", desc: "Shop & Event Banners" },
    { icon: "🎨", title: "Graphic Designing", desc: "Logos, Cards & Posters" },
    { icon: "📑", title: "Lamination", desc: "A4, A3 & ID Lamination" },
    { icon: "📖", title: "Book Binding", desc: "Hard & Soft Binding" },
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#173A8F",
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          Our Services
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            marginBottom: "50px",
          }}
        >
          We provide complete Printing & Stationery Solutions.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#f8fafc",
                borderRadius: "15px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,.08)",
                transition: "0.3s",
              }}
            >
              <div style={{ fontSize: "60px" }}>{service.icon}</div>

              <h3
                style={{
                  color: "#173A8F",
                  marginTop: "20px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  marginTop: "10px",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}