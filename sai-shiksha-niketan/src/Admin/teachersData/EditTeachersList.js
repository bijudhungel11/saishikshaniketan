import React from "react";
import TeachersList from "./TeachersList";

const EditTeachersList = () => {
  return (
    <div>
      <TeachersList update="true" value="Update" />
    </div>
  );
};

export default EditTeachersList;
