import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Registration.css";

const Registration = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(
        15,
        "Must be 15 characters or less"
      ) /*Used the standard requirements as set out in the documentation of Formik*/
      .required("Required"),
    surname: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or more")
      .matches(/[a-z]/, "Must contain a lowercase letter")
      .matches(/[A-Z]/, "Must contain an uppercase letter")
      .matches(/\d/, "Must contain a number")
      .matches(/[!@#$%^&*]/, "Must contain a special character")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <Formik
        initialValues={{
          firstName: "",
          surname: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Registration Data:", values);
        }}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label htmlFor="surname">Surname</label>
              <Field id="surname" name="surname" />
              <ErrorMessage name="surname" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>
            {/*Not sure if the button is supposed to do anything except console.log, so left it at that*/}
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
