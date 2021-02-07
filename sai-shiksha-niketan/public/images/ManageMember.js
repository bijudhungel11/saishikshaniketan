import React from "react";
import { useState } from "react";
import Card from "../Card";
import "../Card.css";

const ManageMember = ({
  member,
  memberImg,
  update,
  deleteResult,
  viewClassesRoute,
}) => {
  const [data] = useState([
    {
      title: `Create ${member}`,
      img: "./images/createposts.png",
      description: `It will help you  to  create the ${member} data`,
      route: `/create${member}`,
      btn__title: `Create ${member}`,
      btn__class: "btn-outline-success",
    },
    {
      title: `View ${member}`,
      img: "./images/viewposts.png",
      description: `It will help you to view ${member} data`,
      route: `/view${member}`,
      btn__title: `View ${member}`,
      btn__class: "btn-outline-info",
    },
    {
      title: `Delete ${member}`,
      img: deleteResult ? deleteResult : "./images/delete.png",
      description: `It will help you  to  delete ${member}data `,
      route: `/control${member}`,
      btn__title: `Delete ${member}`,
      btn__class: "btn-outline-danger",
    },
    {
      title: `Update ${member}`,
      img: `./images/update.png`,
      description: `It will help you  to the update ${member.toLowerCase()} component`,
      route: update ? update : "/editStudent",
      btn__title: `Update ${member}`,

      btn__class: "btn-outline-warning",
    },
    {
      title: `Read ${member}`,
      img: `./images/${memberImg}`,
      description: "It will help you  to the create student component",
      route: viewClassesRoute,
      btn__title: "View Classes",

      btn__class: "btn-outline-dark",
    },
  ]);

  return (
    <div className="card__container  ">
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

export default ManageMember;
