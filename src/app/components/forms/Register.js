"use client";

import { generateRandomId } from "@/utils/generateRandomUserID";

import { useAuth } from "@/context/AuthContext";

import RegisterForm from "./RegisterForm";

const Register = () => {
  const { register } = useAuth();

  const onSubmit = async (values, actions) => {
    console.log(values);

    const enteredEmail = values.email;
    const enteredPass = values.password;
    const enteredConfirmPass = values.confirmPassword;

    const randomUserId = generateRandomId(8);

    try {
      await register(
        enteredEmail,
        enteredPass,
        enteredConfirmPass,
        randomUserId
      );

      console.log("done with success");

      actions.resetForm();
    } catch (error) {
      console.log("upssssssssssss");
      console.log(error);
    }
  };

  return <RegisterForm onSubmit={onSubmit} />;
};

export default Register;
