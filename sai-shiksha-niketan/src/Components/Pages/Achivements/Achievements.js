import React from "react";

import { useHistory } from "react-router-dom";
import "./Achievements.css";
const Achievements = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="achievements ">
      <h1>Hello messages from the Achievements</h1>

      <button onClick={handleClick} className="btn btn-danger btn-lg">
        Home
      </button>
    </div>
  );
};

export default Achievements;
