import { useState, React } from "react";
import { Button, Container, Grid, Paper } from "@mui/material";

export default function RiskHorizontalBar(props) {
  return (
    <div>
      <Grid container sx={{ marginLeft: 20 }}>
        <Grid item md={2} lg={2}>
          <h4 style={{ color: "white" }}>{props.currency}</h4>
        </Grid>

        <Grid item md={5} lg={2}>
          <Paper
            variant="outlined"
            sx={{
              height: 40,
              background: `${props.color}`,
              border: "1px solid white",
              width: `${props.width}` * `${props.multiplier}`,
            }}
            elevation="24"
          />
        </Grid>
      </Grid>
    </div>
  );
}
