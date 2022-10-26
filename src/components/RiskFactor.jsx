import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from "react";


function RiskFactor() {
<Grid container  sx={{margin:2}}>
<Grid item xs={2} >
  <h4 style={{color: 'white'}}>
    US Stocks
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:60, background: '#230B59', border: '1px solid white'}} elevation="24" />
    
    </Grid>

  </Grid>
}


export default RiskFactor;