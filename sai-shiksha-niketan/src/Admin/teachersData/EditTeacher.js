import React from "react";
import TeacherForm from "./TeacherForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teacherDataAction } from "../../redux/actions/teacherAction";
const EditTeacher = () => {
  const params = useParams();
  console.log(params.id);
  const dispatch = useDispatch();
  const teacherData = useSelector((state) => state.teacherData);
  const { teacher } = teacherData;
  useEffect(() => {
    dispatch(teacherDataAction(params.id));
  }, []);
  return (
    <div>
      <TeacherForm
        teacherData={teacher?.[0]}
        formFor="Update Teacher"
        btnClass="btn-warning"
        value="Update"
      />
    </div>
  );
};

export default EditTeacher;
