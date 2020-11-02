import React from "react";
import "./CommentsScreen.css";
const CommentsScreen = ({ comments, commentDisplay }) => {
  const sortedComments = comments?.sort(
    (a, b) => new Date(b.timestamps) - new Date(a.timestamps)
  );
  console.log(sortedComments);
  return (
    <>
      <div
        className={`comments__screen mt-4 p-4 ${
          commentDisplay ? "active" : ""
        }`}
      >
        {sortedComments?.map((comment) => (
          <div key={comment._id} className="one__comment">
            <p>
              <span className="user__name mr-3">{comment.name}</span>
              <span className="user__timeStamps">({comment.timestamps})</span>
            </p>
            <h1>{comment.comment}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentsScreen;
