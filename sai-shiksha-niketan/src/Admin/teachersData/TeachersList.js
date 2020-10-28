import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteTeacherAction,
  teacherListAction,
} from "../../redux/actions/teacherAction";
const TeachersList = (props) => {
  const teachersList = useSelector((state) => state.teachersList);

  const { loading, error, teachers } = teachersList;
  const teacherDeleted = useSelector((state) => state.teacherDeleted);
  const { success } = teacherDeleted;
  //console.log(teachers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(teacherListAction());
  }, [success]);
  console.log("the value of the classTeachers=====>", props.teachersData);
  const teachersValue = props?.teachersData
    ? props.teachersData.sort(function (a, b) {
        if (a.teacherId < b.teacherId) {
          return -1;
        }
        if (a.teacherId > b.teacherId) {
          return 1;
        }
        return 0;
      })
    : teachers?.sort(function (a, b) {
        if (a.teacherId < b.teacherId) {
          return -1;
        }
        if (a.teacherId > b.teacherId) {
          return 1;
        }
        return 0;
      });
  const deleteTeacherHandler = (id) => {
    dispatch(deleteTeacherAction(id));
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="teacher__data mt-5">
          <table className="table">
            <thead className="table__header">
              <tr>
                <th className="text-center">Id</th>
                <th className="text-center">First Name</th>
                <th className="text-center">Last Name</th>
                <th className="text-center">Address</th>
                <th className="text-center">Number</th>
                <th className="text-center">Subject</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {teachersValue?.map((teacher, index) => (
                <tr key={teacher._id}>
                  <td>{teacher.teacherId}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.address}</td>
                  <td>{teacher.mbNumber}</td>
                  <td>{teacher.subject}</td>
                  <td className="text-center">
                    {props.bool ? (
                      <>
                        <button
                          className={`btn btn-danger btn-lg m-2`}
                          onClick={() => deleteTeacherHandler(teacher._id)}
                        >
                          Delete
                        </button>
                        <Link
                          className={`btn btn-warning btn-lg ml-2`}
                          to={`/teacher/update/${teacher._id}`}
                        >
                          Update
                        </Link>
                        <Link
                          className={`btn btn-info btn-lg m-2`}
                          to={`/teachers/${teacher._id}`}
                        >
                          View
                        </Link>
                      </>
                    ) : props.delete ? (
                      <button
                        className={`btn btn-danger btn-lg `}
                        onClick={() => deleteTeacherHandler(teacher._id)}
                      >
                        {props.value}
                      </button>
                    ) : props.update ? (
                      <Link
                        className={`btn btn-warning btn-lg `}
                        to={`/teacher/update/${teacher._id}`}
                      >
                        {props.value}
                      </Link>
                    ) : (
                      <Link
                        className={`btn btn-info btn-lg `}
                        to={`/teachers/${teacher._id}`}
                      >
                        {props.value}
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default TeachersList;
