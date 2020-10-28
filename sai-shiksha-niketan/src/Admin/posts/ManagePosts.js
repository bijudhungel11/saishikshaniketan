import React, { useState } from "react";
import Card from "../../Card";

import "./Posts.css";
const ManagePosts = () => {
  const [data] = useState([
    {
      title: "Create Posts",
      img: "./images/createposts.png",
      description: "It will help you to create the posts",
      route: "/createnewposts",
      btn__title: "Create posts",
      btn__class: "btn-outline-success",
    },
    {
      view: true,
      title: "View Posts",
      img: "./images/viewposts.png",
      description: "It will help you to view the posts",
      route: "/viewposts",
      btn__title: "View posts",
      btn__class: "btn-outline-info",
    },
    {
      title: "Manage Posts",
      img: "./images/manageposts.png",
      description: "It will help you to manage the posts",
      route: "/posts",
      btn__title: "Manage posts",
      btn__class: "btn-outline-warning",
    },
  ]);
  return (
    <div>
      <div className=" card__container">
        {data.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            description={post.description}
            img={post.img}
            route={post.route}
            btn__title={post.btn__title}
            btn__class={post.btn__class}
            view={post.view}
          />
        ))}
      </div>
    </div>
  );
};

export default ManagePosts;
