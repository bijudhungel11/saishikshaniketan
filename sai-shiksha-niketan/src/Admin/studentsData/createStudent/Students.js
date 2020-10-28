import React from "react";
import Studentform from "../Studentform";
import "./Student.css";

const Students = () => {
  return (
    <Studentform
      title="Create Student"
      btnTitle="Create"
      btnClass="bg-success"
      headingBtn="Create Student"
    />
  );
};

export default Students;
