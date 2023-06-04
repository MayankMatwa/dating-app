import logo from "../images/25.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function SignUpPage({ setPage, setUser }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function fontStyle() {
    return {
      fontStyle: "12rem",
    };
  }

  function onSubmit() {
    setUser({ name: userName, email: userEmail, password: userPassword });
    setPage("HomePage");
  }
  function onChange(e) {
    console.log(e.target.name);
    if (e.target.name === "username") setUserName(e.target.value);
    else if (e.target.name === "email") setUserEmail(e.target.value);
    else setUserPassword(e.target.value);
  }
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "120px",
          width: "100px",
          paddingBottom: "5px",
        }}
      />
      <div>
        <form onSubmit={onSubmit}>
          <br />
          <TextField
            required
            name="username"
            label="Name"
            value={userName}
            onChange={(e) => onChange(e)}
            helperText=" "
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <TextField
            required
            name="email"
            label="Email"
            value={userEmail}
            onChange={onChange}
            helperText=" "
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <TextField
            required
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={userPassword}
            onChange={onChange}
            helperText=" "
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {showPassword ? (
                    <VisibilityIcon
                      onClick={() => setShowPassword(false)}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={() => setShowPassword(true)}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />
          <br />
          <Button
            className="signUpSubmit"
            onClick={() => onSubmit()}
            label="SignUp"
            variant="contained"
          >
            SignUp
          </Button>
        </form>
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
      </div>
    </div>
  );
}

export default SignUpPage;
