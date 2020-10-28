const submitHandler = (e, user, errors, setErrors) => {
  e.preventDefault();
  if (user.name.length < 5) {
    setErrors({
      ...errors,
      name: true,
    });
  } else {
    setErrors({
      ...errors,
      name: false,
    });
  }
};

export { submitHandler };
