"use client";

import styles from "./styles.module.css";
import { useState, memo } from "react";

import { Field, useFormikContext } from "formik";
import { FieldConfig } from "../auth-form/utils";

interface InputProps {
  config: FieldConfig;
  externalClass?: string;
  [key: string]: any;
}

interface FormValues {
  [key: string]: any;
}

const Input = ({ config, externalClass, ...props }: InputProps) => {
  const { handleBlur, handleChange, setFieldValue, setFieldError, values } =
    useFormikContext<FormValues>();

  console.log('HERE1');

  const { validator, validationType, rules, name, ...restConfig } = config;

  const [errors, setErrors] = useState<string[]>([]);

  const handleValidation = (value: string) => {
    const validationErrors = validator(value);
    setErrors(validationErrors);
    setFieldError(name, validationErrors?.[0] || undefined);
    return !validationErrors[0];
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

  const hasError = errors.length > 0;
  const isSuccess = !!values[name] && !hasError;

  return (
    <div className={externalClass}>
      <Field
        className={`${styles.input} ${
          hasError ? styles.error : isSuccess ? styles.success : ""
        }`}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        autoComplete="off"
        {...restConfig}
        {...props}
      />
      {!rules && hasError && <p className={`${styles.error} ${styles.errorContainer}`}>{errors[0]}</p>}
      {rules && (
        <div className={styles.hintContainer}>
          {rules?.map((rule) => (
            <div
              key={rule}
              className={`${
                (hasError || isSuccess) &&
                (errors.includes(rule) ? styles.error : styles.success)
              }`}
            >
              {rule}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Input);
