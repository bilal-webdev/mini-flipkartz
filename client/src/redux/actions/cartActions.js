import axios from "axios";
import * as actionType from "../constants/cartConstants.js";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/api/product/${id}`);

    dispatch({
      type: actionType.ADD_TO_CART_SUCCESS,
      payload: { ...data, quantity },
    });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_FAIL, payload: error.message });
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};
