import { Box, Grid, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// import { TailSpin } from "react-loader-spinner";
import Loader from "../loader/Loader";

import { getProductDetailsAction } from "../../redux/actions/productActions";

import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
  width: 100%;
`;

const Container = styled(Grid)(({ theme }) => ({
  padding: "40px 0 0 60px",
  background: "#ffffff",
  display: "flex",
  // background: "green",
  [theme.breakpoints.down("md")]: {
    padding: "20px 20px 0 20px",
  },
}));

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, product } = productDetails;

  useEffect(() => {
    // console.log("inside useEffect");
    dispatch(getProductDetailsAction(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  //   console.log(loading, product);

  return (
    <Component>
      {loading === true ? <Loader /> : ""}
      {product && loading === false ? (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </Grid>
        </Container>
      ) : (
        ""
      )}
    </Component>
  );
};

export default DetailView;
