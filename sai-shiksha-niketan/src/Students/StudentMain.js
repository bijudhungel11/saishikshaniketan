import React, { useState } from "react";
import "./StudentMain.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentScreen from "./home/StudentScreen";
import Header from "./Header";
import Sidebar from "./Sidebar";
const StudentMain = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!open);
  };
  return (
    <Router>
      <div className="studentMain">
        <div className="studentHeader">
          <Header openHandler={openHandler} />
        </div>
        <div className="student__container">
          <>
            <Sidebar open={open} />
          </>

          <div className="studentMain__container">
            <Switch>
              <Route path="/home" component={StudentScreen} />
            </Switch>
          </div>
        </div>

        <div className="studentMain__footer">Footer</div>
      </div>
    </Router>
  );
};

export default StudentMain;
