import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Box,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../../assets/xWin-logo.png";

const investNav = [
  "Automated Investing",
  "Explore All Investments",
  "Retirement",
  "College",
];

const saveNav = ["Savings", "ATM Locator", "Borrow", "Retire"];

const learnNav = [
  "Blogging",
  "Help Centers",
  "Investing Guide",
  "Home Planning",
];
const aboutNav = ["About Us", "Newsroom", "Reviews", "Home Planning"];

const NavButton = styled(Button)({
  color: "white",
  fontWeight: "bold",
  fontSize: 12,
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

  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "3px",
    left: "0%",
    transform: "translate(0%,50%)",
    backgroundColor: "white",
    // visibility: 'hidden',
    transition: "all 0.1s ease-out",
  },
  "&:hover:after": {
    visibility: "visible",
    width: "100%",
  },
});

function Footer() {
  return (
    <div style={{}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        lg={12}
        style={{
          backgroundColor: "#18172b",
          paddingTop: 50,
          paddingBottom: 60,
        }}
      >
        <Grid item md={2} lg={2}>
          <img src={logo} height={60} style={{ marginLeft: 50 }} alt="" />
        </Grid>

        <Grid item md={10} lg={10}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            lg={12}
            style={{}}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                lg={12}
                style={{}}
              >
                <Grid item>
                  <h1 style={{ color: "white", fontSize: 22, marginLeft: 90 }}>
                    Investing
                  </h1>

                  {investNav.map((page) => (
                    <NavButton
                      variant="text"
                      key={page}
                      sx={{
                        m: 2,
                        display: "block",
                        color: "white",
                        marginX: 10,
                        marginY: 1,
                      }}
                    >
                      {page}
                    </NavButton>
                  ))}
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                lg={12}
                style={{}}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: 22,
                    marginRight: 40,
                    marginBottom: 5,
                  }}
                >
                  Save
                </h1>

                <Grid item>
                  {saveNav.map((page) => (
                    <NavButton
                      variant="text"
                      key={page}
                      sx={{
                        m: 2,
                        display: "block",
                        color: "white",
                        marginX: 10,
                        marginY: 1,
                      }}
                    >
                      {page}
                    </NavButton>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                lg={12}
                style={{}}
              >
                <Grid item>
                  <h1 style={{ color: "white", fontSize: 22, marginLeft: 86 }}>
                    Learn
                  </h1>

                  {learnNav.map((page) => (
                    <NavButton
                      variant="text"
                      key={page}
                      sx={{
                        m: 2,
                        display: "block",
                        color: "white",
                        marginX: 10,
                        marginY: 1,
                      }}
                    >
                      {page}
                    </NavButton>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                lg={12}
                style={{}}
              >
                <Grid item>
                  <h1 style={{ color: "white", fontSize: 22, marginLeft: 86 }}>
                    About Us
                  </h1>

                  {aboutNav.map((page) => (
                    <NavButton
                      variant="text"
                      key={page}
                      sx={{
                        m: 2,
                        display: "block",
                        color: "white",
                        marginX: 10,
                        marginY: 1,
                      }}
                    >
                      {page}
                    </NavButton>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Footer;
