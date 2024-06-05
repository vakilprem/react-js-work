// import React, { useEffect, useRef, useState } from "react";

// function UseRef2() {
//   const [inputvalue, setInputValue] = useState("");
//   //   const [count, setCount] = useState(0);
//   //State is updatein g so manny times so using use ref
//   const count = useRef(0);

//   useEffect(() => {
//     // setCount(count + 1);
//     // console.log(count.current);
//     count.current = count.current + 1;
//   });
//   return (
//     <div>
//       <form>
//         <label>Enter Name:</label>
//         <input
//           type="text"
//           value={inputvalue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter Your Name"
//         ></input>
//         <h2>Render Counnt {count.current}</h2>
//         <h3>Data {inputvalue}</h3>
//       </form>
//     </div>
//   );
// }

// export default UseRef2;
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const initialValues = {
    name: "",
    address: "",
    mobile: "",
    email: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <Field type="text" id="address" name="address" />
            <ErrorMessage name="address" component="div" />
          </div>

          <div>
            <label htmlFor="mobile">Mobile No</label>
            <Field type="text" id="mobile" name="mobile" />
            <ErrorMessage name="mobile" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
