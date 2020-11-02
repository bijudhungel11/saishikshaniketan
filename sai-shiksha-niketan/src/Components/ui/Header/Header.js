import React, { useEffect, useState } from "react";
import "./Header.css";
import bg from "../../../images/school__logo-final.png";
import Sidebar from "../Sidebar/Sidebar";

/* icon */
import { GrAchievement } from "react-icons/gr";
import { GrGallery } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  /* for selecting the header node */
  const [header, setHeader] = useState("");
  const [sticky, setSticky] = useState("");
  const [stickyClass, setStickyClass] = useState("");

  const [toggle, setToggle] = useState(false);

  /* to get the value from the id biju and to select the proper id */
  useEffect(() => {
    setHeader(document.getElementById("header"));
  }, []);

  /* to set the value of the sticky which means to get the offsetTop value from header__container
   */
  useEffect(() => {
    setSticky(header.offsetTop);
  }, [sticky]);

  window.onscroll = function () {
    scrollfun();
  };
  //to add the sticky class whenever the header__container goes to the top if not remove that class
  function scrollfun() {
    if (sticky) {
      if (window.pageYOffset >= sticky) {
        setStickyClass("sticky");
      } else {
        setStickyClass("");
      }
    }
  }
  const [index, setIndex] = useState(null);

  const headerIndexHanlder = (i) => {
    setIndex(i);
  };
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <header className={`header ${stickyClass}`}>
        <div className="header__logo">
          <Link to="/">
            <img src={bg} alt="school__Logo" />
          </Link>

          <h3>Education is for Life, Not Merarly a Living</h3>
          <h3 className="school__name">
            Sai Shiksha Niketan High School
            <p>Gyaneshwor, Kathmandu</p>
          </h3>
        </div>
        <div className={`header__container ${stickyClass}`} id="header">
          <div className="header__brand--container">
            <div className={`header__brand ${stickyClass}`}>
              <Link to="/" className={`header__brand--link ${stickyClass}`}>
                <p>SSN</p>
              </Link>
            </div>
          </div>

          <ul className="header__list">
            <Link
              to="/"
              className={`header__item ${stickyClass} ${
                index === 1 ? "active" : ""
              }`}
              onClick={() => headerIndexHanlder(1)}
            >
              <span>
                <AiOutlineHome />
              </span>
              Home
            </Link>
            <Link
              to="/services"
              className={`header__item ${stickyClass} ${
                index === 2 ? "active" : ""
              }`}
              onClick={() => headerIndexHanlder(2)}
            >
              <span>
                <GrServices />
              </span>
              Services
            </Link>
            <Link
              to="/achievements"
              className={`header__item ${stickyClass} ${
                index === 3 ? "active" : ""
              }`}
              onClick={() => headerIndexHanlder(3)}
            >
              <span>
                <GrAchievement />
              </span>
              Achievements
            </Link>
            <Link
              to="/galleries"
              className={`header__item ${stickyClass} ${
                index === 4 ? "active" : ""
              }`}
              onClick={() => headerIndexHanlder(4)}
            >
              <span>
                <GrGallery />
              </span>{" "}
              Galleries
            </Link>
            <Link
              to="/aboutus"
              className={`header__item ${stickyClass} ${
                index === 5 ? "active" : ""
              }`}
              onClick={() => headerIndexHanlder(5)}
            >
              <span>
                <FcAbout />
              </span>
              AboutUS
            </Link>
            <Link
              to="/login"
              className={`header__item ${stickyClass} ${
                index === 6 ? "active" : ""
              }`}
              onClick={() => headerIndexHanlder(6)}
            >
              <span>
                <FiLogIn />
              </span>
              Login
            </Link>
          </ul>
          <div className="burger__icon" onClick={toggleHandler}>
            <span
              className={`burger__icon--span-1 ${
                toggle ? "active" : ""
              } ${stickyClass}`}
            ></span>
            <span
              className={`burger__icon--span-2 ${
                toggle ? "active" : ""
              } ${stickyClass}`}
            ></span>
            <span
              className={`burger__icon--span-3 ${
                toggle ? "active" : ""
              } ${stickyClass}`}
            ></span>
          </div>
        </div>
      </header>
      <Sidebar value={toggle} toggleHandler={toggleHandler} />
      <div
        className={`overlay ${toggle ? "active" : ""}`}
        onClick={toggleHandler}
      ></div>

      <div className="dommy__div">
        <div>{/* <Carousel /> */}</div>
      </div>
    </>
  );
};

export default Header;
