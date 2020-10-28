import React, { useEffect } from "react";
import "../Login/Login.css";
import FormInput from "../FormInput";
import RightContainer from "../utils/RightContainer";
import LeftContainer from "../utils/LeftContainer";
import useForm from "../useForm";
import { useSelector } from "react-redux";
const Signup = (props) => {
  const {
    user,
    errors,
    loginHandler,
    signupHandler,
    handleChange,
    isSuccess,
    focusHandler,
    select,
    selectHandler,
  } = useForm();
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, error } = userRegister;

  useEffect(() => {
    console.log("the value of the userRegister", userInfo);
    if (userInfo) {
      props.history.push("/login");
    }
    return () => {};
  }, [userInfo, props.history]);
  return (
    <div className="login">
      <div className="login__container">
        <RightContainer
          loading={userRegister.loading}
          error={userRegister.error}
          errorMsg={error}
          image={
            "https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          alter="login__image"
        />
        <LeftContainer>
          <div className={`login__left signup`}>
            {isSuccess ? (
              <div>Form Submitted successfully....</div>
            ) : (
              <>
                <FormInput
                  isSuccess={isSuccess}
                  signupHandler={signupHandler}
                  loginHandler={loginHandler}
                  errors={errors}
                  user={user}
                  handleChange={handleChange}
                  focusHandler={focusHandler}
                  isLogin={false}
                  select={select}
                  selectHandler={selectHandler}
                />
              </>
            )}
          </div>
        </LeftContainer>
      </div>
    </div>
  );
};

export default Signup;
