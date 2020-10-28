import axios from "axios";
import {
  TEACHER_SAVE_FAIL,
  TEACHER_SAVE_REQUEST,
  TEACHER_SAVE_SUCCESS,
  TEACHER_LIST_FAIL,
  TEACHER_LIST_SUCCESS,
  TEACHER_LIST_REQUEST,
  TEACHER_DATA_REQUEST,
  TEACHER_DATA_SUCCESS,
  TEACHER_DATA_FAIL,
  TEACHER_DELETED_REQUEST,
  TEACHER_DELETED_SUCCESS,
  TEACHER_DELETED_FAIL,
  CLASS_TEACHER_LIST_FAIL,
  CLASS_TEACHER_LIST_SUCCESS,
  CLASS_TEACHER_LIST_REQUEST,
  TEACHERS_LENGTH_REQUEST,
  TEACHERS_LENGTH_SUCCESS,
  TEACHERS_LENGTH_FAIL,
} from "../constants/teacherConstants";

const addTeacher = (teacher, teacherId) => async (dispatch, getState) => {
  dispatch({ type: TEACHER_SAVE_REQUEST, payload: teacher });

  /* console.log(teacher); */
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    if (!teacherId) {
      const { data } = await axios.post("/api/teachers", teacher, {
        headers: { Authorization: "Bearer" + userInfo.token },
      });
      dispatch({
        type: TEACHER_SAVE_SUCCESS,
        payload: data,
      });
    } else {
      const { data } = await axios.put("/api/teachers/" + teacherId, teacher, {
        headers: {
          Authorization: "Bearer" + userInfo.token,
        },
      });
      dispatch({
        type: TEACHER_SAVE_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: TEACHER_SAVE_FAIL,
      payload: error,
    });
  }
};

const teacherListAction = () => async (dispatch) => {
  dispatch({ type: TEACHER_LIST_REQUEST });
  try {
    const { data } = await axios.get("/api/teachers");

    dispatch({
      type: TEACHER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEACHER_LIST_FAIL,
      payload: error,
    });
  }
};

const teacherDataAction = (id) => async (dispatch) => {
  dispatch({ type: TEACHER_DATA_REQUEST, payload: id });

  try {
    const { data } = await axios.get("/api/teachers/teacher/" + id);

    //console.log("the value of the teacher", data);
    dispatch({
      type: TEACHER_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEACHER_DATA_FAIL,
      payload: error,
    });
  }
};

const deleteTeacherAction = (id) => async (dispatch) => {
  dispatch({
    type: TEACHER_DELETED_REQUEST,
    payload: id,
  });
  try {
    const { data } = await axios.delete("/api/teachers/teacher/" + id);
    dispatch({
      type: TEACHER_DELETED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEACHER_DELETED_FAIL,
      payload: error,
    });
  }
};

const classTeacherListAction = (classValue) => async (dispatch) => {
  dispatch({
    type: CLASS_TEACHER_LIST_REQUEST,
    payload: classValue,
  });
  try {
    const { data } = await axios.get("/api/teachers/classList/" + classValue);

    /*  console.log("this is not working ", data); */
    dispatch({
      type: CLASS_TEACHER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: CLASS_TEACHER_LIST_FAIL, payload: error });
  }
};

/* ACTION FOR GETTING THE LENGTH OF THE TEACHERS */

const teachersLengthAction = () => async (dispatch) => {
  dispatch({
    type: TEACHERS_LENGTH_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/teachers/length");

    dispatch({
      type: TEACHERS_LENGTH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEACHERS_LENGTH_FAIL,
      payload: error,
    });
  }
};
export {
  addTeacher,
  teacherListAction,
  teacherDataAction,
  deleteTeacherAction,
  classTeacherListAction,
  teachersLengthAction,
};
