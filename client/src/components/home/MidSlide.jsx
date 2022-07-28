import { Box, styled } from "@mui/material";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: "82%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: 8,
  marginTop: 10,
  marginLeft: 10,
  textAlign: "center",
  width: "17%",
  cursor: 'pointer',
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/24779041c6e3ebf7.jpg?q=70";
  // "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} alt="ad" style={{ width: "100%", height: "100%" }} />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
