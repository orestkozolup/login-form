"use client";

import styles from './styles.module.css';

import Input from '../input';
import Button from '../button';

const AuthForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Sign Up</h2>
      <Input placeholder="Enter your email" />
      <Input placeholder="Create your password" />
      <Button label="Sign Up" onClick={() => console.log('HERE1')} />
    </div>
  )
}

export default AuthForm;