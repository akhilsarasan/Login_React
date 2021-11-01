import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { phoneRegExp } from "../../../Helper/constant";
// import style from "./style.module.css";

function CreateUser() {
  var initialValues = {
    gender: "",
    email: "",
    userName: "",
    password: "",
    phone: "",
    dob: "",
  };

  const validationSchema = Yup.object({
    gender: Yup.string().required("* Required"),
    email: Yup.string()
      .email("Please type a valid email address")
      .required("* Required"),
    userName: Yup.string().required("* Required"),
    password: Yup.string().required("* Required"),
    // phone: Yup.string()
    //   .matches(phoneRegExp, "Please type a valid mobile number")
    //   .required("* Required"),
    dob: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log({ values });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h3>Please fill in your data here</h3>

        <label htmlFor='gender'>Gender</label>
        <Field name='gender' />
        <ErrorMessage name='gender'>{(msg) => <div>{msg}</div>}</ErrorMessage>

        <label htmlFor='email'>Email</label>
        <Field name='email' type='email' />
        <ErrorMessage name='email'>{(msg) => <div>{msg}</div>}</ErrorMessage>

        <label htmlFor='userName'>User Name</label>
        <Field name='userName' />
        <ErrorMessage name='userName'>{(msg) => <div>{msg}</div>}</ErrorMessage>

        <label htmlFor='password'>Password</label>
        <Field name='password' type='password' />
        <ErrorMessage name='password'>{(msg) => <div>{msg}</div>}</ErrorMessage>

        {/* <label htmlFor='phone'>Phone</label>
        <Field name='phone' placeholder='+91 9999999999' />
        <ErrorMessage name='phone'>{(msg) => <div>{msg}</div>}</ErrorMessage> */}

        <label htmlFor='dob'>DOB</label>
        <Field name='dob' />
        <ErrorMessage name='dob'>{(msg) => <div>{msg}</div>}</ErrorMessage>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default CreateUser;
