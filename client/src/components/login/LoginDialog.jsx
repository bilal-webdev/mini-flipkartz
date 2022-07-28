import { useState, useContext } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)(({ theme }) => ({
  width: "50vw",
  height: "80vh",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80vw",
    height: "auto",
  },
}));

const Image = styled(Box)(({ theme }) => ({
  background:
    "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat",
  height: "83%",
  width: "28%",
  padding: "45px 35px",
  "& > p, & > h5": {
    color: "#ffffff",
    fontWeight: 600,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  width: "63%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "15px 35px",
  "& > div, & > button, & > p": {
    marginTop: "20px",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "initial",
  },
}));

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641d;
  color: #fff;
  padding: 12px 0px;
  border-radius: 2px;
  :hover {
    color: #fb641b;
  }
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  padding: 12px 0px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 11px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 12px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen, setOpenDrawer }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenDrawer(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);

    console.log(response);
    if (response.status === 401) {
      setError(true);
    } else {
      handleClose();
      setAccount(signup.firstname);
    }
    if (!response) return;
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);

    // console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <Component>
        <Image>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{ marginTop: 20 }}>
            {account.subHeading}
          </Typography>
        </Image>

        {account.view === "login" ? (
          <Container>
            <Wrapper>
              <Heading variant="h5">Login to your account</Heading>
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Username"
              />
              {error ? (
                <Error>Please enter valid username or Password</Error>
              ) : (
                ""
              )}

              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          </Container>
        ) : (
          <Container>
            <Wrapper>
              <Heading variant="h5">Create an account</Heading>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
              />
              {error ? <Error>User already exist</Error> : ""}
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          </Container>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
