import Navbar from "./components/Navbar";
import { useState } from "react";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import LandingHero from "./components/LandingHero";
import RiskContent from "./components/RiskContent";
import BlockButton from "./components/BlockButton";
import PortfolioContent from "./components/PortfolioContent";
import FeatureContent from "./components/FeatureContent";
import TaxContent from "./components/TaxContent";
import "./App.css";

function App() {
  const [riskScore, setRiskScore] = useState(0);

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #bdc6f5, #f4b896, rgb(189 198 245/0))",
        backgroundSize: "100%",
      }}
    >
      <Navbar />
      <LandingHero />
      <div
        style={{
          marginBottom: -20,
          marginLeft: "15rem",
          marginTop: "3rem",
          zIndex: 9,
          position: "relative",
        }}
      >
        <Slider setRiskScore={setRiskScore} />
      </div>
      <RiskContent width={riskScore} />
      <BlockButton />
      <PortfolioContent />
      <FeatureContent />
      <TaxContent />
      <Footer />
    </div>
  );
}

export default App;
