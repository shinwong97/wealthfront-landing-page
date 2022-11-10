import { React } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function FloatingCards(props) {
  const tradings = [
    {
      title: "Bitcoin",
    },
    {
      title: "Dollar Cost Average",
      margin: 8,
    },
    {
      title: "USDT Alpha",
    },
    {
      title: "Interest Rate Trading",
      margin: 15,
    },
    {
      title: "Cardano",
      margin: 15,
    },
  ];

  return (
    <div>
      {tradings.map((trade) => (
        <Card
          sx={{ minWidth: 275, marginTop: 3, marginLeft: -`${trade.margin}` }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14, color: "#230B59" }}
              color="text.secondary"
              gutterBottom
            >
              {trade.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
