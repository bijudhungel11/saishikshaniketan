import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USERS_LENGTH_REQUEST,
  USERS_LENGTH_SUCCESS,
  USERS_LENGTH_FAIL,
} from "../constants/userConstants";
import Cookie from "js-cookie";

const loginUser = ({ email, number, password }) => async (
  dispatch,
  getState
) => {
  console.log(email, password, number);
  dispatch({
    type: USER_LOGIN_REQUEST,
    payload: {
      email,
      number,
      password,
    },
  });
  try {
    const { data } = await axios.post("/api/users/signin", {
      email,
      number,
      password,
    });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    const {
      userLogin: { userInfo },
    } = getState();
    /* console.log("the value of the userInfo from Action", userInfo); */
    Cookie.set("userInfo", JSON.stringify(data), { expires: 7 });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: "Invalid USER" });
  }
};
const signupUser = (
  { name, email, password, userType, number },
  select
) => async (dispatch) => {
  // console.log(user);

  dispatch({
    type: USER_SIGNUP_REQUEST,
    payload: {
      name,
      email,
      password,
      userType,
      number,
    },
  });
  try {
    const { data } = await axios.post("/api/users/register", {
      name,
      email,
      password,
      userType,
      number,
    });

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: "Sorry can't register..." });
  }
};

const userListAction = () => async (dispatch) => {
  dispatch({
    type: USER_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/users");
    /* console.log(data); */
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error,
    });
  }
};

const usersLengthAction = () => async (dispatch) => {
  dispatch({
    type: USERS_LENGTH_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/users/length");

    dispatch({
      type: USERS_LENGTH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USERS_LENGTH_FAIL,
      payload: error,
    });
  }
};
export { loginUser, signupUser, userListAction, usersLengthAction };
