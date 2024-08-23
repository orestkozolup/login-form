"use client";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateEmail, validatePassword } from './utils';

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
