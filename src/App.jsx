import "./App.css";
import Hero from "./components/Hero";
import Why from "./components/Why";
import ProductList from "./components/ProductList";
import CTA from "./components/CTA";
import SocialProof from "./components/SocialProof";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      {/* ATTENTION - Hero Section */}
      <Hero />

      {/* INTEREST - Why Section */}
      <Why />

      {/* DESIRE - Product List */}
      <ProductList />

      {/* ACTION - CTA */}
      <CTA />

      {/* TRUST - Social Proof */}
      <SocialProof />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
