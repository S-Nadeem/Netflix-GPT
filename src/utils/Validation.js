export const validate = (email, password, fullName) => {
  const emailValidate =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const fullNameValidate =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      fullName
    );

  if (!emailValidate) return "Email is invalid";
  if (!passwordValidate) return "Password doesn't match the requirements";
  if (!fullNameValidate) return "name is incorrect";

  return null;
};
