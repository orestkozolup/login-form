"use client";

import styles from "./styles.module.css";
import { useState } from "react";

import { Field, useFormikContext } from "formik";

const Input = ({ config, inputRules, ...props }: any) => {
  const { handleBlur, handleChange, setFieldValue, setFieldError, ...formik } =
    useFormikContext();

  const { validator, validationType, rules, ...restConfig } = config;

  const [errors, setErrors] = useState([]);

  console.log("HERE3", formik);

  const onChange =
    validationType === "live"
      ? (e: any) => {
          const { value } = e.target;
          handleChange(e);
          const error = validator(value);
          if (error[0]) {
            setErrors(error[0]);
          }
          setFieldValue("password", value, !error);
        }
      : handleChange;

  const onBlur =
    validationType === "live"
      ? handleBlur
      : (e: any) => {
          const { value } = e.target;
          handleBlur(e);
          const error = validator(value);
          if (error[0]) {
            setErrors(error[0]);
          }
          setFieldValue("email", value, !error);
        };

  return (
    <>
      <Field
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
        {...restConfig}
        {...props}
      />
      {rules && (
        <>
          {Object.values(rules).map((rule: any) => (
            <div key={rule}>{rule}</div>
          ))}
        </>
      )}
    </>
  );
};

export default Input;
