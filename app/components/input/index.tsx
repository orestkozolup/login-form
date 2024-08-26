"use client";

import styles from "./styles.module.css";
import { useState, memo } from "react";
import Image from "next/image";
import hidePasswordImg from "../../../public/hide_password.png";
import showPasswordImg from "../../../public/show_password.png";

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

  const {
    validator,
    validationType,
    rules,
    name,
    hidden,
    type,
    ...restConfig
  } = config;

  const [errors, setErrors] = useState<string[]>([]);
  const [inputType, setInputType] = useState<"text" | "password">(type);

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
      const isValid = handleValidation(value);
      setFieldValue(name, value, isValid);
    }
  };

  const hasError = errors.length > 0;
  const isSuccess = !!values[name] && !hasError;

  const changeVisibility = () => {
    setInputType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  return (
    <div className={`${styles.inputWrapper} ${externalClass}`}>
      <Field
        className={`${styles.input} ${
          hasError ? styles.error : isSuccess ? styles.success : ""
        }`}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        autoComplete="off"
        type={inputType}
        {...restConfig}
        {...props}
      />
      {hidden && (
        <Image
          src={inputType === "text" ? hidePasswordImg : showPasswordImg}
          alt="Change visibility button"
          onClick={changeVisibility}
          className={styles.image}
        />
      )}
      {!rules && hasError && (
        <p className={`${styles.error} ${styles.errorContainer}`}>
          {errors[0]}
        </p>
      )}
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
