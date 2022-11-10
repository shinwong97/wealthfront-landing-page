import { React } from "react";
import { Button, Grid } from "@mui/material";
import btnImage from "../assets/banking_valley_sunset.contenthash.f89782c09c7ab7ae78c605cd1178e5838e46c5fd.png";

export default function BlockButton() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      lg={12}
    >
      <Button
        variant="contained"
        sx={{
          width: "80rem",
          margin: 3,
          padding: 2,
          border: "3px solid #ff9152",
          borderRadius: 2,
          backgroundImage: `url(${btnImage})`,
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        What level of risk suits you best?
      </Button>
    </Grid>
  );
}
