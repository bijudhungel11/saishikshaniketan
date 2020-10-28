import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Admin";
import Students from "./Students";
import Teachers from "./teachersData/Teachers";
import Results from "./resultsData/Results";
import Posts from "./Students";
import Users from "./Students";
import Home from "./home/Home";
import EditStudent from "./studentsData/EditStudent";
const AdminApp = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/admin" exact={true} component={Home}></Route>
          <Route path="/students" component={Students} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/results" component={Results} />
          <Route path="/posts" component={Posts} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  );
};

export default AdminApp;
