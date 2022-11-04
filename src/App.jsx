import Navbar from "./components/Navbar"
import { useState, useEffect } from "react";
import {Card, CardContent, Typography,Button,Container,Grid,Paper,Box} from '@mui/material';
import Slider from './components/Slider';
import landinghero from './assets/landinghero.png'
import landinghero2 from './assets/landinghero2.png'
import './App.css'
import Carousel from './components/Carousel'
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function App() {
const [riskScore, setRiskScore] = useState(0)
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
    <div style={{
      // background: '#bdc6f5', 
      background:"linear-gradient(to bottom, #bdc6f5, #f4b896, rgb(189 198 245/0))",
    
      }} >
    <Navbar />
<Grid container
      direction="row"
      // justifyContent="space-around"
      // alignItems="center"
      lg={12}
      style={{ paddingRight:'2rem',paddingLeft:'3rem', }}>

  <Grid item xs={4} style={{ marginTop:'4rem'}}>
    <Container>
    <h1 style={{fontSize: 63, color:'#230B59', fontFeatureSetting: "liga",lineHeight:.9 }}>Get your <br /> investing eggs <br /> <span style={{fontFeatureSetting: "liga 1",fontSize:45, fontWeight:100,lineHeight:.9, letterSpacing:'-.03em'}}>in way more baskets.</span></h1>
    <p style={{color:'#230B59', fontSize:18, lineHeight:1.5}}>
      Stocks are great for making bets, but they’re only part of the investing story. Wealthfront makes it easy to build long-term wealth with fully diversified portfolios that help you manage risk, maximize returns, and minimize taxes.
    </p>
      <Button sx={{background: '#536DFE', marginTop:5, padding:2, fontWeight: 'bold'}} variant="contained">Get Started</Button>
    </Container>
  </Grid>
        <Grid item xs={8}>
          <img src={landinghero} style={{width: 900, height: 700}} alt="" />
        </Grid>

</Grid>
<div style={{marginBottom:-20,marginLeft:'15rem',marginTop:'3rem', zIndex:9, position:'relative'}}>
<Slider  setRiskScore={setRiskScore} />

</div>

<div style={{zIndex:1}}>

<Grid container spacing={0} md={12} sx={{zIndex:2}}>
<Grid item xs={8} sx={{background: '#230B59'}}>
<Container sx={{marginTop:1, padding: '5rem 5rem'}}>
  <Grid container  sx={{margin:0}} >
<Grid item md={2} lg={2}>
  <h4 style={{color: 'white'}}>
    US Stocks
  </h4>
</Grid>


    <Grid item md={5} lg={2}>
    <Paper variant="outlined" sx={{height:40, background: '#230B59', border: '1px solid white', width: riskScore*6}} elevation="24" />
    
    </Grid>

  </Grid>

  <Grid container  sx={{margin:0}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
    Foreign Stocks
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:40, background: '#4D5898', border: '1px solid white', width: riskScore*2}} elevation="24" />
    
    </Grid>

  </Grid>

  <Grid container  sx={{margin:0}}>
<Grid item xs={2} >
  <h4 style={{color: 'white'}}>
    Emerging Stocks
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:40, background: '#4840BB', border: '1px solid white', width: riskScore*3}} elevation="24" />
    
    </Grid>

  </Grid>

   <Grid container  sx={{margin:0}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
    Dividend Stocks
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:40, background: '#7086C9', border: '1px solid white', width: riskScore*4}} elevation="24" />
    
    </Grid>

  </Grid>

 <Grid container  sx={{margin:0}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
   Municipal Bonds
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:40, background: '#BDC6F5', border: '1px solid white', width: riskScore*6.5}} elevation="24" />
    
    </Grid>

  </Grid>

   <Grid container  sx={{margin:0}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
  U.S Gov Bonds
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:40, background: '#AD6035', border: '1px solid white', width: riskScore*2.5}} elevation="24" />
    
    </Grid>

  </Grid>

   <Grid container  sx={{margin:0}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
   Corporate Bonds
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:40, background: '#DF8C5E', border: '1px solid white', width: riskScore*3.5}} elevation="24" />
    
    </Grid>

  </Grid>

   <Grid container  sx={{margin:0}}>
<Grid item xs={2}>
  <h4 style={{color: 'white'}}>
   TIPS
  </h4>
</Grid>


    <Grid item xs={6}>
    <Paper variant="outlined" sx={{height:40, background: '#FED0B9', border: '1px solid white', width: riskScore*3.5}} elevation="24" />
    
    </Grid>

  </Grid>
  

</Container>

</Grid>
<Grid item xs={3} sx={{marginLeft:3}}>
 <Container>
    <h1 style={{fontSize: 63, color:'#230B59', fontFeatureSetting: "liga",ontSize:45, fontWeight:100,lineHeight:.9, letterSpacing:'-.03em'}}>Smarter <br /> investing, <br /> <span>briliantly personalized.</span></h1>
    <p style={{color:'#230B59', fontSize:18, lineHeight:1.5}}>
     Just answer a few questions, and we’ll build you a personalized portfolio of wonderfully diversified, low-cost index funds designed to grow your wealth for the long term. Check out how our personalized portfolios have historically performed.
    </p>
      <Button sx={{background: '#536DFE', marginTop:5, padding:2}} variant="contained">Get Started</Button>
    </Container>

</Grid>

</Grid>
</div>

<Grid container
  direction="row"
  justifyContent="center"
  alignItems="center"
  lg={12}
  > 

<Button variant="contained" sx={{width:'80rem', margin: 3, padding: 2, border: '3px solid #ff9152', background: '#536DFE', borderRadius:2}}>What level of risk suits you best?</Button>

</Grid>

