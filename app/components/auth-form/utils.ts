export const validateEmail = (value: string) => {
  let error;
  if (!value) {
    error = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

export const validatePassword = (value: string) => {
  const errors = [];
  if (!value) {
    errors.push("Password is required");
  }
  if (value.length < 8) {
    errors.push("Password must be at least 8 characters");
  }
  if (value.length > 64) {
    errors.push("Password must be 64 characters or less");
  }
  if (!/[A-Z]/.test(value)) {
    errors.push("Password must contain at least one uppercase letter");
  }
  if (!/\d/.test(value)) {
    errors.push("Password must contain at least one number");
  }
  return errors;
};
