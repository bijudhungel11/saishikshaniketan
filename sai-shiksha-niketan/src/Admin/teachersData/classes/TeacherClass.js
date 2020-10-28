import React, { useEffect } from "react";
import TeachersList from "../TeachersList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { classTeacherListAction } from "../../../redux/actions/teacherAction";
const TeacherClass = () => {
  const params = useParams();
  console.log(params.slug);
  const dispatch = useDispatch();
  const classTeacherList = useSelector((state) => state.classTeacherList);

  const { loading, teachers, error } = classTeacherList;
  /* console.log(classTeacherList); */
  useEffect(() => {
    dispatch(classTeacherListAction(params.slug));
  }, [params.slug]);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {teachers?.length > 0 && (
            <TeachersList teachersData={teachers} bool />
          )}
        </div>
      )}
    </>
  );
};

export default TeacherClass;