<div style={{marginTop:'8rem', marginBottom: '8rem', position:'relative'}}>
<Container>
   <Grid container
  direction="row"
  // justifyContent="flex-start"
  alignItems="center"
  lg={12}
  > 
  <Grid item lg={5} sx={{marginLeft:-10}}>
    <h1 style={{fontSize: 60, color:'#230B59', fontFamily:'GT Alpina',fontWeight:100,lineHeight:.9, letterSpacing:'-.03em'}}>Build a portfolio <br /> as unique as you,  <span>you beautiful butterfly you.</span></h1>
    <p style={{color:'#230B59', fontSize:18, lineHeight:1.5}}>
      Start with a portfolio curated for interests like Social Responsibility, then customize it to your heart’s content. We offer 100s of funds in categories like clean energy, tech, and crypto. And we make it easy — and safe — to experiment by helping you see when your choices won’t be in line with your preferred risk level.
    </p>
      <Button sx={{background: '#536DFE', marginTop:4, padding:2}} variant="contained">Get Started</Button>

  </Grid>
  <Grid item lg={5}>
    <Container sx={{zIndex:2, position:'relative'}}>
{/* <img src={landinghero2} style={{width: 320, height: 600}} alt="" /> */}
<Carousel />
  </Container>
  </Grid>
  <Grid item lg={2}>
    <Container sx={{marginLeft: -15, marginTop:-20 , zIndex:3,position:'relative' }}>

<Card sx={{ minWidth: 275,  }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: '#230B59' }} color="text.secondary" gutterBottom>
          US Direct Indexing
        </Typography>
        
      </CardContent>
      
    </Card>

    <Card sx={{ minWidth: 275,marginTop: 3, marginLeft: -10 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: '#230B59' }} color="text.secondary" gutterBottom>
          Emerging Markets
        </Typography>
        
      </CardContent>
      
    </Card>

    <Card sx={{ minWidth: 275, marginTop: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: '#230B59' }} color="text.secondary" gutterBottom>
          ARKK
        </Typography>
        
      </CardContent>
      
    </Card>
<Card sx={{ minWidth: 275,marginTop: 3, marginLeft: -15 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: '#230B59' }} color="text.secondary" gutterBottom>
          Bitcoin Trust
        </Typography>
        
      </CardContent>
      
    </Card>

    </Container>

  </Grid>

    </Grid>
</Container>
</div>


<div>
<Container>
   <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center"
  lg={12}
  > 
  
  <Grid item lg={5}>
<img src={landinghero} style={{width: 620, height: 600, marginLeft:-190}} alt="" />

  </Grid>
  <Grid item lg={2}>
    <Container sx={{marginLeft: -15, marginTop:-20  }}>



    <Card sx={{ minWidth: 275,marginTop: 3, marginLeft: -10, opacity:.8 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: '#230B59' }} color="text.secondary" gutterBottom>
          We saved you $78.11 on your taxes.
        </Typography>
        
      </CardContent>
      
    </Card>

   
<Card sx={{ minWidth: 275,marginTop: 3, marginLeft: -15, opacity:.8 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: '#230B59' }} color="text.secondary" gutterBottom>
          We automatically invested your $500 deposit.
        </Typography>
        
      </CardContent>
      
    </Card>

    </Container>

  </Grid>

  <Grid item lg={4}>
    <h1 style={{fontSize: 60, color:'#230B59', fontFamily:'GT Alpina',fontWeight:100,lineHeight:.9, letterSpacing:'-.03em'}}>Automation <br /> gives you a<br/> <span>better return on<br/> your time.</span></h1>
    <p style={{color:'#230B59',  fontSize:18, lineHeight:1.5}}>
      Keep your eyes on the big picture, your other investments, or basically anything besides the busywork. We rebalance your portfolio, automatically diversify deposits, and can help save you taxes, all without you ever lifting a finger.
    </p>
      <Button sx={{background: '#536DFE',  padding:2, marginTop:4}} variant="contained">Get Started</Button>

  </Grid>

    </Grid>
</Container>
</div>

<div>
  <Container sx={{justifyContent:'center'}}>
  <h1 style={{fontSize: 55, color:'#230B59', fontFamily:'GT Alpina',fontWeight:100,lineHeight:.9, letterSpacing:'-.03em', marginLeft:200}}>Let your taxes pay you for a change.</h1>

      <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center"
  lg={12}
  > 

    
    <Grid item lg={2} sx={{ }}>
      <h1 style={{fontSize: 70, color:'#230B59',fontWeight:'bold',lineHeight:.9, letterSpacing:'-.03em',}}>{timer}%</h1>
    </Grid>
    <Grid item lg={4}>
<h1 style={{fontSize: 45, color:'#230B59', fontFamily:'GT Alpina',fontWeight:100,lineHeight:.9, letterSpacing:'-.03em'}}>average boost to your <br/> after-tax returns from<br/> Tax-Loss Harvesting.</h1>
    </Grid>


     
  </Grid>

  <Grid container 
  direction="row"
  justifyContent="center"
  alignItems="center"
  lg={12}>
    <Grid item lg={6}>
<p style={{color:'#230B59',  fontSize:18, lineHeight:1.1}}>
      Tax-Loss Harvesting is a complicated sounding name for a really valuable feature. By making small exchanges on investments that lose money, it lets you lower your overall tax bill and put the savings right back to work building your long-term wealth. In fact, it can boost our clients’ after-tax returns by an average of 1.8%.
    </p>
    </Grid>
  </Grid>
    <Button sx={{  padding:2, marginTop:4, border:'1px solid #4840BB', color: '#4840BB'}} variant="outlined">Learn More</Button>


  </Container>
</div>

    </div>
  );
}

export default App;
