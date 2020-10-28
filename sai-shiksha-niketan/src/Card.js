import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({
  title,
  description,
  img,
  route,
  btn__title,
  btn__class,
  user,
  studentUsers,
  teacherUsers,
  adminUsers,
  value,
  length,
}) => {
  return (
    <>
      {route ? (
        <div className="main__card">
          <div className="sub__card">
            <div>
              <img src={img} alt="student" style={{ height: "20rem" }} />
            </div>

            <div className="card__body">
              <h2 className="card-title text-center font-weight-bolder">
                {title}
              </h2>
              {value ? (
                <>
                  <h3>
                    Number: {length} {btn__title}
                  </h3>{" "}
                  {user ? (
                    <strong>
                      <h5>
                        <>Students:{studentUsers}</>,
                        <>Teachers:{teacherUsers}</>,<>Admin:{adminUsers}</>
                      </h5>
                    </strong>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <></>
              )}
              <h4 className="card-text font-weight-bolder">{description}</h4>
            </div>
            <div className="text-center card__footer">
              <Link to={route} className={`btn ${btn__class}`}>
                {btn__title}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>Loading....</>
      )}
    </>
  );
};

export default Card;
