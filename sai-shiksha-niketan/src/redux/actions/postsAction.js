import axios from "axios";
import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAIL,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL,
  GET_POST_COMMENTS_REQUEST,
  GET_POST_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
} from "../constants/postConstants";
const createPostAction = (
  { heading, description },
  imgUrl,
  { name },
  id
) => async (dispatch) => {
  dispatch({
    type: CREATE_POST_REQUEST,
  });
  try {
    if (!id) {
      const { data } = await axios.post("/api/ssnposts", {
        heading,
        description,
        imgUrl,
        user: name,
      });

      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: data,
      });
    } else {
      const { data } = await axios.put("/api/ssnposts/editpost/" + id, {
        heading,
        description,
        imgUrl,
        user: name,
      });
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: data,
      });
    }
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

const postDataAction = (id) => async (dispatch) => {
  dispatch({
    type: POST_DATA_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/ssnposts/post/" + id);

    dispatch({ type: POST_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_DATA_FAIL, payload: error.message });
  }
};
const postCommentAction = ({ comment }, { name, type }, id) => async (
  dispatch
) => {
  if (id && comment && name && type) {
    dispatch({
      type: POST_COMMENT_REQUEST,
    });

    try {
      if (id && comment && name && type) {
        const { data } = await axios.post("/api/ssnposts/comments", {
          id,
          comment,
          name,
          type,
        });
        dispatch({
          type: POST_COMMENT_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: POST_COMMENT_FAIL,
        payload: error.message,
      });
    }
  }
};

const gettingCommentAction = (id) => async (dispatch) => {
  dispatch({
    type: GET_POST_COMMENTS_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/ssnposts/comments/" + id);

    dispatch({
      type: GET_POST_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_POST_COMMENTS_FAIL,
      payload: error.message,
    });
  }
};

const deletePostAction = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_POST_REQUEST,
  });
  try {
    const { data } = await axios.delete("/api/ssnposts/" + id);

    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload: error.message,
    });
  }
};
export {
  createPostAction,
  postsListAction,
  postDataAction,
  postCommentAction,
  gettingCommentAction,
  deletePostAction,
};
