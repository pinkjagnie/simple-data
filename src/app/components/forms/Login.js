"use client";

import LoginForm from "./LoginForm";
import Message from "./Message";

const Login = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);

    const enteredEmail = values.email;
    const enteredPass = values.password;
  };

  return <LoginForm onSubmit={onSubmit} />;
};

export default Login;
