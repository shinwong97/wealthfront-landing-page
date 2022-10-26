import Navbar from "./components/Navbar"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import landinghero from './assets/landinghero.png'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function App() {
  return (
    <div style={{background: '#bdc6f5'}}>
    <Navbar />
<Grid container spacing={2} 
// sx={{background: '#bdc6f5'}}
>

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

    </div>
  );
}

export default App;
