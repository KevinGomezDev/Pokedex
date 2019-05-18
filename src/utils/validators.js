export const validateEmail = (email) =>
  /^[\w._-]+(?:\+[\w._-]+)?@[\w.-]+\.[a-zA-Z]{2,6}$/.test(email);