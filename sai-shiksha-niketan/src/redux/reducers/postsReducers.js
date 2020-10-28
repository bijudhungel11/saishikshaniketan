import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
} from "../constants/postConstants";
function createPostReducers(state = { post: {} }, action) {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        loading: true,
      };
    case CREATE_POST_SUCCESS:
      return {
        loading: false,
        post: action.payload,
      };
    case CREATE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function postsListReducers(state = { posts: [] }, action) {
  switch (action.type) {
    case POSTS_LIST_REQUEST:
      return {
        loading: true,
      };
    case POSTS_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };
    case POSTS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export { createPostReducers, postsListReducers };
