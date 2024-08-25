"use client";

import { Formik, Form } from "formik";
import { validateEmail, validatePassword, PASSWORD_RULES, AUTH_FORM_CONFIG } from "./utils";

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
      {({ handleChange, handleBlur, setFieldValue, setFieldError }) => (
        <Form className={styles.container}>
          <h2 className={styles.header}>Sign Up</h2>

          <Input
            config={AUTH_FORM_CONFIG.EMAIL}
            // onBlur={(e: any) => {
            //   const { value } = e.target;
            //   handleBlur(e);
            //   const error = validateEmail(value);
            //   setFieldValue("email", value, !error);
            // }}
          />

          <Input
            config={AUTH_FORM_CONFIG.PASSWORD}
            // onChange={(e: any) => {
            //   const { value } = e.target;
            //   handleChange(e);
            //   const error = validatePassword(value);
            //   setFieldValue("password", value, !error);
            // }}
          />

          <Button type="submit">Sign Up</Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
