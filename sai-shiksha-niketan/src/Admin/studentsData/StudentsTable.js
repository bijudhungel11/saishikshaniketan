import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listStudent } from "../../redux/actions/studentAction";
import ClassStudent from "./classStudentsList/ClassStudentTable";

const StudentsTable = (props) => {
  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.studentList);
  const { loading, error, students } = studentList;
  const [boolValue, setBoolValue] = useState(false);
  const [index, setIndex] = useState(null);
  useEffect(() => {
    dispatch(listStudent());
    setBoolValue(false);
  }, []);

  const classData = [
    {
      bool: index === 0 && boolValue === false ? true : false,
      title: "Nursery",
      students: students?.filter((student) => student.classValue === "Nursery"),
    },
    {
      bool: index === 1 && boolValue ? true : false,
      title: "L.K.G",
      students: students?.filter((student) => student.classValue === "L.K.G"),
    },
    {
      bool: index === 2 && true,
      title: "U.K.G",
      students: students?.filter((student) => student.classValue === "U.K.G"),
    },
    {
      bool: index === 3 ? boolValue : false,
      title: "One",
      students: students?.filter((student) => student.classValue === "One"),
    },
    {
      bool: index === 4 ? boolValue : false,
      title: "Two",
      students: students?.filter((student) => student.classValue === "Two"),
    },
    {
      bool: index === 5 ? boolValue : false,
      title: "Three",
      students: students?.filter((student) => student.classValue === "Three"),
    },
    {
      bool: index === 6 ? boolValue : false,
      title: "Four",
      students: students?.filter((student) => student.classValue === "Four"),
    },
    {
      bool: index === 7 ? boolValue : false,
      title: "Five",
      students: students?.filter((student) => student.classValue === "Five"),
    },
    {
      bool: index === 8 ? boolValue : false,
      title: "Six",
      students: students?.filter((student) => student.classValue === "Six"),
    },
    {
      bool: index === 9 ? boolValue : false,
      title: "Seven",
      students: students?.filter((student) => student.classValue === "Seven"),
    },
    {
      bool: index === 10 ? boolValue : false,
      title: "Eight",
      students: students?.filter((student) => student.classValue === "Eight"),
    },
    {
      bool: index === 11 ? boolValue : false,
      title: "Nine",
      students: students?.filter((student) => student.classValue === "Nine"),
    },
    {
      bool: index === 12 ? boolValue : false,
      title: "Ten",
      students: students?.filter((student) => student.classValue === "Ten"),
    },
  ];

  const boolHandler = (i) => {
    setIndex(i);
  };
  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        { error }
      ) : (
        <>
          <p className="errors">Single Tap: Show Data</p>
          <p className="errors">Double Tap: Hide Data</p>
          {classData.map((classValue, i) => (
            <div className="m-5 text-dark viewStudent__header--main" key={i}>
              <h1
                className="text-center font-weight-bolder display-4 m-0  viewStudent__header"
                onClick={() => boolHandler(i)}
                onDoubleClick={() => setIndex(null)}
              >
                {classValue.title} Class Students (
                <span>{classValue.students.length}</span>)
              </h1>
              {index === i ? (
                <ClassStudent
                  data={classValue.students}
                  screen={props.screen}
                />
              ) : (
                <></>
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default StudentsTable;
