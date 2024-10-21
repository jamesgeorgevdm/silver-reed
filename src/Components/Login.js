import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice"; // Redux login action
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  //Standard validation used
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const handleLogin = (values) => {
    const firstName = values.email.split("@")[0]; // Extract the first name from the email
    dispatch(login(firstName)); // Dispatch the login action with the first name
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin} // Call handleLogin when the form is submitted
      >
        {() => (
          <Form>
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

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
