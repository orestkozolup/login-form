import styles from "./styles.module.css";

const Input = ({ placeholder }: any) => {
  return <input className={styles.input} placeholder={placeholder} />;
};

export default Input;
