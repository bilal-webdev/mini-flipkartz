import { Box, styled, Typography } from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
  height: "65vh",
  width: "80%",
  background: "#fff",
  margin: "80px 140px",
  [theme.breakpoints.down("md")]: {
    margin: "80px 50px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "80px 40px",
  },
}));

const Container = styled(Box)`
  text-align: center;
  padding-top: 80px;
`;

const Image = styled('img')(({ theme }) => ({
    width: '20%',
    [theme.breakpoints.down("md")]: {
        width: '30%'
    },
    [theme.breakpoints.down("sm")]: {
        width: '35%'
    }
}))

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Component>
      <Container>
        <Image src={imgurl} alt="empty" />
        <Typography>Your Cart is Empty!</Typography>
        <Typography>Add items to it now</Typography>
      </Container>
    </Component>
  );
};

export default EmptyCart;
