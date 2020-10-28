import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
const PageNotFound = () => {
  return (
    <>
      <div className="pageNotFound">
        <div>
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
        <Link to="/">Go Home</Link>
      </div>
    </>
  );
};

export default PageNotFound;
