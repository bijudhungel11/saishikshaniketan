import React, { useEffect, useState } from "react";
import "./Login.css";
import FormInput from "../FormInput";
import RightContainer from "../utils/RightContainer";
import LeftContainer from "../utils/LeftContainer";
import useForm from "../useForm";
import { useSelector } from "react-redux";

const Login = (props) => {
  const {
    user,
    errors,
    signupHandler,
    loginHandler,
    handleChange,
    isSuccess,
    focusHandler,
  } = useForm();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;
  const [isLogin] = useState(true);

  useEffect(() => {
    if (userInfo?._id) {
      props.history.push("/home");
    }
  }, [props.history, userInfo]);

  return (
    <div className="login">
      <div className="login__container">
        <RightContainer
          loading={userLogin.loading}
          error={userLogin.error}
          errorMsg={error}
          image={
            "https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
          }
          alter="login__image"
          isLogin={true}
        />
        <LeftContainer>
          <div className={`login__left ${isLogin ? "success" : ""}`}>
            <FormInput
              isSuccess={isSuccess}
              loginHandler={loginHandler}
              signupHandler={signupHandler}
              errors={errors}
              user={user}
              handleChange={handleChange}
              focusHandler={focusHandler}
              isLogin={true}
            />
          </div>
        </LeftContainer>
      </div>
    </div>
  );
};

export default Login;
