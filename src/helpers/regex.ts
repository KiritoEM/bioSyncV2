import emailRegex from "email-regex";

const emailValid = (email: string) => {
  return emailRegex().test(email);
};

const getFileName = (filePath: string): string => {
  return filePath.split(/[\\/]/).pop() || filePath;
};

export { emailValid, getFileName };
