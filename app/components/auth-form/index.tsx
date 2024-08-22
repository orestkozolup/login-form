"use client";

import styles from "./styles.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Input from "../input";
import Button from "../button";

const AuthForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be 64 characters or less')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .required('Password is required'),
  });

  return (
    <div className={styles.container}>
      {/* <h2 className={styles.header}>Sign Up</h2>
      <Input placeholder="Enter your email" />
      <Input placeholder="Create your password" />
      <Button label="Sign Up" onClick={() => console.log("HERE1")} /> */}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form data", values);
        }}
      >
        {({ handleSubmit, errors }) => {
          console.log('HERE2', errors)

          return (
            <Form onSubmit={handleSubmit} className={styles.container}>
              <h2 className={styles.header}>Sign Up</h2>
  
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  // className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  // className={styles.error}
                />
              </div>
  
              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Create your password"
                  className={styles.input}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </div>
  
              <Button label="Sign Up" type="submit" />
            </Form>
          )
        }}
      </Formik>
    </div>
  );
};

export default AuthForm;
