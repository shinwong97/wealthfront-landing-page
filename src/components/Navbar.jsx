import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import styles from '../App.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from "../assets/logo.png";
import { styled } from '@mui/material/styles';


const pages = ['Invest', 'Save', 'Borrow', 'Learn'];

const NavButton = styled(Button)({
 color:"#230B59", 
 fontWeight:'bold', 
  // '&:hover': {
  //   backgroundColor: 'none',
  //   textDecoration: 'underline',
  //   textDecorationThickness: '2px',
  //   textUnderlineOffset: '7px'
  // },
  // '&:after':{
  // position: 'absolute',
  // width: '100%',
  // transform: 'scaleX(0)',
  // height: '2px',
  // bottom: 0,
  // left: 0,
  // backgroundColor:'#0087ca',
  // transformOrigin: 'bottom right',
  // transition: 'transform 0.25s ease-out'
  // },
  // '&:hover:after':{
  //   transform: 'scaleX(1)',
  // transformOrigin: 'bottom left',
  // },


  '&:after': {
      content: "''",
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '3px',
      left: '0%',
      transform: 'translate(0%,50%)',
      backgroundColor: '#230B59',
      // visibility: 'hidden',
      transition: 'all 0.1s ease-out',
    },
    '&:hover:after': {
      visibility: 'visible',
      width: '100%',
    },



})

function Navbar() {
 
  return (
    <Grid container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      lg={12}
      style={{background: '#bdc6f5', paddingRight:'2rem',paddingLeft:'3rem'}}>
      <Grid item md={4}>
         <img src={logo} width={250} height={90} alt="" />

      </Grid>
      <Grid item md={5}>
 <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavButton
                className={styles.button}
                variant="text"
                key={page}
                sx={{ m: 2, display: 'block',}}
              >
                {page}
              </NavButton>
            ))}
          </Box>
      </Grid>
      <Grid item md={3}>
 <Box sx={{ flexGrow: 0 }}>
           <Button sx={{m: 3, color: '#4840BB', border: '1px solid #4840BB', padding:2}} variant="outlined">Log in</Button>
          <Button sx={{background: '#4840BB', padding:2, fontWeight:'bold'}} variant="contained">Get Started</Button>
           
          </Box>
      </Grid>

         

         
    </Grid>
  );
}
export default Navbar;
