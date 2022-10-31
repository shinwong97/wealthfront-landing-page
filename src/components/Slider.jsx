import * as React from 'react';
import Card from '@mui/material/Card';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
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

const PrettoSlider = styled(Slider)({
  color: '#f4b896',
  height: 5,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
      display: 'none'
    // lineHeight: 1.2,
    // fontSize: 12,
    // background: 'unset',
    // padding: 0,
    // width: 32,
    // height: 32,
    // borderRadius: '50% 50% 50% 0',
    // backgroundColor: '#52af77',
    // transformOrigin: 'bottom left',
    // transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    // '&:before': { display: 'none' },
    // '&.MuiSlider-valueLabelOpen': {
    //   transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    // },
    // '& > *': {
    //   transform: 'rotate(45deg)',
    // },
  },
});


function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSliderValues({setRiskScore}) {
const [riskValue, setRiskValue] = useState(8)


function valuetext(value) {
    setRiskScore(value)
    setRiskValue(value)
  return `${value}°C`;
}

  return (
    <Card sx={{ width: 500 }}>
        <Container>
        <h3 style={{marginBottom: 0}}>Risk score: 
            {riskValue}
        </h3>
      <PrettoSlider
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
