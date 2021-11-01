import React, { useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { userContext } from "../../Utils/Context";
import * as login from "../../Utils/validation.json";
function AuthForm() {
  const { setLoggedIn } = useContext(userContext);
  const [err, setErr] = useState(false);
  const validationSchema = Yup.object({
    userName: Yup.string().required("Required"),
    passWord: Yup.string().required("Required"),
  });
  var initialValues = {
    userName: "",
    passWord: "",
  };
  const onSubmit = (values) => {
    const loginCheck =
      values.userName === login.username && values.passWord === login.password;

    if (loginCheck) return setLoggedIn(true);
    setErr(false);
    return setErr(true);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        {err && <h3>Please type correct username and password</h3>}

        <label htmlFor='userName'>User Name</label>
        <Field name='userName' />
        <ErrorMessage name='userName'>{(msg) => <div>{msg}</div>}</ErrorMessage>
        <br />
        <label htmlFor='passWord'>Password</label>
        <Field name='passWord' type='password' />
        <ErrorMessage name='passWord'>{(msg) => <div>{msg}</div>}</ErrorMessage>

        <div>
          <button type='submit'>Log In</button>
        </div>
      </Form>
    </Formik>
  );
}
export default AuthForm;
