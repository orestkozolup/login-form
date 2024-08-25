"use client";

import { Formik, Form } from "formik";
import { AUTH_FORM_CONFIG } from "./utils";

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
      {() => (
        <Form className={styles.container}>
          <h2 className={styles.header}>Sign Up</h2>

          <Input
            config={AUTH_FORM_CONFIG.EMAIL}
          />

          <Input
            config={AUTH_FORM_CONFIG.PASSWORD}
          />

          <Button type="submit">Sign Up</Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
