import { useEffect } from "react";

// components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { Box, styled } from "@mui/material";
import { getProductsAction } from "../../redux/actions/productActions";

import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  const firstSlide = products.filter(
    (data) => data.item >= 0 && data.item <= 7
  );

  const secondSlide = products.filter(
    (data) => data.item >= 8 && data.item <= 14
  );

  const thirdSlide = products.filter(
    (data) => data.item >= 15 && data.item <= 21
  );

  const fourthSlide = products.filter(
    (data) => data.item >= 22 && data.item <= 28
  );

  const fifthSlide = products.filter(
    (data) => data.item >= 29 && data.item <= 35
  );

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={firstSlide} title="Deals of the Day" timer={true} />
        <MidSection />
        <Slide products={secondSlide} title="Discounts for You" timer={false} />
        <Slide products={thirdSlide} title="Suggested Items" timer={false} />
        <Slide products={fourthSlide} title="Top Selections" timer={false} />
        <Slide products={fifthSlide} title="Recommended Items" timer={false} />
        <Slide products={secondSlide} title="Trending Offers" timer={false} />
        <Slide products={thirdSlide} title="Season's top picks" timer={false} />
        <Slide
          products={fourthSlide}
          title="Top Deals on Accessories"
          timer={false}
        />
      </Component>
    </>
  );
};

export default Home;
