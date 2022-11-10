import { React } from "react";
import { Grid } from "@mui/material";
import beachBg from "../../assets/beach-dock-750w.contenthash.88b155dba05877babc055c56a7a84fb9bc04b741.png";
import caro3 from "../../assets/carosel3.JPG";
import HeroContent from "../HeroContent";
import "./styles.css";

export default function LandingHero() {
  const content = {
    boldTitle: "Get your investing eggs",
    title: "in way more baskets.",
    text: "Stocks are great for making bets, but they’re only part of the investing story. Wealthfront makes it easy to build long-term wealth with fully diversified portfolios that help you manage risk, maximize returns, and minimize taxes.",
  };

  return (
    <div>
      <Grid container direction="row" lg={12} className="rowGrid">
        <Grid item md={4} lg={4} className="heroContent">
          <HeroContent
            boldTitle={content.boldTitle}
            title={content.title}
            text={content.text}
          />
        </Grid>
        <Grid item md={6} lg={6} sx={{}}>
          <img src={beachBg} className="backgroundImg" alt="" />
        </Grid>
        <Grid item md={2} lg={2} sx={{}}>
          <img src={caro3} className="img" alt="" />
        </Grid>
      </Grid>
    </div>
  );
}
