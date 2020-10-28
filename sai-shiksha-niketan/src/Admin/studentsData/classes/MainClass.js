import React, { useState } from "react";
import Card from "../../../Card";

const MainClass = ({
  nursery,
  lkg,
  ukg,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  request,
}) => {
  const [data] = useState([
    {
      title: "Class Nursery",
      img: "./images/nurseryf.png",
      description: `"See ${request} list of class Nursery"`,
      route: nursery,
      btn__title: "Nursery",
      btn__class: "btn-outline-success",
    },
    {
      title: "Class L.K.G",
      img: "./images/classes/lkg.png",
      description: `"See ${request} list of class L.K.G"`,
      route: lkg,
      btn__title: "L.K.G",
      btn__class: "btn-outline-info",
    },
    {
      title: "Class U.K.G",
      img: "./images/classes/ukg.png",

      description: `"See ${request} list of class U.K.G"`,
      route: ukg,
      btn__title: "U.K.G",
      btn__class: "btn-outline-danger",
    },

    {
      title: "Class One",
      img: "./images/classes/one.png",

      description: `"See ${request} list of class One"`,
      route: one,
      btn__title: "One",
      btn__class: "btn-outline-danger",
    },
    {
      title: "Class Two",
      img: "./images/classes/two.png",

      route: two,
      btn__title: "Two",
      description: `"See ${request} list of class Two"`,

      btn__class: "btn-outline-dark",
    },
    {
      title: "Class Three",
      img: "./images/classes/three.png",

      description: `"See ${request} list of class Three"`,
      route: three,
      btn__title: "Three",

      btn__class: "btn-outline-dark",
    },
    {
      title: "Class Four",
      img: "./images/classes/four.png",

      description: `"See ${request} list of class Four"`,
      route: four,
      btn__title: "Four",

      btn__class: "btn-outline-dark",
    },
    {
      title: "Class Five",
      img: "./images/classes/five.png",

      description: `"See ${request} list of class Five"`,
      route: five,
      btn__title: "Five",

      btn__class: "btn-outline-dark",
    },
    {
      title: "Class Six",
      img: "./images/classes/six.png",

      description: `"See ${request} list of class Six"`,
      route: six,
      btn__title: "Six",

      btn__class: "btn-outline-dark",
    },
    {
      title: "Class Seven",
      img: "./images/classes/seven.png",

      description: `"See ${request} list of class Seven"`,
      route: seven,
      btn__title: "Seven",

      btn__class: "btn-outline-dark",
    },
    {
      title: "Class Eight",
      img: "./images/classes/eight.png",

      description: `"See ${request} list of class Eight"`,
      route: eight,
      btn__title: "Eight",

      btn__class: "btn-outline-dark",
    },
    {
      title: "Class Nine",
      img: "./images/classes/nine.png",

      description: `"See ${request} list of class Nine"`,
      route: nine,
      btn__title: "Nine",

      btn__class: "btn-outline-dark",
    },
    {
      title: "Class Ten",
      img: "./images/classes/ten.png",

      description: `"See ${request} list of class Ten"`,
      route: ten,
      btn__title: "Ten",

      btn__class: "btn-outline-dark",
    },
  ]);
  return (
    <div className="card__container">
      {data.map((item, i) => (
        <Card
          key={i}
          title={item.title}
          img={item.img}
          description={item.description}
          route={item.route}
          btn__title={item.btn__title}
          btn__class={item.btn__class}
        />
      ))}
    </div>
  );
};

export default MainClass;
