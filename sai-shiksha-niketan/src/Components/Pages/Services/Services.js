import React from "react";
import "./Services.css";
import { useHistory, useParams } from "react-router-dom";
const Services = (props) => {
  const history = useHistory();
  console.log(history.location.pathName);
  const param = useParams();
  console.log(param);

  const handleClick = () => {
    history.push("/achievements");
  };
  return (
    <div className="services">
      <h1>Hello from the services pages</h1>

      <button onClick={handleClick} className="btn btn-success btn-lg">
        Achievements
      </button>
    </div>
  );
};

export default Services;
