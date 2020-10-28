import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggle, toggleHandler }) => {
  return (
    <>
      <header className="admin__header">
        <Link to="/home" className="text-decoration-none">
          <h1 className="admin__header--brand">SSN</h1>
        </Link>
        <h1 className="text-warning"> Sai Shiksha Niketan Administration</h1>
        <div className="admin__burgerIcon" onClick={toggleHandler}>
          <span
            className={`admin__burgerIcon__span admin__burgerIcon-1 ${
              toggle ? "" : "active"
            }`}
          ></span>
          <span
            className={`admin__burgerIcon__span admin__burgerIcon-2 ${
              toggle ? "" : "active"
            }`}
          ></span>
          <span
            className={`admin__burgerIcon__span admin__burgerIcon-3 ${
              toggle ? "" : "active"
            }`}
          ></span>
        </div>
      </header>
    </>
  );
};

export default Header;
