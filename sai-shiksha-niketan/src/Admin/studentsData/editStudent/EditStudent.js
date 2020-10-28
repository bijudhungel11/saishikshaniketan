import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { studentDataAction } from "../../../redux/actions/studentAction";
import Studentform from "../Studentform";

const EditStudent = () => {
  const studentData = useSelector((state) => state.studentData);
  const { student } = studentData;
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(studentDataAction(params.id));
  }, [dispatch, params.id]);
  return (
    <div>
      <Studentform
        title="Update Student"
        btnTitle="Update"
        btnClass="bg-warning"
        headingBtn="Update Student"
        studentData={student?.[0]}
      />
    </div>
  );
};

export default EditStudent;
