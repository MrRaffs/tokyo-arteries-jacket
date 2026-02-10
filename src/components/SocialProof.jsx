import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SocialProof = () => {
  const testimonials = [
    {
      text: "The craftsmanship is insane. Every stitch, every detail screams quality. This isn't just a jacket, it's a statement.",
      author: "@streetking_jakarta",
      rating: 5,
    },
    {
      text: "Finally found pieces that match my aesthetic. Tokyo Arteries gets it - it's not just fashion, it's armor for the streets.",
      author: "@urbanninja_bdg",
      rating: 5,
    },
    {
      text: "Been hunting for authentic Japanese street style for years. This is it. The real deal, not some knockoff garbage.",
      author: "@collector_surabaya",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "SATISFIED WARRIORS" },
    { number: "50+", label: "EXCLUSIVE PIECES" },
    { number: "98%", label: "REPEAT CUSTOMERS" },
    { number: "24/7", label: "STREET CREDIBILITY" },
  ];

  return (
    <section className="section social-proof">
      <div className="container">
        <h2 className="section-title">VERIFIED BY THE STREETS</h2>

        {/* Stats Grid */}
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            marginBottom: "80px",
            textAlign: "center",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                padding: "30px 20px",
                background: "rgba(107, 70, 193, 0.1)",
                border: "2px solid rgba(139, 92, 246, 0.2)",
                borderRadius: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "var(--retro-pink)",
                  marginBottom: "8px",
                }}
              >
                {stat.number}
              </h3>
              <p
                style={{
                  color: "var(--accent-purple)",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div style={{ marginBottom: "16px" }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{
                      color: "var(--retro-yellow)",
                      marginRight: "4px",
                      fontSize: "1.2rem",
                    }}
                  />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">{testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
