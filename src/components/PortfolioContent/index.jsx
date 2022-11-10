import { useState, useEffect, React } from "react";
import { Container, Grid } from "@mui/material";
import Carousel from "../Carousel";
import FloatingCards from "../FloatingCards";
import HeroContent from "../HeroContent";

export default function PorfolionContent() {
  const content = {
    title: "Build a portfolio as unique as you, you beautiful butterfly you.",
    text: "Start with a portfolio curated for interests like Social Responsibility, then customize it to your heart’s content. We offer 100s of funds in categories like clean energy, tech, and crypto. And we make it easy — and safe — to experiment by helping you see when your choices won’t be in line with your preferred risk level.",
  };
  return (
    <div
      style={{
        marginTop: "8rem",
        marginBottom: "8rem",
        position: "relative",
      }}
    >
      <Container>
        <Grid
          container
          direction="row"
          // justifyContent="flex-start"
          alignItems="center"
          lg={12}
        >
          <Grid item lg={5} sx={{ marginLeft: -10 }}>
            <HeroContent title={content.title} text={content.text} />
          </Grid>
          <Grid item lg={5}>
            <Container sx={{ zIndex: 2, position: "relative", marginLeft: 20 }}>
              <Carousel />
            </Container>
          </Grid>
          <Grid item lg={2}>
            <Container
              sx={{
                marginLeft: -5,
                marginTop: -20,
                zIndex: 3,
                position: "relative",
              }}
            >
              <FloatingCards />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
