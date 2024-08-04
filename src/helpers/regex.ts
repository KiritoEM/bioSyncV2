import emailRegex from "email-regex";

const emailValid = (email: string) => {
  return emailRegex().test(email);
};

export { emailValid };
