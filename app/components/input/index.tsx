import styles from "./styles.module.css";

import { Field, useFormikContext } from "formik";

const Input = ({ config, inputRules, ...props }: any) => {
  const { handleBlur, handleChange, setFieldValue, ...formik } =
    useFormikContext();

  const { validator, validationType, rules, ...restConfig } = config;

  const onChange =
    validationType === "live"
      ? (e: any) => {
          const { value } = e.target;
          handleChange(e);
          const error = validator(value);
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
