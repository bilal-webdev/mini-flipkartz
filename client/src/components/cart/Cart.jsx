import { Box, Grid, Typography, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";

// components
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";


const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("lg")]: {
    padding: "30px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const Header = styled(Box)`
  padding: 15px 20px;
  background: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 50px;
  :hover {
    color: #fb641b;
  }
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: "15px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "15px",
    paddingRight: 0,
  },
}));

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "shaykhh2015@gmail.com",
    });

    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };

    post(information);
  };

  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
            <ButtonWrapper>
              <StyledButton onClick={() => buyNow()}>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
