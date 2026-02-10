import { useState, useEffect } from "react";
import { contentfulService } from "../services/contentful";

const ProductList = () => {
  const [jackets, setJackets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchJackets = async () => {
      setLoading(true);
      const data = await contentfulService.getJackets();
      setJackets(data);
      setLoading(false);
    };

    fetchJackets();
  }, []);

  const categories = [
    "all",
    ...new Set(jackets.map((jacket) => jacket.category)),
  ];

  const filteredJackets =
    filter === "all"
      ? jackets
      : jackets.filter((jacket) => jacket.category === filter);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <section id="products" className="section">
        <div className="container">
          <h2 className="section-title">TACTICAL COLLECTION</h2>
          <div className="loading">
            <div className="spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section-title">TACTICAL COLLECTION</h2>

        <div
          className="filter-buttons"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={{
                margin: "0 8px",
                padding: "8px 16px",
                background:
                  filter === category ? "var(--primary-purple)" : "transparent",
                border: "2px solid var(--primary-purple)",
                color:
                  filter === category
                    ? "var(--white)"
                    : "var(--primary-purple)",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredJackets.map((jacket) => (
            <div
              key={jacket.id}
              className="product-card"
              style={{ position: "relative" }}
            >
              {jacket.featured && (
                <div className="featured-badge">FEATURED</div>
              )}

              <img
                src={
                  jacket.image
                    ? `https:${jacket.image}`
                    : "/placeholder-jacket.jpg"
                }
                alt={jacket.name}
                className="product-image"
                onError={(e) => {
                  e.target.style.background =
                    "linear-gradient(45deg, var(--dark-purple), var(--primary-purple))";
                  e.target.alt = "Product Image";
                }}
              />

              <div className="product-info">
                <div className="product-category">{jacket.category}</div>
                <h3 className="product-name">{jacket.name}</h3>
                <p className="product-description">{jacket.description}</p>
                <div className="product-price">{formatPrice(jacket.price)}</div>
              </div>
            </div>
          ))}
        </div>

        {filteredJackets.length === 0 && !loading && (
          <div
            style={{
              textAlign: "center",
              color: "var(--gray-text)",
              padding: "60px 0",
            }}
          >
            <p>No jackets found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
