import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const CTA = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "6289876543201"; // Format internasional Indonesia
    const message = encodeURIComponent(
      "Hi! I'm interested in securing a piece from The Tokyo Arteries collection. Can you help me with the details?",
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="section cta-section">
      <div className="container">
        <h2 className="cta-title">READY TO ELEVATE YOUR STREET PRESENCE?</h2>
        <p className="cta-subtitle">
          Limited quantities. Exclusive access. Don't let this opportunity slip
          through the cracks.
        </p>
        <button className="whatsapp-btn" onClick={handleWhatsApp}>
          <FontAwesomeIcon icon={faWhatsapp} />
          SECURE THE PIECE
        </button>
      </div>
    </section>
  );
};

export default CTA;
