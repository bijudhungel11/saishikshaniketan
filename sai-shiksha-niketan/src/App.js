import React from "react";
import "./App.css";
import Header from "./Components/ui/Header/Header";

import About_Us from "./Components/Pages/AboutUS/About_Us";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Services from "./Components/Pages/Services/Services";
import Login from "./Components/forms/Login/Login";
import Achievements from "./Components/Pages/Achivements/Achievements";
import Galleries from "./Components/Pages/Gallery/Galleries";
import Signup from "./Components/forms/SignUp/Signup";
import Data from "./Data";
import { useSelector } from "react-redux";

import Admin from "./Admin/Admin";
import StudentMain from "./Students/StudentMain";

import TeacherMain from "./Admin/teachersData/TeacherMain";

function App(props) {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  //console.log("the value of the userInfo", userInfo);
  return (
    <>
      {userInfo?.isAdmin ? (
        <Admin />
      ) : userInfo?.type === "student" ? (
        <>
          <StudentMain />
        </>
      ) : userInfo?.type?.toLowerCase() === "teacher" ? (
        <>
          <TeacherMain />
        </>
      ) : (
        <Router>
          <div className="app">
            <Header />

            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/achievements" component={Achievements} />
              <Route exact path="/galleries" component={Galleries} />
              <Route exact path="/aboutus" component={About_Us} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>

            <Route exact path="/data" component={Data} />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
