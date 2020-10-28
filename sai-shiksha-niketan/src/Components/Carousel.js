import React, { useState } from "react";
import data from "./Images.js";

const Carousel = () => {
  const [value, setValue] = useState(data);
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {value.images.map((item, i) => {
            return (
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className={`${i === 0 ? "active" : ""}`}
              ></li>
            );
          })}
        </ol>
        <div className="carousel-inner">
          {value.images.map((item, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img src={item.img} className="d-block w-100" alt={item.title} />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      <div></div>
    </div>
  );
};

export default Carousel;
