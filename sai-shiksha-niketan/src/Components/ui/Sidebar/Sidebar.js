import React from "react";
import "./Sidebar.css";
import { FaFacebook } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { GrAchievement } from "react-icons/gr";
import { GrGallery } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  return (
    <aside className={`sidebar ${props.value ? "active" : ""}`}>
      <div>
        <div className="sidebar__header">
          <Link to="/">
            <img
              className="sidebar__header--img"
              src="https://saivrinda.org/wp-content/uploads/2015/07/ContinuesLight.jpg"
              alt="SaiBaba"
            />
          </Link>

          <div className="sidebar__header--title">
            <Link to="/">
              <h2>All Respect to Sai Baba</h2>
            </Link>
          </div>
        </div>
        <ul className="sidebar__socialMedia">
          <a
            href="https://www.facebook.com/saishikshaniketan/"
            className="sidebar__socialMedia--item"
          >
            <FaFacebook className="fb" />
          </a>

          <a
            href="https://www.facebook.com/saishikshaniketan/"
            className="sidebar__socialMedia--item"
          >
            <AiOutlineMail className="email" />
          </a>
          <a
            href="https://www.google.com/maps/place/Sai+Shiksha+Niketan+High+School/@27.708004,85.3317409,15z/data=!4m5!3m4!1s0x0:0xed32407e5958e599!8m2!3d27.708004!4d85.3317409"
            className="sidebar__socialMedia--item"
          >
            <ImLocation />
          </a>
        </ul>
        <div className="sidebar__container">
          <ul className="sidebar__list">
            <Link to="/" className="sidebar__item">
              <span className="spanOne">
                <AiOutlineHome />
              </span>
              <span className="spanTwo">Home</span>
            </Link>
            <Link to="/services" className="sidebar__item">
              <span className="spanOne">
                <GrServices />
              </span>
              <span className="spanTwo">Services</span>
            </Link>
            <Link to="/achievements" className="sidebar__item">
              <span className="spanOne">
                <GrAchievement />
              </span>
              <span className="spanTwo">Achievments</span>
            </Link>
            <Link to="/galleries" className="sidebar__item">
              <span className="spanOne">
                <GrGallery />
              </span>
              <span className="spanTwo">Gallery</span>
            </Link>
            <Link to="/aboutus" className="sidebar__item">
              <span className="spanOne">
                <FcAbout />
              </span>
              <span className="spanTwo">AboutUs</span>
            </Link>
            <Link to="/login" className="sidebar__item">
              <span>
                <FiLogIn />
              </span>
              <span className="spanTwo">Login</span>
            </Link>
          </ul>
        </div>
        <div className="burger__iconSidebar" onClick={props.toggleHandler}>
          <AiOutlineAlignLeft />
        </div>
        <div className="sidebar__footer">
          <h1>Thank you</h1>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
