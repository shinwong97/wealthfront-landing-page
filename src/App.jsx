import Navbar from "./components/Navbar"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import landinghero from './assets/landinghero.png'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Slider from './components/Slider'
import { useState } from "react";


function App() {
const [riskScore, setRiskScore] = useState(0)

  return (
    <div style={{background: '#bdc6f5'}}>
    <Navbar />
<Grid container>
  <Grid item xs={4}>
    <Container>
    <h1 style={{fontSize: 63, color:'#230B59', fontFeatureSetting: "liga"}}>Get your <br /> investing eggs <br /> <span>in way more baskets.</span></h1>
    <p style={{color:'#230B59'}}>
      Stocks are great for making bets, but they’re only part of the investing story. Wealthfront makes it easy to build long-term wealth with fully diversified portfolios that help you manage risk, maximize returns, and minimize taxes.
    </p>
      <Button sx={{background: '#4840BB'}} variant="contained">Get Started</Button>
    </Container>
  </Grid>
        <Grid item xs={8}>
          <img src={landinghero} style={{width: 900, height: 700}} alt="" />
        </Grid>
</Grid>
<div>
<Slider setRiskScore={setRiskScore} />

</div>

<Grid container>
<Grid item xs={8} sx={{background: '#230B59'}}>
<Container sx={{margin:2}}>
  <Grid container  sx={{margin:2}}>
<Grid item xs={2} >
  <h4 style={{color: 'white'}}>
    US Stocks
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:60, background: '#230B59', border: '1px solid white', width: riskScore*7}} elevation="24" />
    
    </Grid>

  </Grid>

  <Grid container  sx={{margin:2}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
    Foreign Stocks
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:60, background: '#4D5898', border: '1px solid white', width: riskScore*2}} elevation="24" />
    
    </Grid>

  </Grid>

  <Grid container  sx={{margin:2}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
    Emerging Stocks
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:60, background: '#4840BB', border: '1px solid white', width: riskScore*3}} elevation="24" />
    
    </Grid>

  </Grid>

   <Grid container  sx={{margin:2}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
    Dividend Stocks
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:60, background: '#7086C9', border: '1px solid white', width: riskScore*4}} elevation="24" />
    
    </Grid>

  </Grid>

 <Grid container  sx={{margin:2}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
   Municipal Bonds
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:60, background: '#BDC6F5', border: '1px solid white', width: riskScore*6.5}} elevation="24" />
    
    </Grid>

  </Grid>

   <Grid container  sx={{margin:2}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
  U.S Gov Bonds
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:60, background: '#AD6035', border: '1px solid white', width: riskScore*2.5}} elevation="24" />
    
    </Grid>

  </Grid>

   <Grid container  sx={{margin:2}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
   Corporate Bonds
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:60, background: '#DF8C5E', border: '1px solid white', width: riskScore*3.5}} elevation="24" />
    
    </Grid>

  </Grid>

   <Grid container  sx={{margin:2}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
   TIPS
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:60, background: '#FED0B9', border: '1px solid white', width: riskScore*3.5}} elevation="24" />
    
    </Grid>

  </Grid>
  

</Container>

</Grid>
<Grid item xs={4}>
 <Container>
    <h1 style={{fontSize: 63, color:'#230B59', fontFeatureSetting: "liga"}}>Smarter <br /> investing, <br /> <span>briliantly personalized.</span></h1>
    <p style={{color:'#230B59'}}>
     Just answer a few questions, and we’ll build you a personalized portfolio of wonderfully diversified, low-cost index funds designed to grow your wealth for the long term. Check out how our personalized portfolios have historically performed.
    </p>
      <Button sx={{background: '#4840BB'}} variant="contained">Get Started</Button>
    </Container>

</Grid>

</Grid>
    </div>
  );
}

export default App;
