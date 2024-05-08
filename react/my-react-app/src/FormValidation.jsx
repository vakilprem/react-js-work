import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function FormValidation() {
const defaultValues = {
name: "",
email: "",
password: "",
gender: "",
terms: false,
};
const ValidationSchema = Yup.object().shape({
name: Yup.string().required("Please Enter Yor Name"),
email: Yup.string()
.required("Please Enter Your Email")
.email("please Enter Valid Email"),
password: Yup.string().required("Please Enter Your password"),
gender: Yup.string().required("PLease Select Gnder"),
terms: Yup.boolean().oneOf([true], "Please accept terms and Condition"),
});

const handleSubmit = (values) => {
console.log(values);
};
return (
<div>
<h1>Form Validation with Formik and Yup Library</h1>
<Formik
initialValues={defaultValues}
validationSchema={ValidationSchema}
onSubmit={handleSubmit}
>
<Form>
    {/* <input type="text" name="name" placeholder="Enter your name" /> */}
    <Field type="text" name="name" placeholder="Enter Name" />
    <p className="p">
    <ErrorMessage name="name"></ErrorMessage>
    </p>
    <Field type="text" name="email" placeholder="Enter Email" />
    <p className="p">
    <ErrorMessage name="email"></ErrorMessage>
    </p>
    <Field type="text" name="password" placeholder="Enter Password" />
    <p className="p">
    <ErrorMessage name="password"></ErrorMessage>
    </p>
    <div>
    <Field
        component="select"
        name="gender"
        placeholder="Select you Gender"
    >
        <option value="">Select</option>
        <option value="male">Male</option>

        <option value="female">FeMale</option>
    </Field>
    <p className="p">
        <ErrorMessage name="gender"></ErrorMessage>
    </p>
    </div>
    <div>
    <label>
        <Field type="checkbox" name="terms"></Field>I accept Terms and
        condition
    </label>
    <p className="p">
        <ErrorMessage name="terms"></ErrorMessage>
    </p>
    </div>
    <button type="submit"> Submit</button>
</Form>
</Formik>
</div>
);
}

export default FormValidation;
