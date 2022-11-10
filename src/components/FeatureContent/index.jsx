import { React } from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import HeroContent from "../HeroContent";
import dexGuru from "../../assets/dexguru.JPG";

export default function FeatureContent() {
  const content = {
    title: "Automation gives you a better return on your time.",
    text: "Keep your eyes on the big picture, your other investments, or basically anything besides the busywork. We rebalance your portfolio, automatically diversify deposits, and can help save you taxes, all without you ever lifting a finger.",
  };
  return (
    <div>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          lg={12}
        >
          <Grid item lg={5}>
            <img
              src={dexGuru}
              style={{ width: 620, height: 600, marginLeft: -190 }}
              alt=""
            />
          </Grid>
          <Grid item lg={2}>
            <Container sx={{ marginLeft: -15, marginTop: -20 }}>
              <Card
                sx={{
                  minWidth: 275,
                  marginTop: 3,
                  marginLeft: -10,
                  opacity: 0.8,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14, color: "#230B59" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    We saved you $78.11 on your taxes.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  minWidth: 275,
                  marginTop: 3,
                  marginLeft: -15,
                  opacity: 0.8,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14, color: "#230B59" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    We automatically invested your $500 deposit.
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </Grid>

          <Grid item lg={5}>
            <HeroContent title={content.title} text={content.text} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
