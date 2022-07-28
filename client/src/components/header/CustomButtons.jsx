import { useState, useContext } from "react";
import { Box, Button, Typography, styled, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  // background: 'red',
  "& > button, & > p, & > div, & > a": {
    marginRight: "40px",
    fontSize: "16px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const CartButton = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    marginTop: "5px",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#fff",
  textTransform: "none",
  padding: "5px 40px",
  borderRadius: "1.5px",
  boxShadow: "none",
  fontWeight: 600,
  height: "32px",
  ":hover": {
    color: "#fff",
  },
  [theme.breakpoints.down("md")]: {
    background: "#2874f0",
    color: "#fff",
  },
}));

const CustomButtons = ({ setOpenDrawer }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile
          account={account}
          setAccount={setAccount}
          setOpenDrawer={setOpenDrawer}
        />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135, cursor: "pointer" }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3, cursor: "pointer" }}>More</Typography>

      <CartButton to="/cart" onClick={() => setOpenDrawer(false)}>
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: "8px" }}>Cart</Typography>
      </CartButton>
      <LoginDialog
        open={open}
        setOpen={setOpen}
        setOpenDrawer={setOpenDrawer}
      />
    </Wrapper>
  );
};

export default CustomButtons;
