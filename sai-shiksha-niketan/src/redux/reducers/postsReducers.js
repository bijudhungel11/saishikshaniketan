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
        success: true,
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
function postDataReducers(state = { post: {} }, action) {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return {
        loading: true,
      };
    case POST_DATA_SUCCESS:
      return {
        loading: false,
        post: action.payload,
      };
    case POST_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
function commentPostReducers(state = { commentValue: [] }, action) {
  switch (action.type) {
    case POST_COMMENT_REQUEST:
      return {
        success: true,
        loading: false,
      };
    case POST_COMMENT_SUCCESS:
      return {
        loading: false,
        commentValue: action.payload,
        success: true,
      };
    case POST_COMMENT_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
function gettingCommentsReducers(state = { comments: [] }, action) {
  switch (action.type) {
    case GET_POST_COMMENTS_REQUEST:
      return {
        loading: false,
      };
    case GET_POST_COMMENTS_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
        success: true,
      };
    case GET_POST_COMMENTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
function deletePostReducers(state = { post: {} }, action) {
  switch (action.type) {
    case DELETE_POST_REQUEST:
      return {
        loading: false,
      };
    case DELETE_POST_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        success: true,
      };
    case DELETE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export {
  createPostReducers,
  postsListReducers,
  postDataReducers,
  commentPostReducers,
  gettingCommentsReducers,
  deletePostReducers,
};
