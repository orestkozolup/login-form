export const validateEmail = (value: string) => {
  const errors = [];
  if (!value) {
    errors.push("Email is required");
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    errors.push("Invalid email address");
  }
  return errors;
};

export const validatePassword = (value: string) => {
  const errors = [];
  if (value.length < 8 || value.length > 64) {
    errors.push(PASSWORD_RULES.LENGTH);
  }
  if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
    errors.push(PASSWORD_RULES.CASES);
  }
  if (!/\d/.test(value)) {
    errors.push(PASSWORD_RULES.DIGIT);
  }
  return errors;
};

export const PASSWORD_RULES = {
  DIGIT: "At least one digit",
  LENGTH: "8 to 64 characters or more (no spaces)",
  CASES: "Uppercase and lowercase letters",
};

export const AUTH_FORM_CONFIG = {
  EMAIL: {
    name: "email",
    type: "text",
    placeholder: "Enter your email",
    validator: validateEmail,
    validationType: 'lazy'
  },
  PASSWORD: {
    name: "password",
    type: "password",
    placeholder: "Create your password",
    validator: validatePassword,
    validationType: 'live',
    rules: PASSWORD_RULES,
  },
};
