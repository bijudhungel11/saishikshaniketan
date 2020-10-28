import React from "react";

import ManageMember from "../ManageMember";

const ManageStudent = () => {
  return (
    <ManageMember
      member="Student"
      memberImg="student.png"
      viewClassesRoute="/classes"
    />
  );
};

export default ManageStudent;
