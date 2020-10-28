import React from "react";
import { Link } from "react-router-dom";

const FormInput = ({
  errors,
  user,
  handleChange,
  focusHandler,
  loginHandler,
  isLogin,
  signupHandler,
  select,
  selectHandler,
}) => {
  return (
    <>
      <form
        className="login__form"
        onSubmit={isLogin ? loginHandler : signupHandler}
      >
        {isLogin ? (
          <></>
        ) : (
          <>
            <div className="form__input">
              <label htmlFor="useType">
                <span className="labelName">User Type</span>
                <span className="error">
                  {errors.userType ? `${errors.userType}` : ""}
                </span>
              </label>
              <select id="userType" value={select} onChange={selectHandler}>
                <option value="">User Type</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <div className="form__input">
              <label htmlFor="name">
                <span className="labelName">Name</span>
                <span className="error">
                  {errors.name ? `${errors.name}` : ""}
                </span>
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter Your name"
                onBlur={(e) => focusHandler(e)}
              />
            </div>
          </>
        )}

        <div className="form__input">
          <label htmlFor="email">
            <span className="labelName">Email</span>
            <span className="error">
              {" "}
              {errors.email ? `${errors.email}` : ""}
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter Your email"
            onBlur={(e) => focusHandler(e)}
          />
        </div>
        <div className="form__input">
          <label htmlFor="number">
            <span className="labelName">Contact</span>
            <span className="error">
              {errors.number ? `${errors.number}` : ""}
            </span>
          </label>
          <input
            type="number"
            id="number"
            name="number"
            value={user.number}
            onChange={handleChange}
            placeholder="Enter Your Mobile number"
            onBlur={(e) => focusHandler(e)}
          />
        </div>
        <div className="form__input">
          <label htmlFor="passwordOne">
            <span className="labelName">Password</span>
            <span className="error">
              {errors.password ? `${errors.password}` : ""}
            </span>
          </label>
          <input
            type="password"
            id="passwordOne"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter New Password"
            onBlur={(e) => focusHandler(e)}
            autoComplete={user.password.toString()}
          />
        </div>

        {isLogin ? (
          <></>
        ) : (
          <div className="form__input">
            <label htmlFor="passwordTwo">
              <span className="labelName">C password</span>

              <span className="error">
                {errors.cPassword ? `${errors.cPassword}` : ""}
              </span>
            </label>
            <input
              type="password"
              id="passwordTwo"
              name="cPassword"
              value={user.cPassword}
              onChange={handleChange}
              placeholder="Confirm Your Password"
              onBlur={(e) => focusHandler(e)}
              autoComplete={user.cPassword.toString()}
            />
          </div>
        )}

        {isLogin ? (
          <>
            {" "}
            <div className="btn__block">
              <button className="btn btn-success btn-lg">Log In</button>
            </div>
            <p>
              Don't have account create new?
              <Link to="/signup" className="signup__link">
                Create New one
              </Link>
            </p>
          </>
        ) : (
          <>
            <div className="btn__block">
              <button className="btn btn-success btn-lg">Sign Up</button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default FormInput;
