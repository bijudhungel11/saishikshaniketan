import {
  TEACHER_DATA_FAIL,
  TEACHER_DATA_REQUEST,
  TEACHER_DATA_SUCCESS,
  TEACHER_LIST_FAIL,
  TEACHER_LIST_REQUEST,
  TEACHER_LIST_SUCCESS,
  TEACHER_SAVE_REQUEST,
  TEACHER_SAVE_SUCCESS,
  TEACHER_DELETED_REQUEST,
  TEACHER_DELETED_SUCCESS,
  TEACHER_DELETED_FAIL,
  CLASS_TEACHER_LIST_REQUEST,
  CLASS_TEACHER_LIST_SUCCESS,
  CLASS_TEACHER_LIST_FAIL,
  TEACHER_SAVE_FAIL,
  TEACHERS_LENGTH_REQUEST,
  TEACHERS_LENGTH_SUCCESS,
  TEACHERS_LENGTH_FAIL,
} from "../constants/teacherConstants";

function teacherSaveReducers(state = { teacher: {} }, action) {
  switch (action.type) {
    case TEACHER_SAVE_REQUEST:
      return {
        loading: true,
      };
    case TEACHER_SAVE_SUCCESS:
      return {
        loading: false,
        teacher: action.payload,
        success: true,
      };
    case TEACHER_SAVE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function teachersListReducers(state = { teachers: [] }, action) {
  switch (action.type) {
    case TEACHER_LIST_REQUEST:
      return {
        loading: true,
      };
    case TEACHER_LIST_SUCCESS:
      return {
        loading: false,
        teachers: action.payload,
      };
    case TEACHER_LIST_FAIL:
      return {
        loaidng: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function teacherDataReducers(state = { teacher: {} }, action) {
  switch (action.type) {
    case TEACHER_DATA_REQUEST:
      return {
        loading: true,
      };
    case TEACHER_DATA_SUCCESS:
      return {
        loading: false,
        teacher: action.payload,
      };
    case TEACHER_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function teacherDeletedReducers(state = { teacher: {} }, action) {
  switch (action.type) {
    case TEACHER_DELETED_REQUEST:
      return {
        loading: true,
      };
    case TEACHER_DELETED_SUCCESS:
      return {
        loading: false,
        teacher: action.payload,
        success: true,
      };
    case TEACHER_DELETED_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
function teacherslengthReducers(state = { teacher: {} }, action) {
  switch (action.type) {
    case TEACHERS_LENGTH_REQUEST:
      return {
        loading: true,
      };
    case TEACHERS_LENGTH_SUCCESS:
      return {
        loading: false,
        length: action.payload,
        success: true,
      };
    case TEACHERS_LENGTH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function classTeacherListReducers(state = { teachers: [] }, action) {
  switch (action.type) {
    case CLASS_TEACHER_LIST_REQUEST:
      return {
        loading: true,
      };
    case CLASS_TEACHER_LIST_SUCCESS:
      return {
        loading: false,
        teachers: action.payload,
      };
    case CLASS_TEACHER_LIST_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
export {
  teacherSaveReducers,
  teachersListReducers,
  teacherDataReducers,
  teacherDeletedReducers,
  classTeacherListReducers,
  teacherslengthReducers,
};
