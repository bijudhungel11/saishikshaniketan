import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { saveStudent } from "../../redux/actions/studentAction";
const Studentform = (props) => {
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
  const [createButton, setCreateButton] = useState(true);
  const {
    register,
    handleSubmit,
    errors,

    getValues,
    reset,
  } = useForm();
  const { studentData } = props;

  console.log("the value of the student", studentData);
  /* student store */
  const studentSave = useSelector((state) => state.studentSave);
  const { loading, success, error } = studentSave;

  const dispatch = useDispatch();

  const onSubmitHandler = (data, values) => {
    console.log("the value from the getVAlue", getValues());
    dispatch(saveStudent(data, studentData?._id));
  };

  useEffect(() => {
    console.log("the value of the studentSave", success);
    if (success) {
      reset({
        firstName: "",
      });
    } else if (studentData) {
      reset({
        firstName: studentData.firstName,
        middleName: studentData.middleName,
        lastName: studentData.lastName,
        gmail: studentData.gmail,
        studentId: studentData.studentId,
        mbNumber: studentData.mbNumber,
        calender: studentData.calender,
        gender: studentData.gender,
        address: studentData.address,
        classValue: studentData.classValue,
        fatherName: studentData.fatherName,
        fatherNumber: studentData.fatherNumber,
        fatherOfficeName: studentData.fatherOfficeName,
        fatherOccupation: studentData.fatherOccupation,
        fatherGmail: studentData.fatherGmail,
        motherName: studentData.motherName,
        motherNumber: studentData.motherNumber,
        motherOfficename: studentData.motherOfficename,
        motherOccupation: studentData.motherOccupation,
        motherGmail: studentData.motherGmail,
      });
    }
  }, [success, error, loading, studentData, reset]);
  const createHandler = () => {
    setCreateButton(!createButton);
  };
  return (
    <>
      <button
        className={`btn ${
          createButton ? "btn-danger" : "btn-info"
        } mt-3 create__btn mx-3`}
        onClick={createHandler}
      >
        {createButton ? "Close Form" : props.headingBtn}
      </button>
      {createButton ? (
        <div className="form__data">
          <div>
            <h1 className="form__heading my-4">{props.title}</h1>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="form__container">
              <div className="form__name--container">
                <h2 className="heading__student">
                  {loading ? (
                    <>loading...</>
                  ) : error ? (
                    <>{error}</>
                  ) : success ? (
                    <>Done</>
                  ) : (
                    <>Student Form</>
                  )}
                </h2>
                <div className="form__name">
                  <div className="form__div">
                    <label htmlFor="firstName" className="form__label">
                      First Name
                      <span className="star">*</span>
                    </label>
                    <input
                      name="firstName"
                      id="firstName"
                      type="text"
                      className="studentInput text-uppercase"
                      ref={register({ required: true, minLength: 4 })}
                    />
                    {errors.firstName && (
                      <p className="errors text-right">
                        Please enter the first name
                      </p>
                    )}
                  </div>
                  <div className="form__div">
                    <label htmlFor="middleName" className="form__label">
                      Middle Name
                    </label>
                    <input
                      name="middleName"
                      id="middleName"
                      type="text"
                      className="studentInput text-uppercase"
                      ref={register}
                    />
                  </div>
                  <div className="form__div">
                    <label htmlFor="lastName" className="form__label">
                      Last Name <span className="star">*</span>
                    </label>
                    <input
                      name="lastName"
                      id="lastName"
                      type="text"
                      className="studentInput text-uppercase"
                      ref={register({ required: true, minLength: 4 })}
                    />
                    {errors.lastName && (
                      <p className="errors text-right">
                        Please enter the Last name
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="form__name">
                <div className="gmail form__div">
                  <label htmlFor="gmail" className="form__label">
                    Gmail
                    <span className="star">*</span>
                  </label>
                  <input
                    className="studentInput"
                    type="gmail"
                    name="gmail"
                    id="gmail"
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                  />
                  {errors.gmail && (
                    <p className="text-right errors">{errors.gmail.message}</p>
                  )}
                </div>
                <div className="studentId form__div">
                  <label htmlFor="studentId" className="form__label">
                    Id No<span className="star">*</span>
                  </label>
                  <input
                    name="studentId"
                    className="studentInput"
                    type="text"
                    ref={register({
                      required: true,
                      minLength: 4,
                    })}
                  />
                  {errors.studentId && (
                    <p className="text-right errors">Invalid Id</p>
                  )}
                </div>
                <div className="mbNumber form__div">
                  <label htmlFor="mbNumber" className="form__label">
                    Mobile No<span className="star">*</span>
                  </label>
                  <input
                    name="mbNumber"
                    className="studentInput"
                    type="number"
                    ref={register({
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                  />
                  {errors.mbNumber && (
                    <p className="text-right errors">Invalid Number</p>
                  )}
                </div>
              </div>

              <div className="form__value">
                <div className="form__info">
                  <div className="form__div">
                    <label htmlFor="calender" className="form__label">
                      English Date <span className="star">*</span>
                    </label>
                    <input
                      name="calender"
                      id="calender"
                      type="date"
                      className="studentInput"
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.calender && (
                      <p className="text-right errors">It is required</p>
                    )}
                  </div>

                  <div className="gender">
                    <label className="form__label">
                      Gender
                      <span className="star">*</span>
                    </label>
                    <div className="form__gender">
                      <div className="male">
                        <label htmlFor="male" className="form__label">
                          Male
                        </label>
                        <input
                          id="male"
                          type="radio"
                          className="form__input"
                          name="gender"
                          ref={register}
                          value="Male"
                        />
                      </div>
                      <div className="female">
                        <label htmlFor="female" className="form__label">
                          Female
                        </label>
                        <input
                          id="female"
                          type="radio"
                          className="form__input"
                          name="gender"
                          ref={register}
                          value="female"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="address">
                    <label htmlFor="address" className="form__label">
                      Address<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="studentInput"
                      id="address"
                      name="address"
                      ref={register({
                        required: true,
                        minLength: 4,
                      })}
                    />
                    {errors.address && (
                      <p className="text-right errors">It is required</p>
                    )}
                  </div>
                  <div className="class">
                    <label htmlFor="class" className="form__label d-block">
                      Class<span className="star">*</span>
                    </label>
                    <select
                      name="classValue"
                      ref={register({ required: true })}
                      id="class"
                    >
                      {" "}
                      <option value="">Select Class</option>
                      {option.map((item, i) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    {errors.classValue && (
                      <p className="text-right errors">Select</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="parents__info">
                <div className="father__info">
                  <h1>Father's Information</h1>
                  <div>
                    <label
                      htmlFor="fatherName"
                      className="father__name d-block form__label"
                    >
                      Full Name:<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      id="fatherName"
                      className="father__name studentInput"
                      ref={register({
                        required: true,
                        minLength: 7,
                      })}
                      name="fatherName"
                    />
                    {errors.fatherName && (
                      <p className="text-right errors">It is required</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="number"
                      className="number__name d-block form__label"
                    >
                      Mobile:<span className="star">*</span>
                    </label>
                    <input
                      type="number"
                      id="number"
                      className="number__name studentInput"
                      name="fatherNumber"
                      ref={register({
                        required: true,
                        minLength: 10,
                        maxLength: 10,
                      })}
                    />
                    {errors.fatherNumber && (
                      <p className="text-right errors">It is required</p>
                    )}
                  </div>
                  <div className="office__info">
                    <label
                      htmlFor="officename"
                      className="office__label d-block"
                    >
                      Office
                    </label>
                    <input
                      type="text"
                      id="officename"
                      className="office__name studentInput"
                      name="fatherOfficeName"
                      ref={register}
                    />
                    <label
                      htmlFor="officename"
                      className="office__label d-block form__label"
                    >
                      Occupation<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      id="officename"
                      className="office__name studentInput"
                      name="fatherOccupation"
                      ref={register({
                        required: true,
                        minLength: 5,
                      })}
                    />
                    {errors.fatherOccupation && (
                      <p className="text-right errors">It is required</p>
                    )}
                    <label
                      htmlFor="officename"
                      className="office__label d-block"
                    >
                      Gmail
                    </label>
                    <input
                      type="gmail"
                      id="officename"
                      className="office__name studentInput"
                      name="fatherGmail"
                      ref={register()}
                    />
                  </div>
                </div>
                <div className="mother__info">
                  <h1>Mother's Information</h1>

                  <div>
                    <label
                      htmlFor="mother"
                      className="mother__name d-block form__label"
                    >
                      Full Name:<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      id="mother"
                      className="mother__name studentInput"
                      ref={register({
                        required: true,
                        min: 7,
                      })}
                      name="motherName"
                    />
                    {errors.motherName && (
                      <p className="text-right errors">It is required</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="number" className="number__name d-block">
                      Mobile:
                    </label>
                    <input
                      type="number"
                      id="number"
                      className="number__name studentInput"
                      ref={register}
                      name="motherNumber"
                    />
                  </div>
                  <div className="office__info">
                    <label
                      htmlFor="officename"
                      className="office__label d-block"
                    >
                      Office
                    </label>
                    <input
                      type="text"
                      id="officename"
                      className="office__name studentInput"
                      name="motherOfficename"
                      ref={register}
                    />
                    <label
                      htmlFor="officename"
                      className="office__label d-block"
                    >
                      Occupation
                    </label>
                    <input
                      type="text"
                      id="officename"
                      className="office__name studentInput"
                      name="motherOccupation"
                      ref={register}
                    />
                    <label
                      htmlFor="officename"
                      className="office__label d-block studentInput"
                    >
                      Gmail
                    </label>
                    <input
                      type="gmail"
                      id="officename"
                      name="motherGmail"
                      className="office__name studentInput"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center my-5 ">
              <button
                type="submit"
                className={`btn ${props.btnClass} btn-lg submit__btn`}
              >
                {props.btnTitle}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Studentform;
