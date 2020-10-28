import React, { useState, useEffect } from "react";
import "./Slider.css";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
const Slider = ({ data }) => {
  const [x, setX] = useState(0);
  const [value, setValue] = useState(false);
  const [pause, setPause] = useState(false);

  const func = function slider() {
    if (x === -100 * (data.images.length - 1)) {
      setX(0);
      setValue(true);
    } else {
      setX(x - 100);

      setValue(false);
    }
  };
  let timer;
  useEffect(() => {
    timer = setTimeout(func, 2000);

    if (pause) {
      return clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [x, pause]);

  const goLeft = () => {
    setPause(false);
    if (x === 0) {
      setValue(true);
      setX(-(data.images.length - 1) * 100);
    } else {
      setValue(false);
      setX(x + 100);
    }
  };

  const goRight = () => {
    setPause(false);
    if (x === -100 * (data.images.length - 1)) {
      setValue(true);
      setX(0);
    } else {
      setX(x - 100);
      setValue(false);
    }
  };
  const slideHandler = () => {
    setPause(!pause);
    return clearTimeout(timer);
  };

  const dotHandler = (i) => {
    setPause(false);
    setX(i * -100);
  };
  const pauseHandler = () => {
    setPause(!pause);
    return clearTimeout(timer);
  };
  return (
    <div className="slider">
      {data.images.map((item, i) => (
        <div
          className={`slide ${value ? "active" : ""}`}
          key={i}
          style={{
            transform: `translate(${x}%)`,
          }}
          onClick={slideHandler}
        >
          <img
            src={item.img}
            alt="img"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      ))}
      <div className="dot-container">
        {data.images.map((item, i) => (
          <span
            className={`dot ${x / 100 === -i ? "active" : ""}`}
            key={i}
            onClick={() => dotHandler(i)}
          ></span>
        ))}
      </div>
      <button className="goLeft" onClick={goLeft}>
        <FaChevronCircleLeft />
      </button>
      <div className="pause-button" onClick={pauseHandler}>
        {pause ? <AiOutlinePlayCircle /> : <AiOutlinePauseCircle />}
      </div>
      <button className="goRight" onClick={goRight}>
        <FaChevronCircleRight />
      </button>
    </div>
  );
};

export default Slider;
