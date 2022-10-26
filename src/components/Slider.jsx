import * as React from 'react';
import Card from '@mui/material/Card';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from "react";

const marks = [
  {
    value: 0,
    // label: '0°C',
  },
  {
    value: 20,
    // label: '20°C',
  },
  {
    value: 30,
    // label: '37°C',
  },
  {
    value: 40,
    // label: '100°C',
  },
  {
    value: 70,
    // label: '100°C',
  },
  {
    value: 90,
    // label: '100°C',
  },
  {
    value: 100,
    // label: '100°C',
  },
];



function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSliderValues({setRiskScore}) {
// const [riskScore, setRiskScore] = useState(8)

function valuetext(value) {
    setRiskScore(value)
  return `${value}°C`;
}

  return (
    <Card sx={{ width: 500 }}>
        <Container>
        <h3>Risk Score: 
            {/* {riskScore} */}
        </h3>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
        </Container>

    </Card>
  );
}
