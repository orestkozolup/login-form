"use client";

import { Formik, Form } from "formik";
import { AUTH_FORM_CONFIG } from "./utils";

import Button from "../button";
import Input from "../input";
import styles from "./styles.module.css";
import { initialValues } from "./utils";

const AuthForm = () => {
  const handleSubmit = (values: any) => {
    console.log("Form Data:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ errors }) => (
        <Form className={styles.container} autoComplete="off">
          <h2 className={styles.header}>Sign Up</h2>
          <Input config={AUTH_FORM_CONFIG.EMAIL} externalClass={styles.emailInputWrapper} />
          <Input config={AUTH_FORM_CONFIG.PASSWORD} />

          <Button type="submit" disabled={!!Object.keys(errors).length}>
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
