import React from "react";
import "./Header.css";
import { AiOutlineMenuFold } from "react-icons/ai";
const Header = ({ openHandler }) => {
  return (
    <div className="student__header">
      <div className="student__header-brand">
        <h1>SSN</h1>
      </div>
      <ul className="student__list">
        <li className="student__item">Home</li>
        <li className="student__item">Profile</li>
        <li className="student__item">Results</li>
        <li className="student__item">Posts</li>
      </ul>
      <div className="student__burgerIcon" onClick={openHandler}>
        <h1>
          <AiOutlineMenuFold />
        </h1>
      </div>
    </div>
  );
};

export default Header;
