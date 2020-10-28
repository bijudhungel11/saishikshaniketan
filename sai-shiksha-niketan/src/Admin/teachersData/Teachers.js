import React from "react";
import ManageMember from "../ManageMember";

const Teachers = () => {
  return (
    <ManageMember
      member="Teacher"
      memberImg="teacherfinal.png"
      viewClassesRoute="/classList"
      update="/updateTeachersList"
    />
  );
};

export default Teachers;
