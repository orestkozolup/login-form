"use client";

import styles from "./styles.module.css";
import { useState } from "react";

import { Field, useFormikContext } from "formik";

const Input = ({ config, inputRules, ...props }: any) => {
  const {
    handleBlur,
    handleChange,
    setFieldValue,
    setFieldError,
    values
  } = useFormikContext();

  const { validator, validationType, rules, name, ...restConfig } = config;

  const [errors, setErrors] = useState([]);

  const handleValidation = (value: string) => {
    const error = validator(value);
    setFieldError(name, error[0] || undefined);
    setErrors(error);
    return !error[0];
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleChange(e);
    if (validationType === "live") {
      const isValid = handleValidation(value);
      setFieldValue(name, value, isValid);
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleBlur(e);
    if (validationType !== "live") {
      handleValidation(value);
    }
  };

  return (
    <>
      <Field
        className={`${styles.input} ${(!!errors.length) ? styles.error : (values[name] ? styles.success : '')}`}
        onChange={onChange}
        onBlur={onBlur}
        {...restConfig}
        {...props}
        name={name}
        autocomplete="off"
      />
      {!rules && !!errors.length && <p className={styles.error}>{errors[0]}</p>}
      {rules && (
        <>
          {Object.values(rules).map((rule: any) => (
            <div
              key={rule}
              className={`${
                (!!errors.length || values[name]) &&
                (errors.includes(rule as never) ? styles.error : styles.success)
              }`}
            >
              {rule}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Input;
