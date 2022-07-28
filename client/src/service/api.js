import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/api/signup`, data);
  } catch (error) {
    console.log("Error while calling signup api ", error);
    return error.response;
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/api/login`, data);
  } catch (error) {
    console.log("Error while calling login api ", error);
    return error.response;
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${URL}/api/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling payment api ", error);
  }
};
