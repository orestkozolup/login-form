import AuthForm from "../components/auth-form";
import styles from './styles.module.css';

const AuthorizationPage = () => {
  return (
    <main className={styles.container}>
      <AuthForm />
    </main>
  );
};

export default AuthorizationPage;
