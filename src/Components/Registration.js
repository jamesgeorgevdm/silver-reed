import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Registration.css";

const Registration = () => {
  // Validation schema for the registration form using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less") // Maximum length for first name
      .required("Required"),
    surname: Yup.string()
      .max(20, "Must be 20 characters or less") // Maximum length for surname
      .required("Required"),
    email: Yup.string()
      .email("Invalid email format") // Validate email format
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or more") // Minimum length for password
      .matches(/[a-z]/, "Must contain a lowercase letter") // Must include at least one lowercase letter
      .matches(/[A-Z]/, "Must contain an uppercase letter") // Must include at least one uppercase letter
      .matches(/\d/, "Must contain a number") // Must include at least one number
      .matches(/[!@#$%^&*]/, "Must contain a special character") // Must include at least one special character
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match") // Ensure passwords match
      .required("Required"),
  });

  return (
    <div className="registration-form">
      <h2>Register</h2>
      {/* Using Formik to manage form state, validation, and submission */}
      <Formik
        initialValues={{
          firstName: "",
          surname: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema} // Apply the Yup validation schema
        onSubmit={(values) => {
          // Handle form submission by logging the form values
          console.log("Registration Data:", values);
        }}
      >
        {({ isValid, touched }) => (
          <Form>
            {/* First Name input field */}
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field
                id="firstName"
                name="firstName"
                className={touched.firstName ? "field-touched" : ""} // Highlight field if touched
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />{" "}
              {/* Error message for first name */}
            </div>

            {/* Surname input field */}
            <div>
              <label htmlFor="surname">Surname</label>
              <Field
                id="surname"
                name="surname"
                className={touched.surname ? "field-touched" : ""} // Highlight field if touched
              />
              <ErrorMessage name="surname" component="div" className="error" />{" "}
              {/* Error message for surname */}
            </div>

            {/* Email input field */}
            <div>
              <label htmlFor="email">Email Address</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={touched.email ? "field-touched" : ""} // Highlight field if touched
              />
              <ErrorMessage name="email" component="div" className="error" />{" "}
              {/* Error message for email */}
            </div>

            {/* Password input field */}
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className={touched.password ? "field-touched" : ""} // Highlight field if touched
              />
              <ErrorMessage name="password" component="div" className="error" />{" "}
              {/* Error message for password */}
            </div>

            {/* Confirm Password input field */}
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={touched.confirmPassword ? "field-touched" : ""} // Highlight field if touched
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />{" "}
              {/* Error message for confirm password */}
            </div>

            {/* Submit button, disabled if form is not valid */}
            <button type="submit" disabled={!isValid}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
