import {
  STUDENT_SAVE_FAIL,
  STUDENT_SAVE_SUCCESS,
  STUDENT_SAVE_REQUEST,
  STUDENT_LIST_FAIL,
  STUDENT_LIST_SUCCESS,
  STUDENT_LIST_REQUEST,
  CLASS_STUDENT_LIST_FAIL,
  CLASS_STUDENT_LIST_REQUEST,
  STUDENT_SUCCESS,
  STUDENT_FAIL,
  STUDENT_REQUEST,
  CLASS_STUDENT_LIST_SUCCESS,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  STUDENTS_LENGTH_REQUEST,
  STUDENTS_LENGTH_SUCCESS,
  STUDENTS_LENGTH_FAIL,
} from "../constants/studentConstants";
import axios from "axios";
const saveStudent = (student, id) => async (dispatch, getState) => {
  console.log(id);
  try {
    dispatch({ type: STUDENT_SAVE_REQUEST, payload: student });
    const {
      userLogin: { userInfo },
    } = getState();
    if (!id) {
      const { data } = await axios.post("/api/students", student, {
        headers: { Authorization: "Bearer" + userInfo.token },
      });
      console.log("the value of the data from the action", data);
      dispatch({ type: STUDENT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.patch("/api/students/" + id, student, {
        headers: {
          Authorization: "Bearer" + userInfo.token,
        },
      });
      dispatch({ type: STUDENT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: STUDENT_SAVE_FAIL, payload: error.message });
  }
};

/* list product */

const listStudent = () => async (dispatch) => {
  dispatch({ type: STUDENT_LIST_REQUEST });
  try {
    const { data } = await axios.get("/api/students");

    dispatch({ type: STUDENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: STUDENT_LIST_FAIL, payload: error.message });
  }
};

const classStudentList = (classValue) => async (dispatch) => {
  dispatch({ type: CLASS_STUDENT_LIST_REQUEST });
  try {
    const { data } = await axios.get("/api/students/" + classValue);
    /* console.log(data); */
    dispatch({ type: CLASS_STUDENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CLASS_STUDENT_LIST_FAIL, payload: error.message });
  }
};
/* for getting the data of the student */
const studentDataAction = (studentId) => async (dispatch) => {
  console.log(studentId);
  dispatch({ type: STUDENT_REQUEST });
  try {
    const { data } = await axios.get("/api/students/student/" + studentId);

    dispatch({
      type: STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STUDENT_FAIL,
      payload: error.message,
    });
  }
};

const deleteStudentAction = (studentId) => async (dispatch, getState) => {
  dispatch({ type: DELETE_STUDENT_REQUEST, payload: studentId });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const { data } = await axios.delete("/api/students/" + studentId, {
      headers: { authorization: "Bearer" + userInfo.token },
    });
    dispatch({ type: DELETE_STUDENT_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({
      type: DELETE_STUDENT_FAIL,
      payload: error.message,
    });
  }
};

const studentsLengthAction = () => async (dispatch) => {
  dispatch({
    type: STUDENTS_LENGTH_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/students/length");

    dispatch({
      type: STUDENTS_LENGTH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STUDENTS_LENGTH_FAIL,
      payload: error,
    });
  }
};
export {
  saveStudent,
  listStudent,
  classStudentList,
  studentDataAction,
  deleteStudentAction,
  studentsLengthAction,
};
