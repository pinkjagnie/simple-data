import * as yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
// regex for password - min 8 characters, 1 capital letter, 1 number, 1 special character

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "First name should be at least 2 characters long")
    .max(
      10,
      "First name should be maximum 10 characters long, it could also be a nickname"
    )
    .required("This field is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "The password you entered is too short")
    .matches(passwordRules, {
      message:
        "Password must be at least 8 characters long, contain one capital letter, one number and one special character",
    })
    .required("This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Entered passwords must match")
    .required("This field is required"),
  acceptedTOS: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "The password you entered is too short")
    .matches(passwordRules, {
      message:
        "Password must be at least 8 characters long, contain one capital letter, one number and one special character",
    })
    .required("This field is required"),
});
