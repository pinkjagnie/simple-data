"use client";

import RegisterForm from "./RegisterForm";

const Register = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);

    const enteredEmail = values.email;
    const enteredPass = values.password;
    const enteredConfirmPass = values.confirmPassword;
  };

  return <RegisterForm onSubmit={onSubmit} />;
};

export default Register;
