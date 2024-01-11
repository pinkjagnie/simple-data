"use client";

import { generateRandomId } from "@/utils/generateRandomUserID";

import RegisterForm from "./RegisterForm";

const Register = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);

    const enteredEmail = values.email;
    const enteredPass = values.password;
    const enteredConfirmPass = values.confirmPassword;

    const randomUserId = generateRandomId(8);
    console.log(randomUserId);

    actions.resetForm();
  };

  return <RegisterForm onSubmit={onSubmit} />;
};

export default Register;
