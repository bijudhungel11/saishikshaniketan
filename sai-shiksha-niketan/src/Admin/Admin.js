import React, { useState } from "react";

import "./Admin.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Students from "./studentsData/createStudent/Students";
import Teachers from "./teachersData/Teachers";
import Results from "./resultsData/Results";
import Posts from "./posts/Posts";
import Users from "./usersData/Users";
import Home from "./home/Home";
import ManageStudent from "./studentsData/ManageStudent";

import Class from "./studentsData/classes/ClassValue";
import StudentScreen from "./studentsData/student/StudentScreen";
import PageNotFound from "./PageNotFound";
import EditStudent from "./studentsData/editStudent/EditStudent";
import CreateTeacher from "./teachersData/CreateTeacher";
import ViewTeachers from "./teachersData/ViewTeachers";
import DeleteTeachers from "./teachersData/DeleteTeachers";
import UpdateTeacher from "./teachersData/EditTeacher";
import TeacherScreen from "./teachersData/teacher/TeacherScreen";
import ViewStudents from "./studentsData/viewStudent/ViewStudents";
import DeleteStudents from "./studentsData/deleteStudent/DeleteStudents";
import UpdateTeachersList from "./teachersData/EditTeachersList";
//import ClassListTeacher from "./teachersData/ClassListTeacher";
import StudentMainClasses from "./studentsData/classes/StudentMainClasses";
import TeacherMainClasses from "./teachersData/classes/TeacherMainClasses";
import TeacherClass from "./teachersData/classes/TeacherClass";
import EditStudents from "./studentsData/editStudent/EditStudents";
import ManagePosts from "./posts/ManagePosts";
import CreatePosts from "./posts/CreatePosts";
import ViewPosts from "./posts/ViewPosts";
import ViewPost from "./posts/ViewPost";
const Admin = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <Router>
      <div className="admin">
        <Header toggle={toggle} toggleHandler={toggleHandler} />

        <div className="main__container">
          <Sidebar toggle={toggle} />
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/results" component={Results} />
              <Route exact path="/manageposts" component={ManagePosts} />
              <Route exact path="/users" component={Users} />
              {/* Student parts */}
              <Route exact path="/createStudent" component={Students} />
              <Route exact path="/students" component={ManageStudent} />

              <Route exact path="/classes" component={StudentMainClasses} />
              <Route exact path="/classes/:slug" component={Class} />
              <Route
                exact
                path="/classes/student/:id"
                component={StudentScreen}
              />
              <Route exact path="/editStudent" component={EditStudents} />
              <Route exact path="/editStudent/:id" component={EditStudent} />
              <Route exact path="/viewStudent" component={ViewStudents} />
              <Route exact path="/controlStudent" component={DeleteStudents} />
              {/* Student parts end */}
              {/* teacher parts starts */}
              <Route exact path="/teachers" component={Teachers} />
              <Route exact path="/teachers/:id" component={TeacherScreen} />
              <Route exact path="/createTeacher" component={CreateTeacher} />
              <Route exact path="/viewTeacher" component={ViewTeachers} />
              <Route exact path="/controlTeacher" component={DeleteTeachers} />
              <Route
                exact
                path="/teacher/update/:id"
                component={UpdateTeacher}
              />
              <Route
                exact
                path="/updateTeachersList"
                component={UpdateTeachersList}
              />
              <Route exact path="/classList" component={TeacherMainClasses} />
              <Route exact path="/classList/:slug" component={TeacherClass} />
              {/* teacher parts end */}
              {/* route for manageposts */}
              <Route exact component={Posts} path="/posts" />
              <Route exact component={CreatePosts} path="/createnewposts" />
              <Route exact component={ViewPosts} path="/viewposts" />
              <Route exact path="/viewposts/:id" component={ViewPost} />
              {/* end */}
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Admin;
/* 
         






 */
