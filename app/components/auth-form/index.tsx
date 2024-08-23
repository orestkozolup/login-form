"use client";

import { Formik, Form, Field, ErrorMessage } from 'formik';

const validateEmail = (value: any) => {
  let error;
  if (!value) {
    error = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const validatePassword = (value: any) => {
  const errors = [];
  if (!value) {
    errors.push('Password is required');
  }
  if (value.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  if (value.length > 64) {
    errors.push('Password must be 64 characters or less');
  }
  if (!/[A-Z]/.test(value)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/\d/.test(value)) {
    errors.push('Password must contain at least one number');
  }
  return errors.length > 0 ? errors.join(', ') : undefined;
};

const AuthForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: any) => {
    console.log('Form Data:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnBlur={true}
      validateOnChange={false}
    >
      {({ handleChange, handleBlur, setFieldValue, errors, touched }) => (
        <Form className="container">
          <h2 className="header">Sign Up</h2>

          {/* Email Field */}
          <div>
            <Field
              name="email"
              placeholder="Enter your email"
              className="input"
              onBlur={(e: any) => {
                const { value } = e.target;
                handleBlur(e);
                const error = validateEmail(value);
                console.log('HERE1', error);
                setFieldValue('email', value, !error);
              }}
            />
            {touched.email && errors.email && <div className="error">{errors.email}</div>}
          </div>

          {/* Password Field */}
          <div>
            <Field
              name="password"
              type="password"
              placeholder="Create your password"
              className="input"
              onChange={(e: any) => {
                const { value } = e.target;
                handleChange(e);
                const error = validatePassword(value);
                console.log('HERE2', error);
                setFieldValue('password', value, !error);
              }}
            />
            {touched.password && errors.password && <div className="error">{errors.password}</div>}
          </div>

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
