import loginBackground1 from "../images/1.png";
import loginBackground2 from "../images/2.png";
import loginBackground3 from "../images/3.png";
import loginBackground4 from "../images/4.png";
import loginBackground5 from "../images/5.png";
import loginBackground6 from "../images/6.png";
import loginBackground7 from "../images/7.png";
import loginBackground8 from "../images/8.png";
import loginBackground9 from "../images/9.png";
import loginBackground10 from "../images/10.png";
import loginBackground11 from "../images/11.png";
import loginBackground12 from "../images/12.png";
import loginBackground13 from "../images/13.png";
import loginBackground14 from "../images/14.png";
import loginBackground15 from "../images/15.png";
import loginBackground16 from "../images/16.png";
import loginBackground17 from "../images/17.png";
import loginBackground18 from "../images/18.png";
import loginBackground19 from "../images/19.png";
import loginBackground20 from "../images/20.png";
import loginBackground21 from "../images/21.png";
import loginBackground22 from "../images/22.png";
import loginBackground23 from "../images/23.png";
import loginBackground24 from "../images/24.png";
import loginBackground25 from "../images/25.png";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import IconButton from "@mui/material/IconButton";
import AppleIcon from "@mui/icons-material/Apple";

function LandingPage({ setPage, isMobile }) {
  const background = {
    loginBackground1,
    loginBackground2,
    loginBackground3,
    loginBackground4,
    loginBackground5,
    loginBackground6,
    loginBackground7,
    loginBackground8,
    loginBackground9,
    loginBackground10,
    loginBackground11,
    loginBackground12,
    loginBackground13,
    loginBackground14,
    loginBackground15,
    loginBackground16,
    loginBackground17,
    loginBackground18,
    loginBackground19,
    loginBackground20,
    loginBackground21,
    loginBackground22,
    loginBackground23,
    loginBackground24,
    loginBackground25,
  };

  function backgroundStyle(x) {
    return {
      // backgroundImage: `url(${background[x]})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      height: "120px",
      width: "100px",
      paddingTop: "10px",
    };
  }

  function fontStyle() {
    return {
      fontStyle: "12rem",
    };
  }
  const n = 25;

  return (
    <div>
      <div>
        {[...Array(n)].map((e, i) =>
          isMobile === true ? (
            i > 14 ? (
              <img
                src={background["loginBackground" + (i + 1)]}
                alt="logo"
                style={backgroundStyle("loginBackground" + (i + 1))}
                key={i}
              />
            ) : (
              ""
            )
          ) : (
            <img
              src={background["loginBackground" + (i + 1)]}
              alt="logo"
              style={backgroundStyle("loginBackground" + (i + 1))}
              key={i}
            />
          )
        )}
      </div>
      <br />
      <div>
        <Typography style={fontStyle()}>
          Find Your First Meta Matches.
        </Typography>
        <Typography style={fontStyle()}>
          Join us and socialize with millions of meta humans
        </Typography>
      </div>
      <br />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={1} sm={3} md={4} lg={4.5} xl={4.5}></Grid>

            <Grid item xs={7} sm={3.6} md={2} lg={1.8} xl={1.8}>
              <Button
                variant="contained"
                endIcon={<CallMadeIcon />}
                style={{
                  borderRadius: 5,
                  backgroundColor: "black",
                }}
                onClick={() => setPage("SignUpPage")}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={1.5} sm={1} md={0.5} lg={0.5} xl={0.5}>
              <IconButton
                aria-label="delete"
                style={{
                  borderRadius: 10,
                  backgroundColor: "grey",
                }}
              >
                <AppleIcon
                  style={{
                    color: "black",
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={1.5} sm={1} md={0.5} lg={0.5} xl={0.5}>
              <IconButton
                aria-label="delete"
                style={{
                  borderRadius: 10,
                  backgroundColor: "grey",
                  marginLeft: 2,
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google SignIn"
                  style={{
                    height: "24px",
                    backgroundColor: "grey",
                    backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg)`,
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={3} sm={3} md={4} lg={4} xl={4}></Grid>
          </Grid>
        </Box>
      </div>
      <br />
      <div>
        <Typography style={fontStyle()}>
          Already have an Account?{" "}
          <span
            onClick={(e) => setPage("SignInPage")}
            style={{ textDecoration: "none", color: "red", cursor: "pointer" }}
          >
            Sign In
          </span>
        </Typography>
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontStyle: "12rem",
          }}
        >
          <img
            src={loginBackground11}
            style={{ maxWidth: "24px", maxHeight: "24px" }}
            alt="guest login"
          />
          <img
            src={loginBackground12}
            style={{ maxWidth: "24px", maxHeight: "24px" }}
            alt="guest login"
          />
          &nbsp;&nbsp;
          <span
            onClick={(e) => setPage("HomePage")}
            style={{
              textDecoration: "none",
              color: "blueviolet",
              cursor: "pointer",
            }}
          >
            LogIn as a Guest
          </span>
        </Typography>
      </div>
    </div>
  );
}

export default LandingPage;
