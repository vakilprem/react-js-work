import * as Yup from "yup";
export const Signupvalidation = Yup.object({
  name: Yup.string().min(3).required("Please Enter Name"),
  email: Yup.string()
    .email("Please Enter Vaalid Email")
    .required("PLease Enter Password"),
  password: Yup.string().min(8).required("Please Enter Password"),

  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "password not matches")
    .required("PLease Enter Password"),
});
