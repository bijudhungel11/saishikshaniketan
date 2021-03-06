import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostAction } from "../../redux/actions/postsAction";
import DeleteOverlay from "./DeleteOverlay";
import "./Post.css";

const Post = ({ id, heading, description, image, user, time, view }) => {
  /* console.log(image);
  console.log(id); */
  const [overlay, setOverlay] = useState(false);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    setOverlay(true);
  };

  const overlayClickHandler = () => {
    setOverlay(false);
  };

  const onDeleteHandler = (id) => {
    dispatch(deletePostAction(id));
  };

  return (
    <div className="post__container ">
      <div className="post__user">
        <img src={`${image}`} alt="teacher" />
        <strong>
          <span>{user}</span>
          <span>{time}</span>
        </strong>
      </div>
      <div className="post__heading">
        <h1 className="text-center">{heading}</h1>
      </div>
      <div className="post__img">
        <img src={`${image}`} alt="teacher" />
      </div>
      {
        <div className="post__description">
          <pre>{description}</pre>
        </div>
      }
      <div className="post__action">
        {view ? (
          <div className="text-center ">
            <Link
              to={`/viewposts/${id}`}
              className="btn-success btn btn-lg d-block"
            >
              View
            </Link>
          </div>
        ) : (
          <>
            <Link to={`/editpost/${id}`} className="btn-warning btn btn-lg">
              Edit
            </Link>
            <button
              onClick={() => deleteHandler(id)}
              className="btn-danger btn btn-lg"
            >
              Delete
            </button>
            <div>
              <Link
                to={`/viewposts/${id}`}
                className="btn-success btn btn-lg d-block"
              >
                View
              </Link>
            </div>
          </>
        )}
      </div>
      {overlay ? (
        <>
          <DeleteOverlay
            onDelete={() => onDeleteHandler(id)}
            onOverlayClick={overlayClickHandler}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;
