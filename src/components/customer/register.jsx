import React, { useState } from "react";
import Axios from "axios";

import "./register.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Register() {
  const url = "http://localhost:2024/customer/addcustomer";

  const registerSchema = Yup.object().shape({
    custId: Yup.string()
      .required("This Field cannot be empty"),
      
    // custName: Yup.string().length(10).required("This Field cannot be empty"),

    mobileNo: Yup.string()
      .length(10)
      .required("This Field cannot be empty")
      .matches(/^$|[6-9][0-9]{9}/, "Phone number is not valid"),

    email: Yup.string().email().required("This Field cannot be empty"),

    password: Yup.string()
      .min(8, "password should be 8 characters long")
      .required("This Field cannot be empty"),
  });

  function submit(values) {
    // e.preventDefault();
    Axios.post(url, {
      custId: values.custId,
      custName: values.custName,
      mobileNo: values.mobileNo,
      email: values.email,
      password: values.password,
    }).then((res) => {
      alert("Registration Success");
      window.location.href = "http://localhost:3000/";
    });
  }

  return (
    <div className="maincontainer">
      <div className="mainBox">
        <div className="title">Registration</div>
        <Formik
          initialValues={{
            custId: "",
            custName: "",
            mobileNo: "",
            email: "",
            password: "",
          }}
          onSubmit={(e) => submit(e)}
          validationSchema={registerSchema}
        >
          {(props) => (
            <div className="content">
              <Form>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Customer ID(TEMP)</span>
                    <Field
                      name="custId"
                      type="number"
                      id="custId"
                      placeholder="ID(temp)"
                    />
                    <ErrorMessage name="custId" />
                  </div>
                  
                  <div className="input-box">
                  <span className="details">Name</span>
                  <Field
                    name="custName"
                    type="text"
                    
                    id="custName"
                    placeholder="Name"
                  />
                  <div className="error">
                  <ErrorMessage name="custName" />
                  </div>
                </div>

                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <Field
                      name="mobileNo"
                      type="text"
                      id="mobileNo"
                      placeholder="Contact"
                    />
                    <div className="error">
                      <ErrorMessage name="mobileNo" />
                    </div>
                  </div>
                </div>

                <div className="input-box">
                  <span className="details">Email</span>
                  <Field
                    name="email"
                    type="email "
                    className="form-2"
                    id="email"
                    placeholder="Email"
                  />
                  <div className="error">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <Field
                    name="password"
                    type="password"
                    className="form-2"
                    id="password"
                    placeholder="Password"
                  />
                  <div className="error">
                    <ErrorMessage name="password" />
                  </div>
                </div>

                <div className="button">
                  <input type="submit" value="Register" />
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Register;
