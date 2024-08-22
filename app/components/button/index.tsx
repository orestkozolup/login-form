import styles from './styles.module.css';

interface ButtonProps {
  label: string;
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>{label}</button>
  )
}

export default Button;