import React from "react";
import "./Sidebar.css";
const Sidebar = ({ open }) => {
  console.log(open);
  return (
    <div className={`student__sidebar ${open ? "active" : ""}`}>
      <ul className="student__sidebar--list">
        <li className={`student__sidebar--item ${open ? "active" : ""}`}>
          <img src="./images/home.png" alt="" className="first-img" />
          <span className={`student-item ${open ? "active" : ""}`}>Home</span>
        </li>
        <li className={`student__sidebar--item ${open ? "active" : ""}`}>
          <img src="./images/student.png" alt="" />
          <span className={`student-item ${open ? "active" : ""}`}>
            Profile
          </span>
        </li>
        <li className={`student__sidebar--item ${open ? "active" : ""}`}>
          <img src="./images/resultfinal.png" alt="" />
          <span className={`student-item ${open ? "active" : ""}`}>
            Results
          </span>
        </li>
        <li className={`student__sidebar--item ${open ? "active" : ""}`}>
          <img src="./images/post.png" alt="" />
          <span className={`student-item ${open ? "active" : ""}`}>Posts</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
