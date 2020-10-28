import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import {
  usersListReducers,
  userLoginReducers,
} from "./reducers/userLoginReducer";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  studentListReducers,
  studentSaveReducers,
  classStudentListReducers,
  studentDataReducers,
  deleteStudentReducer,
  studentslengthReducers,
} from "./reducers/studentsAddReducers";
import {
  userRegisterReducers,
  usersLengthReducers,
} from "./reducers/userRegisterReducers";
import {
  teachersListReducers,
  teacherSaveReducers,
  teacherDataReducers,
  teacherDeletedReducers,
  classTeacherListReducers,
  teacherslengthReducers,
} from "./reducers/teacherReducers";
import {
  createPostReducers,
  postsListReducers,
} from "./reducers/postsReducers";
const userInfo = Cookie.getJSON("userInfo") || {};

//console.log(userInfo, "The value from the user");
const initialState = {
  userLogin: { userInfo },
};
const reducer = combineReducers({
  /* this userLogin is should be used with userSelector */
  usersList: usersListReducers,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  usersLength: usersLengthReducers,

  studentSave: studentSaveReducers,
  studentList: studentListReducers,
  studentsLength: studentslengthReducers,
  classStudents: classStudentListReducers,
  studentData: studentDataReducers,
  deleteStudent: deleteStudentReducer,

  teacherSave: teacherSaveReducers,
  teachersList: teachersListReducers,
  teacherData: teacherDataReducers,
  teacherDeleted: teacherDeletedReducers,
  classTeacherList: classTeacherListReducers,
  teachersLength: teacherslengthReducers,

  createPost: createPostReducers,
  postsList: postsListReducers,
});

/* to make the redux dev tools works */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* creating the store with reducer and initailState and  middleware */
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
