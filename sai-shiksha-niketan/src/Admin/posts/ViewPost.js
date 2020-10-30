import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  postDataAction,
  postCommentAction,
  gettingCommentAction,
} from "../../redux/actions/postsAction";

import "./ViewPost.css";
import { useForm } from "react-hook-form";
import CommentsScreen from "./CommentsScreen";
import { useState } from "react";

const ViewPost = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const postData = useSelector((state) => state.postData);
  const { loading: postLoading, post, error: posterror } = postData;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postComments = useSelector((state) => state.postComments);
  const {
    error: commentError,
    commentValue: commentValue,
    success,
  } = postComments;

  const gettingComments = useSelector((state) => state.gettingComments);

  const { loading, comments } = gettingComments;
  const [bool, setBool] = useState("");
  useEffect(() => {
    dispatch(postDataAction(params.id));
  }, []);

  useEffect(() => {
    if (commentValue) {
      dispatch(gettingCommentAction(params.id));
    }
    if (success) {
      reset({
        comment: "",
      });
    }
  }, [commentValue]);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmitHandler = (data) => {
    setBool(true);
    dispatch(postCommentAction(data, userInfo, params.id));
  };

  const [commentShow, setCommentShow] = useState(false);
  const commentShowHandler = () => {
    setCommentShow((prev) => !prev);
  };
  return (
    <>
      {postLoading ? (
        <h1>loading..</h1>
      ) : posterror ? (
        <p className="error">{posterror}</p>
      ) : (
        <>
          <div className="p-5 viewPost__main">
            <div className="viewPost__author mt-4 pl-3 bg-warning">
              <h1>
                <strong>Post by</strong> <small>{post?.user}</small>
              </h1>
              <h5>({post?.time})</h5>
            </div>
            <div className="viewPost">
              <div className="viewPost__img-container">
                {post?.image ? (
                  <img
                    src={`http://localhost:5000/uploads/${post?.image}`}
                    alt="img"
                    className="viewPost__img"
                  />
                ) : (
                  <img src="" alt="img" className="viewPost__img" />
                )}
              </div>
            </div>
            <div className="viewPost__description">
              <pre>{post?.description}</pre>
            </div>

            <div className="viewPost__comments">
              <form onSubmit={handleSubmit((e) => onSubmitHandler(e))}>
                <div className="comment__form">
                  <label className="comment__label">Comment</label>
                  <input
                    type="text"
                    className="comment__input"
                    placeholder="Write your comment"
                    name="comment"
                    ref={register({
                      required: "Can't Be empty",
                      minLength: 4,
                      pattern: {
                        message: "Type more",
                      },
                    })}
                  />

                  <button className="comment__button btn btn-warning btn-lg ml-4">
                    Comment
                  </button>
                </div>
                {errors.comment && (
                  <p className="errors">{errors.comment.message}</p>
                )}
                {errors.comment?.type === "minLength" && (
                  <p className="errors">Enter more comment</p>
                )}
              </form>
            </div>
          </div>
          <div className="text-center d-flex justify-content-center">
            <button
              className="p-4 btn-warning 
              btn 
              mt-5
              comment__show d-block text-center"
              onClick={commentShowHandler}
            >
              Comments
            </button>
          </div>

          {commentShow ? (
            <div className="comments__container">
              {loading ? (
                <h1>Postting Comment</h1>
              ) : commentError ? (
                <p className="error">{commentError}</p>
              ) : (
                <CommentsScreen id={params.id} comments={comments} />
              )}
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default ViewPost;
