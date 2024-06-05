// import React from "react";
// // import { useFormik } from "formik";
// import { useFormik } from "formik";
// import { Signupvalidation } from "./Signupvalidation";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   cpassword: "",
// };
// function FormValidation() {
//   const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
//     initialValues: initialValues,
//     validationSchema: Signupvalidation,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   //   console.log(formik);
//   return (
//     <div>
//       <h1>Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <br></br>
//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.name}
//         />
//         <br></br>
//         {errors.name && <small className="error-message">{errors.name}</small>}
//         <br />
//         <label htmlFor="email">Email</label>
//         <br></br>
//         <input
//           type="text"
//           placeholder="Enter Your Email"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.email}
//         />
//         <br></br>
//         {errors.email && <small>{errors.email}</small>}
//         <br />
//         <label htmlFor="password">Password</label>
//         <br></br>
//         <input
//           type="text"
//           placeholder="Enter Your password"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.password}
//         />
//         <br></br>
//         {errors.password && <small>{errors.password}</small>}
//         <br />
//         <label htmlFor="cpassword">Confirm Password</label>
//         <br></br>
//         <input
//           type="text"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.cpassword}
//           placeholder="Enter Your Confirm Password"
//         />
//         <br></br>
//         {errors.cpassword && <small>{errors.cpassword}</small>}
//         <br />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default FormValidation;
import React from "react";
// import { useFormik } from "formik";
import { Field, Form, Formik, useFormik } from "formik";
import { Signupvalidation } from "./Signupvalidation";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};
function FormValidation() {
  //   console.log(formik);
  return (
    <div>
      <h1>Form</h1>
      <Formik initialValues={initialValues} validationSchema={Signupvalidation}>
        {({ errors }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <br></br>
            <Field type="text" name="name"></Field>
            <br></br>
            {errors.name && (
              <small className="error-message">{errors.name}</small>
            )}
            <br />
            <label htmlFor="email">Email</label>
            <br></br>
            <Field type="email" name="email"></Field>
            <br></br>
            {errors.email && <small>{errors.email}</small>}
            <br />
            <label htmlFor="password">Password</label>
            <br></br>
            <Field type="password" name="password"></Field>
            <br></br>
            {errors.password && <small>{errors.password}</small>}
            <br />
            <label htmlFor="cpassword">Confirm Password</label>
            <br></br>
            <Field type="password" name="cpassword"></Field>
            <br></br>
            {errors.cpassword && <small>{errors.cpassword}</small>}
            <br />
            <input type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormValidation;
