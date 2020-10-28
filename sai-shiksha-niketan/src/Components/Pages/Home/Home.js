import React from "react";

import imgData from "../../Images";
import "./Home.css";
import Slider from "../../ui/Slider";

const Home = (props) => {
  return (
    <div className="home">
      <div className={`slider__container`}>
        <Slider top={props.stickyClass} data={imgData} />
      </div>
    </div>
  );
};

export default Home;
