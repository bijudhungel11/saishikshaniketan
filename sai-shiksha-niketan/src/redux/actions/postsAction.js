import axios from "axios";
import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
} from "../constants/postConstants";
const createPostAction = ({ heading, description }, imgUrl, { name }) => async (
  dispatch
) => {
  dispatch({
    type: CREATE_POST_REQUEST,
  });
  try {
    const { data } = await axios.post("/api/ssnposts", {
      heading,
      description,
      imgUrl,
      user: name,
    });
    console.log(data);
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAIL,
      payload: error,
    });
  }
};

const postsListAction = () => async (dispatch) => {
  dispatch({
    type: POSTS_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/ssnposts");
    dispatch({
      type: POSTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_LIST_FAIL,
      payload: error.message,
    });
  }
};
export { createPostAction, postsListAction };
