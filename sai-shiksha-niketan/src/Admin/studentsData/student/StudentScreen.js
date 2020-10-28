import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { studentDataAction } from "../../../redux/actions/studentAction";
import "./StudentScreen.css";
const StudentScreen = () => {
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.studentData);
  const { loading, student, error } = studentData;
  const params = useParams();
  console.log(params.id);
  const [data, setData] = useState({});
  useEffect(() => {
    dispatch(studentDataAction(params.id));
    const value = student?.[0];
    setData(value);
  }, []);
  console.log(data);
  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="studentData">
          <h1 className="bg-warning w-100 text-center m-0">
            Student Information
          </h1>
          <div className="studentData__info">
            <div className="studentData__info--main">
              <div className="small__field">
                <label htmlFor="firstname" className="smallfield__label">
                  Name :
                </label>
                <span className="smallfield__span">
                  {student?.[0].firstName.toUpperCase()}
                </span>
              </div>
              <div className="small__field">
                <label htmlFor="midddleName" className="smallfield__label">
                  Middle name :
                </label>
                <span className="smallfield__span">
                  {student?.[0].middleName.toUpperCase()}
                </span>
              </div>
              <div className="small__field">
                <label htmlFor="lastName" className="smallfield__label">
                  LastName :
                </label>
                <span className="smallfield__span">
                  {student?.[0].lastName.toUpperCase()}
                </span>
              </div>
              <div className="small__field">
                <label htmlFor="studentId" className="smallfield__label">
                  StudentId :
                </label>
                <span className="smallfield__span">
                  {student?.[0].studentId}
                </span>
              </div>
            </div>
            <div className="studentData__info--sub">
              <div className="small__field">
                <label htmlFor="mbNubmer" className="smallfield__label">
                  Mobile Number :
                </label>
                <span className="smallfield__span">
                  {student?.[0].mbNumber}
                </span>
              </div>
              <div className="small__field">
                <label htmlFor="gmail" className="smallfield__label">
                  Gmail :
                </label>
                <span className="smallfield__span">{student?.[0].gmail}</span>
              </div>
              <div className="small__field">
                <label htmlFor="gmail" className="smallfield__label">
                  Address :
                </label>
                <span className="smallfield__span">{student?.[0].address}</span>
              </div>
              <div className="small__field">
                <label htmlFor="gmail" className="smallfield__label">
                  Birth Date :
                </label>
                <span className="smallfield__span">
                  {student?.[0].calender}
                </span>
              </div>
            </div>{" "}
          </div>
          <div className="studentParent__info">
            <h1 className="m-0">Parents Information</h1>
            <div>
              <div className="fatherInfo">
                <h2>Father Information</h2>
                <div className="small__field">
                  <label htmlFor="gmail" className="smallfield__label">
                    Name :
                  </label>
                  <span className="smallfield__span">
                    {student?.[0].fatherName}
                  </span>
                </div>
                <div className="small__field">
                  <label htmlFor="gmail" className="smallfield__label">
                    Number :
                  </label>
                  <span className="smallfield__span">
                    {student?.[0].fatherNumber}
                  </span>
                </div>
                <div className="small__field">
                  <label htmlFor="gmail" className="smallfield__label">
                    Gmail :
                  </label>
                  <span className="smallfield__span">
                    {student?.[0].fatherGmail}
                  </span>
                </div>
                <div className="small__field">
                  <label htmlFor="gmail" className="smallfield__label">
                    Occupation :
                  </label>
                  <span className="smallfield__span">
                    {student?.[0].fatherOccupation}
                  </span>
                </div>
                <div className="small__field">
                  <label htmlFor="gmail" className="smallfield__label">
                    Office Name :
                  </label>
                  <span className="smallfield__span">
                    {student?.[0].fatherOfficename}
                  </span>
                </div>
              </div>
              <div className="motherInfo">
                <h2>Mother Information</h2>
                <div className="small__field">
                  <label htmlFor="gmail" className="smallfield__label">
                    Name :
                  </label>
                  <span className="smallfield__span">
                    {student?.[0].motherName}
                  </span>
                </div>
                <div className="small__field">
                  <label htmlFor="gmail" className="smallfield__label">
                    Number :
                  </label>
                  <span className="smallfield__span">
                    {student?.[0].motherNumber}
                  </span>
                </div>
                <div className="small__field">
                  <label htmlFor="gmail" className="smallfield__label">
                    Gmail :
                  </label>
                  <span className="smallfield__span">
                    {student?.[0].motherGmail}
                  </span>
                </div>
                <div className="small__field">
                  <label htmlFor="gmail" className="smallfield__label">
                    Occupation :
                  </label>
                  <span className="smallfield__span">
                    {student?.[0].motherOccupation}
                  </span>
                </div>
                <div className="small__field">
                  <label htmlFor="gmail" className="smallfield__label">
                    Office Name :
                  </label>
                  <span className="smallfield__span">
                    {student?.[0].motherOfficename}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentScreen;
