import React from "react";

const ClassesName = (props) => {
  return (
    <div>
      <label className="teacherForm__label">{props.value}</label>
      <input
        className="teacherForm__input"
        type="checkbox"
        name="classList"
        value={props.value}
        ref={props.register({
          required: "Required",
        })}
      />
    </div>
  );
};

export default ClassesName;
