import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { contentfulService } from "../services/contentful";

const Hero = () => {
  const [featuredJackets, setFeaturedJackets] = useState([]);

  useEffect(() => {
    const fetchFeaturedJackets = async () => {
      try {
        const jackets = await contentfulService.getFeaturedJackets();
        setFeaturedJackets(jackets.slice(0, 1));
      } catch (error) {
        console.error("Error fetching featured jackets:", error);
      }
    };

    fetchFeaturedJackets();
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">THE TOKYO ARTERIES</h1>
          {featuredJackets.length > 0 && (
            <div className="hero-jackets">
              {featuredJackets.map((jacket, index) => (
                <img
                  key={jacket.id}
                  src={
                    jacket.image
                      ? `https:${jacket.image}`
                      : "/placeholder-jacket.jpg"
                  }
                  alt=""
                  className={`hero-jacket hero-jacket-${index + 1}`}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ))}
            </div>
          )}
          <p className="hero-subtitle">
            JAPAN VINTAGE STREET STYLE JACKETS
            <br />
            Precision-engineered urban armor for the modern warrior.
          </p>
          <button className="hero-cta" onClick={scrollToProducts}>
            EXPLORE COLLECTION
            <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: "8px" }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
