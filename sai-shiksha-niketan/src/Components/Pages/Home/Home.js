import React, { useState } from "react";

import imgData from "../../Images";
import "./Home.css";
import Slider from "../../ui/Slider";
import CounterApp from "../../../CounterApp";

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
