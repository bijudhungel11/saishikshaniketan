import React from "react";
import "./Post.css";

const Post = ({ id, heading, description, image, user, time, view }) => {
  console.log(image);

  return (
    <div className="post__container">
      <div className="post__user">
        <img src={`http://localhost:5000/uploads/${image}`} alt="user" />
        <strong>
          <span>{user}</span>
          <span>{time}</span>
        </strong>
      </div>
      <div className="post__heading">
        <h1 className="text-center">{heading}</h1>
      </div>
      <div className="post__img">
        <img src={`http://localhost:5000/uploads/${image}`} alt="teacher" />
      </div>
      {
        <div className="post__description">
          <pre>{description}</pre>
        </div>
      }
      <div className="post__action">
        {view ? (
          <button className="btn-success btn btn-lg">View</button>
        ) : (
          <>
            <button className="btn-warning btn btn-lg">Edit</button>
            <button className="btn-danger btn btn-lg">Delete</button>
            <button className="btn-success btn btn-lg">View</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
