import { React } from "react";
import { Container, Grid } from "@mui/material";
import RiskHorizontalBar from "./RiskHorizontalBar";
import HeroContent from "../HeroContent";
import "./styles.css";
export default function RiskContent(props) {
  const riskFactors = [
    {
      color: "#f7931a",
      currency: "Bitcoin(BTC)",
      multiplier: 6,
    },
    {
      color: "#4D5898",
      currency: "Dollar Cost Average (DCA)",
      multiplier: 3,
    },
    {
      color: "#4840BB",
      currency: "Interest Rate Trading (IRT)",
      multiplier: 4,
    },
    {
      color: "#26A17B",
      currency: "USDT Alpha (USDT)",
      multiplier: 1,
    },
    {
      color: "#3C3C3D",
      currency: "Ethereum (ETH)",
      multiplier: 2,
    },
    {
      color: "#2a71d0",
      currency: "Cardano (ADA)",
      multiplier: 2,
    },
  ];

  const content = {
    title: "Smarter investing, brilliantly personalized.",
    text: "Just answer a few questions, and we’ll build you a personalized portfolio of wonderfully diversified, low-cost index funds designed to grow your wealth for the long term. Check out how our personalized portfolios have historically performed.",
  };

  return (
    <div style={{ zIndex: 1 }}>
      <Grid container spacing={0} md={12} sx={{ zIndex: 2 }}>
        <Grid item xs={8} sx={{ background: "#230B59" }}>
          <Container sx={{ marginTop: 1, padding: "5rem 5rem" }}>
            {riskFactors.map((factors) => (
              <RiskHorizontalBar
                color={factors.color}
                currency={factors.currency}
                width={props.width}
                multiplier={factors.multiplier}
              />
            ))}
          </Container>
        </Grid>

        <Grid item xs={3} md={3} lg={3}>
          <HeroContent title={content.title} text={content.text} />
        </Grid>
      </Grid>
    </div>
  );
}
