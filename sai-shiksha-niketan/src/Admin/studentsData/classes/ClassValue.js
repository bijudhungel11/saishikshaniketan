import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { classStudentList } from "../../../redux/actions/studentAction";
import ClassStudent from "../classStudentsList/ClassStudentTable";

const ClassValue = (props) => {
  const classStudents = useSelector((state) => state.classStudents);
  const dispatch = useDispatch();
  const { students, loading, error } = classStudents;
  const params = useParams();

  useEffect(() => {
    dispatch(classStudentList(params.slug));
  }, [dispatch, params.slug]);

  /* console.log(students); */

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <Link to="/classes" className="go__back">
            Go Back
          </Link>

          <ClassStudent data={students} />
        </div>
      )}
    </>
  );
};

export default ClassValue;
