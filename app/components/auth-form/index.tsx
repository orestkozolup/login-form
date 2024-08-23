"use client";

import { Formik, Form } from "formik";
import { validateEmail, validatePassword } from "./utils";

import Button from "../button";
import Input from "../input";
import styles from "./styles.module.css";

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

          <Input
            name="email"
            placeholder="Enter your email"
            onBlur={(e: any) => {
              const { value } = e.target;
              handleBlur(e);
              const error = validateEmail(value);
              setFieldValue("email", value, !error);
            }}
          />

          <Input
            name="password"
            type="password"
            placeholder="Create your password"
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
