import { useState } from "react";
import { useDispatch } from "react-redux";

import { loginUser } from "../../redux/actions/userAction";
import { signupUser } from "../../redux/actions/userAction";
const useForm = () => {
  const dispatch = useDispatch();

  const [select, setSelect] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    cPassword: "",
    userType: select,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    cPassword: "",
    userType: "",
  });
  const selectHandler = (e) => {
    setSelect(e.target.value);
    setUser({
      ...user,
      userType: e.target.value,
    });
    setErrors({
      ...errors,
      userType: "",
    });
  };

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  /* validation in the submit handler */
  const loginHandler = (e) => {
    e.preventDefault();

    if (user.email === "" && user.number === "" && user.password === "") {
      setIsSuccess(false);
      setErrors({
        email: "Email is required",
        password: "Password is required",
        number: "Number is required",
      });
    } else if (user.email === "") {
      setIsSuccess(false);
      setErrors({
        ...errors,
        email: "User is required",
      });
    } else if (user.password === "") {
      setIsSuccess(false);
      setErrors({
        ...errors,
        password: "User is required",
      });
    } else if (user.number === "") {
      setIsSuccess(false);
      setErrors({
        ...errors,
        number: "User is required",
      });
    } else if (
      errors.name === "" ||
      errors.email === "" ||
      errors.number === "" ||
      errors.password === ""
    ) {
      dispatch(loginUser(user, select));
    }
  };

  const signupHandler = (e) => {
    e.preventDefault();

    if (
      user.email === "" &&
      user.number === "" &&
      user.password === "" &&
      user.cPassword === "" &&
      select === ""
    ) {
      setIsSignup(false);
      setErrors({
        email: "Email is required",
        password: "Password is required",
        number: "Number is required",
        cPassword: "It is required",
        userType: "It is required",
      });
    } else if (select === "") {
      setIsSignup(false);
      setErrors({
        ...errors,
        userType: "User Type is required",
      });
    } else if (user.number === "") {
      setIsSignup(false);
      setErrors({
        ...errors,
        number: "It is required",
      });
    } else if (user.email === "") {
      setIsSignup(false);
      setErrors({
        ...errors,
        email: "It is required",
      });
    } else if (user.name === "") {
      setIsSignup(false);
      setErrors({
        ...errors,
        name: "It is required",
      });
    } else if (user.password === "") {
      setIsSignup(false);
      setErrors({
        ...errors,
        password: "It is required",
      });
    } else if (user.cPassword === "") {
      setIsSignup(false);
      setErrors({
        ...errors,
        cPassword: "It is required",
      });
    } else if (user.password === "") {
      setIsSignup(false);
      setErrors({
        ...errors,
        password: "It is required",
      });
    } else if (user.cPassword !== user.password) {
      setIsSignup(false);
      setErrors({
        ...errors,
        cPassword: "Password didn't match",
      });
    } else {
      setIsSignup(true);
      console.log(user, select);

      dispatch(signupUser(user, select));
    }
  };

  /* handleChange */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const focusHandler = (e) => {
    const { name } = e.target;
    const value = e.target.name;
    /* console.log("user[name]", user[name]);
    console.log(
      "user[name]===user.email",
      user[name],
      user.email,
      user[name] === user.email ? "true" : "false"
    ); */

    if (user[name].trim().length === 0) {
      setErrors({
        ...errors,
        [name]: `${
          value.charAt(0).toUpperCase() + value.slice(1)
        } can't empty `,
      });
    } else if (user[name].trim().length < 5) {
      setErrors({
        ...errors,
        [name]: `Invalid ${[name]}`,
      });
    } else if (user[name] === user.number) {
      if (user.number.length !== 10) {
        setErrors({
          ...errors,
          number: `Number should contain 10 character`,
        });
      } else {
        setErrors({
          ...errors,
          number: "",
        });
      }
    } else if (user[name] === user.email) {
      if (!/\S+@\S+\.\S+/.test(user.email)) {
        console.log("this is working");
        setErrors({
          ...errors,
          email: `Email should be example@gmail.com`,
        });
      } else {
        setErrors({
          ...errors,
          email: "",
        });
      }
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  return {
    user,
    errors,
    handleChange,
    loginHandler,
    focusHandler,
    isSuccess,
    signupHandler,
    selectHandler,
    select,
  };
};

export default useForm;
