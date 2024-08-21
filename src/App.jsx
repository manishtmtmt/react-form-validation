import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import validationSchema from "./validationSchema";

const App = () => {
  return (
    <div className="container">
      <h1>Sign Up</h1>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          toast.success("Sign Up Successful!");
          resetForm();
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <span className="required">*</span>
              <Field
                name="firstName"
                type="text"
                placeholder="John"
                className={`${errors.firstName ? "error-input" : ""}`}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <span className="required">*</span>
              <Field
                name="lastName"
                type="text"
                placeholder="Doe"
                className={`${errors.lastName ? "error-input" : ""}`}
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <span className="required">*</span>
              <Field
                name="email"
                type="email"
                placeholder="john@example.com"
                className={`${errors.email ? "error-input" : ""}`}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <span className="required">*</span>
              <Field
                name="password"
                type="password"
                placeholder="John@123"
                className={`${errors.password ? "error-input" : ""}`}
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
