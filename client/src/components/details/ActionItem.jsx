import { Box, Button, styled } from "@mui/material";
import { ShoppingCart, FlashOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useState } from "react";

import { addToCart } from "../../redux/actions/cartActions";

import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)`
  width: 100%;
`;

const Component = styled(Box)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  // background: red;
`;

const ImageContainer = styled(Box)`
  border: 1px solid #f0f0f0;
  width: 100%;
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled("img")({
  width: "95%",
  height: "90%",
  objectFit: "contain",
  // padding: "40px",
});

const ButtonWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const StyledButton = styled(Button)`
  width: 49%;
  height: 60px;
  border-radius: 2px;
  padding: 16px 8px;
`;

const ActionItem = ({ product }) => {
  // const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, quantity } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

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
    <LeftContainer>
      <Component>
        <ImageContainer>
          <Image src={product.detailUrl} alt="detailItem" />
        </ImageContainer>
        <ButtonWrapper>
          <StyledButton
            onClick={() => addItemToCart()}
            variant="contained"
            style={{ background: "#ff9f00" }}
          >
            <ShoppingCart />
            Add to Cart
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={() => buyNow()}
            style={{ background: "#fb541b" }}
          >
            <FlashOn />
            Buy Now
          </StyledButton>
        </ButtonWrapper>
      </Component>
    </LeftContainer>
  );
};

export default ActionItem;
