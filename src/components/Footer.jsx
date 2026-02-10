import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--darker-bg)",
        borderTop: "2px solid rgba(139, 92, 246, 0.2)",
        padding: "60px 0 30px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                color: "var(--light-text)",
                marginBottom: "16px",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              THE TOKYO ARTERIES
            </h3>
            <p
              style={{
                color: "var(--gray-text)",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              Precision-engineered Japanese vintage street style jackets for the
              modern urban warrior.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="#"
                style={{
                  color: "var(--accent-purple)",
                  fontSize: "1.5rem",
                  transition: "color 0.3s ease",
                }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                style={{
                  color: "var(--accent-purple)",
                  fontSize: "1.5rem",
                  transition: "color 0.3s ease",
                }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                style={{
                  color: "var(--accent-purple)",
                  fontSize: "1.5rem",
                  transition: "color 0.3s ease",
                }}
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "var(--light-text)",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Quick Access
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {["Collection", "Featured", "About", "Contact"].map((link) => (
                <li key={link} style={{ marginBottom: "12px" }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{
                      color: "var(--gray-text)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "var(--light-text)",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Connect
            </h4>
            <div style={{ marginBottom: "12px" }}>
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: "var(--accent-purple)", marginRight: "8px" }}
              />
              <span style={{ color: "var(--gray-text)" }}>
                +62 898-7654-3201
              </span>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "var(--accent-purple)", marginRight: "8px" }}
              />
              <span style={{ color: "var(--gray-text)" }}>
                connect@tokyoarteries.co
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: "var(--accent-purple)", marginRight: "8px" }}
              />
              <span style={{ color: "var(--gray-text)" }}>
                Surabaya, Indonesia
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(139, 92, 246, 0.2)",
            paddingTop: "30px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--gray-text)",
              fontSize: "0.9rem",
            }}
          >
            © {currentYear} The Tokyo Arteries. All rights reserved. |
            Engineered for the streets.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
