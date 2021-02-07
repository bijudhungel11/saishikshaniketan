import React, { useState } from "react";
import ClassSubject from "./ClassSubject";
import "./Results.css";
const CreateResult = () => {
  let option = [
    "Nursery",
    "L.K.G",
    "U.K.G",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];
  const [classValue, setClassValue] = useState("");
  return (
    <div className="results__main--container">
      <div className="results__container">
        <h1 className="results__heading text-center  bg-warning">
          Create Result
        </h1>
        <div className="d-flex results__sub--container">
          <form className="results__form p-5">
            <div className="results__form--div">
              <label className="results__form--label">Id</label>
              <input type="text" className="results__form--input" />
            </div>
            <div className="results__form--div">
              <label className="results__form--label">Name</label>
              <input type="text" className="results__form--input" />
            </div>
            <div className="results__form--div">
              <label className="results__form--label">Batch</label>
              <input type="text" className="results__form--input" />
            </div>
            <div className="results__form--div">
              <select
                name="select__terminal "
                className="results__form--input select__classes"
              >
                <option value="">Select Terminal</option>
                <option value="First">First Term</option>
                <option value="Second">Second Term</option>
                <option value="Third">Pre-Board</option>
                <option value="Fourth">Final Term</option>
              </select>
            </div>
            <div className="results__form--div ">
              <select
                className="results__form--input select__classes"
                name="classes"
                onChange={(e) => setClassValue(e.target.value)}
              >
                <option value="">Select Classes</option>
                {option.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </form>

          {classValue && (
            <div className="subject__lists text-center">
              <ClassSubject />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateResult;
