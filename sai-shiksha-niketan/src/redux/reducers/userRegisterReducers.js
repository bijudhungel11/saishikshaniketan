const {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USERS_LENGTH_REQUEST,
  USERS_LENGTH_SUCCESS,
  USERS_LENGTH_FAIL,
} = require("../constants/userConstants");

function userRegisterReducers(state = {}, action) {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_SIGNUP_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function usersLengthReducers(state = { teacher: {} }, action) {
  switch (action.type) {
    case USERS_LENGTH_REQUEST:
      return {
        loading: true,
      };
    case USERS_LENGTH_SUCCESS:
      return {
        loading: false,
        length: action.payload,
      };
    case USERS_LENGTH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export { userRegisterReducers, usersLengthReducers };
