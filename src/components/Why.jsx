import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faShield,
  faBolt,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

const Why = () => {
  const features = [
    {
      icon: faCog,
      title: "PRECISION CRAFTED",
      description:
        "Each piece meticulously engineered with Japanese attention to detail. Premium materials meet cutting-edge design principles.",
    },
    {
      icon: faShield,
      title: "URBAN ARMOR",
      description:
        "Built to withstand the concrete jungle. Reinforced construction that adapts to your lifestyle while maintaining street credibility.",
    },
    {
      icon: faBolt,
      title: "INSTANT IMPACT",
      description:
        "Transform your presence with statement pieces that command respect. Technical aesthetics that speak fluent street.",
    },
    {
      icon: faGem,
      title: "EXCLUSIVE ACCESS",
      description:
        "Limited-edition drops from Tokyo's underground scene. Own what others can only dream of acquiring.",
    },
  ];

  return (
    <section className="section why-section">
      <div className="container">
        <h2 className="section-title">WHY TOKYO ARTERIES</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
