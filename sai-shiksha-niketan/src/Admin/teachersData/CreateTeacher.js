import React from "react";
import TeacherForm from "./TeacherForm";

const CreateTeacher = () => {
  return (
    <div>
      <TeacherForm
        formFor="Create Teacher"
        btnClass="btn-success"
        value="Create"
      />
    </div>
  );
};

export default CreateTeacher;
