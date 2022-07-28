import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Countdown from "react-countdown";

import { Box, Typography, Button, Divider, styled } from "@mui/material";

import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Deal = styled(Box)(({ theme }) => ({
  padding: "15px 20px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 12px",
  },
}));

const Timer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "#7f7f7f",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));

const DealText = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  fontWeight: 600,
  marginRight: "20px",
  lineHeight: "32px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "19px",
    marginRight: "10px",
  },
}));

const ViewAllButton = styled(Button)`
  margin-left: auto;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
  background-color: #2874f0;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled(Box)`
  height: 150px;
  width: 150px;
`;

const Image = styled("img")`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };

  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer ? (
          <Timer>
            <img
              src={timerURL}
              alt="timer"
              style={{ width: 24, marginRight: 5 }}
            />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        ) : (
          " "
        )}

        <ViewAllButton variant="contained">View All</ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link
            to={`product/${product.id}`}
            style={{ textDecoration: "none" }}
            key={product.id}
          >
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Container>
                <ImageContainer>
                  <Image src={product.url} alt="product" />
                </ImageContainer>
                <Text style={{ fontWeight: 600, color: "#212121" }}>
                  {product.title.shortTitle}
                </Text>
                <Text style={{ color: "green" }}>{product.discount}</Text>
                <Text style={{ color: "#7f7f7f" }}>{product.tagline}</Text>
              </Container>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
