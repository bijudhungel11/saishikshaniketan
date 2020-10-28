import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../redux/actions/teacherAction";
import "./TeacherForm.css";
import ClassesName from "./utils/ClassesName";
const TeacherForm = (props) => {
  const { teacherData } = props;
  console.log(teacherData);
  const { register, errors, handleSubmit, reset } = useForm();
  const teacherSave = useSelector((state) => state.teacherSave);
  const dispatch = useDispatch();
  const { loading, error, teacher, success } = teacherSave;

  const submitHandler = (data, values) => {
    console.log("the value of the user is ", data);
    dispatch(addTeacher(data, teacherData?._id));
  };

  const [openModel, setOpenModel] = useState(true);
  useEffect(() => {
    if (success) {
      reset({
        firstName: "",
      });
    } else if (teacherData) {
      reset({
        firstName: teacherData.firstName,
        middleName: teacherData.middleName,
        lastName: teacherData.lastName,
        gmail: teacherData.gmail,
        mbNumber: teacherData.mbNumber,
        teacherId: teacherData.teacherId,
        education: teacherData.education,
        faculty: teacherData.faculty,
        degree: teacherData.degree,
        gender: teacherData.gender,
        address: teacherData.address,
        subject: teacherData.subject,
        classList: teacherData.classList,
        calender: teacherData.calender,
        college: teacherData.college,
        experience: teacherData.experience,
      });
    }
  }, [success, teacherData, teacher]);

  return (
    <>
      <button
        className={`main__btn btn btn-lg ${
          openModel ? "btn-danger" : props.btnClass
        } my-5`}
        onClick={() => setOpenModel(!openModel)}
      >
        {openModel ? "Close Form" : props.formFor}
      </button>
      {loading ? (
        <h1 className="text-center">loading....</h1>
      ) : error ? (
        <p>{error}</p>
      ) : success ? (
        <h1 className="text-center text-success font-weight-bolder">
          Successfully Done
        </h1>
      ) : (
        <></>
      )}
      {openModel ? (
        <div className="teacherForm__container">
          <form onSubmit={handleSubmit(submitHandler)} className="teacherForm">
            <h1 className="bg-warning w-100 mb-5">Teacher Form</h1>
            <div className="teacherPersonalInfo">
              <div className="teacherPersonalInfo--1">
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span>First Name:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input text-uppercase"
                    type="text"
                    ref={register({
                      required: "Required",
                      minLength: 4,
                    })}
                    name="firstName"
                  />
                  {errors.firstName && (
                    <p className="text-right errors">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">Middle Name:</label>
                  <input
                    className="teacherForm__input text-uppercase"
                    type="text"
                    name="middleName"
                    ref={register}
                  />
                </div>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span> Last Name:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input text-uppercase"
                    type="text"
                    name="lastName"
                    ref={register({
                      required: "Required",
                      minLength: 3,
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-right errors">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span>Teacher Id:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="text"
                    name="teacherId"
                    ref={register({
                      required: "Required",
                      minLength: 3,
                    })}
                  />
                  {errors.teacherId && (
                    <p className="text-right errors">
                      {errors.teacherId.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="teacherPersonalInfo--2">
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span>Gmail:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="email"
                    name="gmail"
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email Addresss",
                      },
                    })}
                  />

                  {errors.gmail && (
                    <p className="text-right errors">{errors.gmail.message}</p>
                  )}
                </div>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span>Mb Number:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="number"
                    name="mbNumber"
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
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span>Birth Date:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="date"
                    name="calender"
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.calender && (
                    <p className="text-right errors">Invalid Number</p>
                  )}
                </div>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span>Address:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="text"
                    name="address"
                    ref={register({
                      required: "Required",
                      minLength: 3,
                    })}
                  />
                  {errors.address && (
                    <p className="text-right errors">
                      {errors.address.message}
                    </p>
                  )}
                </div>
                <div className="teacherForm__div">
                  <h1 className="teacherForm__label">
                    <span>Gender:</span>
                    <span className="star">*</span>
                  </h1>
                  <div>
                    <label className="teacherForm__label">Male:</label>
                    <input
                      className="teacherForm__input"
                      type="radio"
                      name="gender"
                      value="male"
                      ref={register({
                        required: "Required",
                      })}
                    />
                  </div>
                  <div>
                    <label className="teacherForm__label">Female:</label>
                    <input
                      type="radio"
                      className="teacherForm__input"
                      name="gender"
                      value="female"
                      ref={register({
                        required: "Required",
                      })}
                    />
                  </div>
                  {errors.gender && (
                    <p className="text-right errors">{errors.gender.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="teacherFacultyInfo">
              <div className="teacherFacultyInfo__part--1">
                <h1 className="bg-warning">Education & Degree</h1>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span>Education:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="text"
                    name="education"
                    ref={register({
                      required: "Required",
                      minLength: 3,
                    })}
                  />
                  {errors.education && (
                    <p className="text-right errors">
                      {errors.education.message}
                    </p>
                  )}
                </div>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span> Faculty:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="text"
                    name="faculty"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.faculty && (
                    <p className="text-right errors">
                      {errors.faculty.message}
                    </p>
                  )}
                </div>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span> College:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="text"
                    name="college"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.college && (
                    <p className="text-right errors">
                      {errors.college.message}
                    </p>
                  )}
                </div>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span> Degree:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="text"
                    name="degree"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.degree && (
                    <p className="text-right errors">{errors.degree.message}</p>
                  )}
                </div>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span>Experience:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="number"
                    name="experience"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.experience && (
                    <p className="text-right errors">
                      {errors.experience.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="teacherFacultyInfo__part--2">
                <h1 className="bg-warning">Teaches</h1>
                <div className="teacherForm__div">
                  <h2 className="teacherForm__label">
                    <span className="font-weight-bolder">Classes:</span>
                    <span className="star">*</span>
                  </h2>
                  <div className="classesList">
                    <div>
                      <ClassesName value="Nursery" register={register} />
                      <ClassesName value="L.K.G" register={register} />
                      <ClassesName value="U.K.G" register={register} />
                    </div>

                    <div>
                      <ClassesName value="One" register={register} />
                      <ClassesName value="Two" register={register} />
                      <ClassesName value="Three" register={register} />
                    </div>
                    <div>
                      <ClassesName value="Four" register={register} />

                      <ClassesName value="Five" register={register} />
                      <ClassesName value="Six" register={register} />
                    </div>
                    <div>
                      <ClassesName value="Seven" register={register} />
                      <ClassesName value="Eight" register={register} />
                      <ClassesName value="Nine" register={register} />
                      <ClassesName value="Ten" register={register} />
                    </div>
                    {errors.classList && (
                      <p className="text-right errors">
                        {errors.classList.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="teacherForm__div">
                  <label className="teacherForm__label">
                    <span>Subject:</span>
                    <span className="star">*</span>
                  </label>
                  <input
                    className="teacherForm__input"
                    type="text"
                    name="subject"
                    ref={register({
                      required: "Required",
                      minLength: 3,
                    })}
                  />
                  {errors.subject && (
                    <p className="text-right errors">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="btn__container">
              <button
                type="submit"
                className={`btn ${props.btnClass} btn-lg m-5 font-weight-bolder`}
              >
                {props.value}
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

export default TeacherForm;
