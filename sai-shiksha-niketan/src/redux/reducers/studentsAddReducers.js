import {
  STUDENT_SAVE_REQUEST,
  STUDENT_SAVE_SUCCESS,
  STUDENT_SAVE_FAIL,
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_LIST_FAIL,
  CLASS_STUDENT_LIST_SUCCESS,
  CLASS_STUDENT_LIST_FAIL,
  CLASS_STUDENT_LIST_REQUEST,
  STUDENT_REQUEST,
  STUDENT_SUCCESS,
  STUDENT_FAIL,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  STUDENTS_LENGTH_REQUEST,
  STUDENTS_LENGTH_SUCCESS,
  STUDENTS_LENGTH_FAIL,
} from "../constants/studentConstants";

function studentSaveReducers(state = { student: {} }, action) {
  switch (action.type) {
    case STUDENT_SAVE_REQUEST:
      return { loading: true };
    case STUDENT_SAVE_SUCCESS:
      return {
        loading: false,
        student: action.payload,
        success: true,
        update: "Successfully Updated",
        create: "Successfully Created",
      };
    case STUDENT_SAVE_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
}

function studentListReducers(state = { students: [] }, action) {
  switch (action.type) {
    case STUDENT_LIST_REQUEST:
      return { loading: true };
    case STUDENT_LIST_SUCCESS:
      return { loading: false, students: action.payload };
    case STUDENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function classStudentListReducers(state = { students: [] }, action) {
  switch (action.type) {
    case CLASS_STUDENT_LIST_REQUEST:
      return {
        loading: true,
      };
    case CLASS_STUDENT_LIST_SUCCESS:
      return {
        loading: false,
        students: action.payload,
      };
    case CLASS_STUDENT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function studentDataReducers(state = {}, action) {
  switch (action.type) {
    case STUDENT_REQUEST:
      return {
        loading: true,
      };
    case STUDENT_SUCCESS:
      return {
        loading: false,
        student: action.payload,
      };
    case STUDENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function deleteStudentReducer(state = { student: {} }, action) {
  switch (action.type) {
    case DELETE_STUDENT_REQUEST:
      return { loading: true };
    case DELETE_STUDENT_SUCCESS:
      return { loading: false, student: action.payload, success: true };
    case DELETE_STUDENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function studentslengthReducers(state = { teacher: {} }, action) {
  switch (action.type) {
    case STUDENTS_LENGTH_REQUEST:
      return {
        loading: true,
      };
    case STUDENTS_LENGTH_SUCCESS:
      return {
        loading: false,
        length: action.payload,
      };
    case STUDENTS_LENGTH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
/* 5f79fda3713fd64358c8bed1 */
export {
  studentSaveReducers,
  studentListReducers,
  classStudentListReducers,
  studentDataReducers,
  deleteStudentReducer,
  studentslengthReducers,
};
