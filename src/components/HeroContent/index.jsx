import { React } from "react";
import { Button, Container } from "@mui/material";

export default function HeroContent(props) {
  return (
    <Container>
      <h1
        style={{
          fontSize: 63,
          color: "#230B59",
          fontFeatureSetting: "liga",
          lineHeight: 0.9,
        }}
      >
        {props.boldTitle}
        <br />
        <span
          style={{
            fontFeatureSetting: "liga 1",
            fontSize: 60,
            fontWeight: 100,
            lineHeight: 0.9,
            letterSpacing: "-.03em",
            fontFamily: "GT Alpina",
          }}
        >
          {props.title}
        </span>
      </h1>
      <p
        style={{
          color: "#230B59",
          fontSize: 18,
          lineHeight: 1.5,
          fontFamily: "Calibre",
        }}
      >
        {props.text}
      </p>
      <Button
        sx={{
          background: "#536DFE",
          marginTop: 5,
          padding: 2,
          fontWeight: "bold",
        }}
        variant="contained"
      >
        Get Started
      </Button>
    </Container>
  );
}
