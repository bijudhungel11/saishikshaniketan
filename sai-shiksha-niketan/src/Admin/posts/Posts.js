import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postsListAction } from "../../redux/actions/postsAction";
import Post from "./Post";
import "./Posts.css";
import ClockLoader from "react-spinners/ClockLoader";

const Posts = (props) => {
  const postsList = useSelector((state) => state.postsList);
  const dispatch = useDispatch();
  const { loading, error, posts } = postsList;

  console.log(posts);
  useEffect(() => {
    dispatch(postsListAction());
  }, []);
  console.log(posts);
  const sortedPosts = posts?.sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );
  console.log(sortedPosts);

  return (
    <>
      {loading ? (
        <h1 className="text-center">
          <ClockLoader
            size={50}
            color={"#e1ad38"}
            loading={loading}
            style={{ margin: "0 auto" }}
          />
        </h1>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="posts__container">
          {sortedPosts?.map((post) => (
            <Post
              id={post._id}
              heading={post.heading}
              description={post.description}
              image={post.image}
              user={post.user}
              key={post._id}
              time={post.time}
              view={props.view}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
