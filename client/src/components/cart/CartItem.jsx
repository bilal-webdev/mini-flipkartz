import { Box, Typography, styled, Button } from "@mui/material";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../../redux/actions/cartActions"

import { addElipsis } from "../../utils/common-utils";

import GroupedButton from "./GroupedButton";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 8px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="product" style={{ width: 110, height: 110, objectFit: 'contain' }} />
        <GroupedButton />
      </LeftComponent>
      <Box style={{ margin: "20px" }}>
        <Typography>{addElipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller: SuperComNet
          <Box component="span">
            <img
              src={fassured}
              alt="flipkart"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontSize: 18, fontWeight: 600 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#26a541" }}>
            {item.price.discount} off
          </Box>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
