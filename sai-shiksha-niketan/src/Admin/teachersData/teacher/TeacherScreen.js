import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { teacherDataAction } from "../../../redux/actions/teacherAction";
import "./TeacherScreen.css";
const TeacherScreen = () => {
  const params = useParams();

  console.log("the value of the params", params.id);
  const teacherData = useSelector((state) => state.teacherData);
  const { loading, teacher, error } = teacherData;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(teacherDataAction(params.id));
  }, [params.id]);
  console.log(teacherData);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="teacherData__containerMain">
          <div className="teacherData__container mt-5">
            <h1 className="bg-warning w-100 text-center  mb-0 font-weight-bolder">
              Personal Information
            </h1>
            <div className="teacherDataP__info mt-0">
              <div className="teacherDataP__info--1">
                <div>
                  <label>First Name:</label>
                  <span className="text-uppercase">
                    {teacher?.[0]?.firstName}
                  </span>
                </div>
                <div>
                  <label>Middle Name:</label>
                  <span className="text-uppercase">
                    {teacher?.[0]?.middleName}
                  </span>
                </div>
                <div>
                  <label>Last Name:</label>
                  <span className="text-uppercase">
                    {teacher?.[0]?.lastName}
                  </span>
                </div>
                <div>
                  <label>Gmail:</label>
                  <span>{teacher?.[0]?.gmail}</span>
                </div>
                <div>
                  <label>Mobile Number:</label>
                  <span>{teacher?.[0]?.mbNumber}</span>
                </div>
              </div>
              <div className="teacherDataP__info--2">
                <div>
                  <label>Teacher Id:</label>

                  <span>{teacher?.[0]?.teacherId}</span>
                </div>
                <div>
                  <label>Address:</label>

                  <span>{teacher?.[0]?.address}</span>
                </div>
                <div>
                  <label>Birth Date:</label>
                  <span>{teacher?.[0]?.calender}</span>
                </div>
                <div>
                  <label>Gender:</label>
                  <span className="text-capitalize">
                    {teacher?.[0]?.gender}
                  </span>
                </div>
              </div>
            </div>
            <h1 className="bg-warning w-100 text-center font-weight-bolder mb-0">
              Other Information
            </h1>
            <div className="teacherDataOther__info">
              <div className="teacherDataC__info">
                <h2 className="text-center">Education Info</h2>

                <div>
                  <label>Education:</label>
                  <span>{teacher?.[0]?.education}</span>
                </div>
                <div>
                  <label>Faculty:</label>
                  <span>{teacher?.[0]?.faculty}</span>
                </div>
                <div>
                  <label>College:</label>
                  <span>{teacher?.[0]?.college}</span>
                </div>
                <div>
                  <label>Degree:</label>
                  <span>{teacher?.[0]?.degree}</span>
                </div>
              </div>
              <div className="teacherDataPost__info">
                <h2 className="text-center">Services Info</h2>
                <div>
                  <label>Teaches At Class</label>
                  <span className="classList__container">
                    {teacher?.[0]?.classList.map((classValue, i) => (
                      <span key={i}>{classValue}</span>
                    ))}
                  </span>
                </div>
                <div>
                  <label>Work Experience</label>
                  <span>{teacher?.[0]?.experience}</span>

                  <span> Years </span>
                </div>
                <div>
                  <label>Subject</label>
                  <span>{teacher?.[0]?.subject}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeacherScreen;
