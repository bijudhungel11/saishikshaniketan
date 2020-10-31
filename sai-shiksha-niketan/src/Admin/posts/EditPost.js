import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDataAction } from "../../redux/actions/postsAction";
import CreatePosts from "./CreatePosts";
const EditPost = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postData);
  const { loading, post, error } = postData;
  useEffect(() => {
    dispatch(postDataAction(params.id));
  }, []);
  console.log(post);
  return (
    <>
      {" "}
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <p className="error">{error.message}</p>
      ) : (
        <div>
          <CreatePosts
            view
            title="Update Post"
            postData={post}
            id={params.id}
          />
        </div>
      )}
    </>
  );
};

export default EditPost;
