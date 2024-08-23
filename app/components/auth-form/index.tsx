"use client";

import { Formik, Form, Field } from "formik";
import { validateEmail, validatePassword } from "./utils";

import Button from "../button";
import styles from './styles.module.css';

const AuthForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: any) => {
    console.log("Form Data:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnBlur={true}
      validateOnChange={false}
    >
      {({ handleChange, handleBlur, setFieldValue }) => (
        <Form className={styles.container}>
          <h2 className={styles.header}>Sign Up</h2>

          <Field
            name="email"
            placeholder="Enter your email"
            className="input"
            onBlur={(e: any) => {
              const { value } = e.target;
              handleBlur(e);
              const error = validateEmail(value);
              setFieldValue("email", value, !error);
            }}
          />

          <Field
            name="password"
            type="password"
            placeholder="Create your password"
            className="input"
            onChange={(e: any) => {
              const { value } = e.target;
              handleChange(e);
              const error = validatePassword(value);
              setFieldValue("password", value, !error);
            }}
          />

          <Button type="submit">Sign Up</Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
