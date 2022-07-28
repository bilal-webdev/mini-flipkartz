import axios from "axios";

import * as actionType from "../constants/productConstant";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

export const getProductsAction = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${URL}/api/products`);

    dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error while calling getProducts api", error.message);
    dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProductDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });

    let { data } = await axios.get(`${URL}/api/product/${id}`);

    dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
