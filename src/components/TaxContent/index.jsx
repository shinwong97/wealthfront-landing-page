import { useState, useEffect, React } from "react";
import { Container, Grid, Button } from "@mui/material";

export default function TaxContent() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    countdown();
  }, []);

  const countdown = () => {
    let timeleft = 0.0;
    setInterval(() => {
      if (timeleft < 1.9) {
        setTimer(parseFloat(timeleft).toFixed(1));
        timeleft += 0.1;
      }
    }, 100);
  };
  return (
    <div>
      <Container sx={{ justifyContent: "center" }}>
        <h1
          style={{
            fontSize: 55,
            color: "#230B59",
            fontFamily: "GT Alpina",
            fontWeight: 100,
            lineHeight: 0.9,
            letterSpacing: "-.03em",
            marginLeft: 200,
          }}
        >
          Let your taxes pay you for a change.
        </h1>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          lg={12}
        >
          <Grid item lg={2} sx={{}}>
            <h1
              style={{
                fontSize: 70,
                color: "#230B59",
                fontWeight: "bold",
                lineHeight: 0.9,
                letterSpacing: "-.03em",
              }}
            >
              {timer}%
            </h1>
          </Grid>
          <Grid item lg={5}>
            <h1
              style={{
                fontSize: 45,
                color: "#230B59",
                fontFamily: "GT Alpina",
                fontWeight: 100,
                lineHeight: 0.9,
                letterSpacing: "-.03em",
              }}
            >
              average boost to your <br /> after-tax returns from
              <br /> Tax-Loss Harvesting.
            </h1>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          lg={12}
        >
          <Grid item lg={6}>
            <p style={{ color: "#230B59", fontSize: 18, lineHeight: 1.1 }}>
              Tax-Loss Harvesting is a complicated sounding name for a really
              valuable feature. By making small exchanges on investments that
              lose money, it lets you lower your overall tax bill and put the
              savings right back to work building your long-term wealth. In
              fact, it can boost our clients’ after-tax returns by an average of
              1.8%.
            </p>
          </Grid>
        </Grid>
        <Button
          sx={{
            padding: 2,
            marginTop: 4,
            marginLeft: 65,
            marginBottom: 10,
            border: "1px solid #4840BB",
            color: "#4840BB",
          }}
          variant="outlined"
        >
          Learn More
        </Button>
      </Container>
    </div>
  );
}
