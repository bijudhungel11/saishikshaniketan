import React from "react";
import { Link } from "react-router-dom";
import student from "../images/student.png";
import profile from "../images/profile.png";
import teacher from "../images/teacherfinal.png";
import users from "../images/users.png";
import result from "../images/resultfinal.png";
import home from "../images/home.png";
import post from "../images/post.png";
const Sidebar = ({ toggle }) => {
  return (
    <>
      <aside className={`admin__sidebar ${toggle ? "active" : ""}`}>
        <ul className="admin__list">
          <Link to="/home" className="admin__item admin__item--first">
            <div className="img__container">
              <img
                className="item__img"
                src={`${home ? home : "./home.png"}`}
                alt="teacher"
              />
              <p className={`small__caption ${toggle ? "active" : ""}`}>Home</p>
            </div>

            <span
              className={`item__span small-device ${toggle ? "active" : ""}`}
            >
              Home
            </span>
          </Link>
          <Link to="/students" className="admin__item">
            <div className="img__container">
              <img className="item__img" src={student} alt="student" />
              <p className={`small__caption ${toggle ? "active" : ""}`}>
                Students
              </p>
            </div>
            <span
              className={`item__span small-device ${toggle ? "active" : ""}`}
            >
              Students
            </span>
          </Link>
          <Link to="/teachers" className="admin__item">
            <div className="img__container">
              <img
                className="item__img"
                src={`${teacher ? teacher : "./teacherfinal.png"}`}
                alt="teacher"
              />
              <p className={`small__caption  ${toggle ? "active" : ""}`}>
                Teachers
              </p>
            </div>

            <span
              className={`item__span small-device ${toggle ? "active" : ""}`}
            >
              Teachers
            </span>
          </Link>
          <Link to="/manageposts" className="admin__item">
            <div className="img__container">
              <img
                className="item__img"
                src={`${post ? post : "./post.png"}`}
                alt="post"
              />
              <p className={`small__caption ${toggle ? "active" : ""}`}>
                {" "}
                Posts
              </p>
            </div>

            <span
              className={`item__span small-device ${toggle ? "active" : ""}`}
            >
              Posts
            </span>
          </Link>
          <Link to="/results" className="admin__item">
            <div className="img__container">
              <img
                className="item__img"
                src={`${result ? result : "./resultfinal.png"}`}
                alt="results"
              />
              <p className={`small__caption ${toggle ? "active" : ""}`}>
                Results
              </p>
            </div>

            <span
              className={`item__span small-device ${toggle ? "active" : ""}`}
            >
              Results
            </span>
          </Link>
          <Link to="/users" className="admin__item">
            {" "}
            <div className="img__container">
              <img
                className="item__img item__img-user"
                src={`${users ? users : "./users.png"}`}
                alt="user"
              />
              <p className={`small__caption ${toggle ? "active" : ""}`}>
                Users
              </p>
            </div>
            <span
              className={`item__span small-device ${toggle ? "active" : ""}`}
            >
              Users
            </span>
          </Link>

          <Link to="/users" className="admin__item">
            {" "}
            <div className="img__container">
              <img
                className="item__img"
                src={`${profile ? profile : "./profile.png"}`}
                alt="user"
              />
              <p className={`small__caption ${toggle ? "active" : ""}`}>
                Profile
              </p>
            </div>
            <span
              className={`item__span small-device ${toggle ? "active" : ""}`}
            >
              Profile
            </span>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
