import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudentAction } from "../../../redux/actions/studentAction";

import "./ClassStudent.css";
const ClassStudent = (props) => {
  const { data } = props;
  const students = data?.sort(function (a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });
  const deleteStudent = useSelector((state) => state.deleteStudent);
  const { loading, error, success } = deleteStudent;
  const dispatch = useDispatch();
  const [bool, setBool] = useState(false);

  const deleteHandlerAction = (id) => {
    setBool(true);
    dispatch(deleteStudentAction(id));
  };
  /* console.log(students);
  console.log(deleteStudent); */
  useEffect(() => {
    setBool(true);
  }, [bool, deleteStudent?.success, success]);
  /* const history = useHistory();
  const editHandler = (student) => {
    history.push("/createStudent");
  }; */
  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : error ? (
        <>{deleteStudent?.error}</>
      ) : props.screen === "delete" ? (
        <></>
      ) : deleteStudent?.success ? (
        <p> Student Is successfully Deleted</p>
      ) : (
        <></>
      )}{" "}
      <>
        {students?.length === 0 ? (
          <h1 className="text-center text-danger text-capitalize">
            Sorry No Student To show
          </h1>
        ) : (
          <div className="student__data mt-5 ">
            <table className="table table-bordered border-dark table-responsive">
              <thead className="table__header">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Number</th>

                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="table__body">
                {students?.map((student, i) => (
                  <tr key={student._id}>
                    <td>{student.studentId}</td>
                    <td>{student.firstName.toUpperCase()}</td>
                    <td>{student.lastName.toUpperCase()}</td>
                    <td>{student.address}</td>
                    <td>{student.mbNumber}</td>

                    <td className=" action-data text-center">
                      {props.screen === "delete" ? (
                        <button
                          className="btn btn-danger ml-3"
                          onClick={() => deleteHandlerAction(student._id)}
                        >
                          Delete
                        </button>
                      ) : props.screen === "view" ? (
                        <Link
                          to={`classes/student/${student._id}`}
                          className="btn btn-info"
                        >
                          View
                        </Link>
                      ) : props.screen === "update" ? (
                        <Link
                          className="btn btn-warning ml-3"
                          to={`/editStudent/${student._id}`}
                        >
                          Edit
                        </Link>
                      ) : (
                        <>
                          <Link
                            to={`student/${student._id}`}
                            className="btn btn-info"
                          >
                            View
                          </Link>

                          <Link
                            className="btn btn-warning ml-3"
                            to={`/editStudent/${student._id}`}
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger ml-3"
                            onClick={() => deleteHandlerAction(student._id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    </>
  );
};

export default ClassStudent;
