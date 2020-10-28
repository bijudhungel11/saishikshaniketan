import React from "react";

const RightContainer = ({
  image,
  isLogin,
  loading,
  error,
  errorMsg,
  alter,
}) => {
  return (
    <>
      <div className="login__right">
        <img src={image} alt={alter} />

        <div className="form__name">
          {loading ? (
            <h3>Wait a second....</h3>
          ) : error ? (
            <h2 className="error__message">{errorMsg}</h2>
          ) : isLogin ? (
            <h1>Login</h1>
          ) : (
            <h1>Register</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default RightContainer;
