import { Field, Formik, Form, ErrorMessage } from "formik";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import EyeIcon from "../Icons/EyeIcon.jsx";
import EueOffIcon from "../Icons/EueOffIcon.jsx";
import clsx from "clsx";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });
  const handleSubmit = async (values, actions) => {
    console.log(values);

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <p className={css.mainText}>
          Expand your mind, reading <span>a book</span>
        </p>
        <div className={css.fields}>
          <div className={css.errorMsgCont}>
            <div className={css.inputContainer}>
              <Field
                type="email"
                name="email"
                className={clsx(css.field, css.mailField)}
              />
              <span className={css.placeholder}>Mail:</span>
            </div>
            <ErrorMessage
              name="email"
              component="span"
              className={css.errorMsg}
            />
          </div>
          <div className={css.passwordWrapper}>
            <div className={css.errorMsgCont}>
              <div className={css.inputContainer}>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={clsx(css.field, css.passwordField)}
                />
                <span className={css.placeholder}>Password:</span>
              </div>
            </div>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={css.eyeIcon}
            >
              {showPassword ? <EyeIcon /> : <EueOffIcon />}
            </button>
          </div>
          <ErrorMessage
            name="password"
            component="span"
            className={css.errorMsg}
          />
        </div>
        <button type="button" className={css.submitButton}>
          Log In
        </button>
        <NavLink to="/register" className={css.linkToLoginPage}>
          Don’t have an account?
        </NavLink>
      </Form>
    </Formik>
  );
}
