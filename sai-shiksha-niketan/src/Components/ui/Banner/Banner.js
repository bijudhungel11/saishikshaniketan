import React, { useState, useEffect } from "react";
import "./Banner.css";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
const Banner = (props) => {
  const [index, setIndex] = useState(0);
  /* to change the state of the button and other */
  let biju = 0;
  let i;
  /* important for the data */
  const [images] = useState(props.data);

  /* imporantant one */
  const [active] = useState({
    index: null,
  });

  const prevHandler = (num) => {
    if (index === 0) {
      i = images.images.length;
      const v = i + num;

      setIndex(v);
    } else {
      const v = index + num;

      setIndex(v);
      console.log("after decreasing value of the index", index);
    }
  };

  const nextHandler = (num) => {
    if (index === images.images.length - 1) {
      setIndex(0);
    } else {
      const v = index + num;

      setIndex(v);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (biju < images.images.length) {
        setIndex(biju);
        biju++;
      } else {
        biju = 0;
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [biju]);
  /* making the slideshow that works automatically */

  const slideDot__handler = (num) => {
    setIndex(num);
  };
  //setInterval(slideshow, 3000);
  return (
    <div>
      {/*  {console.log(biju)} */}
      <div
        className={`banner ${props.top}`}
        style={{
          background: `url("${images.images[index].img}")`,
        }}
      >
        <div onClick={() => prevHandler(-1)} className="btn__control btn__prev">
          <FaChevronCircleLeft />
        </div>
        <div onClick={() => nextHandler(1)} className="btn__control btn__next">
          <FaChevronCircleRight />
        </div>
        <div className="banner__slide">
          {images.images.map((item, index) => {
            return (
              <button
                key={index}
                className={`banner__slide--dot ${
                  active.isActive ? "active" : ""
                }`}
                onClick={() => slideDot__handler(index)}
              ></button>
            );
          })}
        </div>
      </div>
      <div className="banner__slideImages--container">
        <div className="banner__slideImages">
          {images.images.map((item, i) => {
            return (
              <div key={i}>
                <img
                  src={`${item.img}`}
                  onClick={() => slideDot__handler(i)}
                  alt={item.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;

/* {
  
}
 */
