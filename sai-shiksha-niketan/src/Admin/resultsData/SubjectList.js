import React, { useState } from "react";

const SubjectList = () => {
  const commonSubjects = [
    "Maths",
    "Science",
    "Nepali",
    "English I",
    "Social Studies",
  ];
  const subOfThreeToSeven = ["Computer", "Health"];
  const dictation = ["Nepali Dictation", "English Dictation"];
  const [subjectListV, setSubjectList] = useState({
    classes: [
      {
        classValue: "Nursery",
        Subject: ["Math", "Nepali", "English", "BarnaMala"],
      },
      {
        classValue: "L.K.G",
        Subject: ["Math", "Nepali", "English", "BarnaMala"],
      },
      {
        classValue: "U.K.G",
        Subject: [...commonSubjects, ...subOfThreeToSeven],
      },
      {
        classValue: "One",
        Subject: [...commonSubjects, ...subOfThreeToSeven],
      },
      {
        classValue: "Two",
        Subject: [...commonSubjects, ...subOfThreeToSeven],
      },
      {
        classValue: "Three",
        Subject: [...commonSubjects, ...subOfThreeToSeven],
      },
      {
        classValue: "Four",
        Subject: [...commonSubjects],
        ...subOfThreeToSeven,
      },
      {
        classValue: "Five",
        Subject: [...commonSubjects, ...subOfThreeToSeven],
      },
      {
        classValue: "Six",
        Subject: [...commonSubjects, ...subOfThreeToSeven],
      },
      {
        classValue: "Seven",
        Subject: [...commonSubjects, ...subOfThreeToSeven],
      },
    ],
  });
  return <h1></h1>;
};

export default SubjectList;
