import styles from "./styles.module.css";

import { Field } from "formik";

const Input = (props: any) => {
  return <Field className={styles.input} {...props} />;
};

export default Input;
