import React, { useState } from "react";
import Axios from "axios";

import "./register.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Register() {
  const url = "";

  const registerSchema = Yup.object().shape({
    custName: Yup.string().required("This Field cannot be empty"),
    
  
    mobileNo: Yup.string()
      .length(10)
      .required("This Field cannot be empty")
      .matches(/^$|[6-9][0-9]{9}/, "Phone number is not valid"),

    email: Yup.string().email().required("This Field cannot be empty"),

    custPassword: Yup.string()
      .min(8, "password should be 8 characters long")
      .required("This Field cannot be empty")
    
  });

  function submit(values) {
    // e.preventDefault();
    Axios.post(url, {
        // customerId: values.customerId,
      custName: values.custName,
      mobileNo: values.mobileNo,
      email: values.email,
      custPassword: values.custPassword
    }).then((res) => {
      alert("Registration Success");
      window.location.href = 'http://localhost:3002/'
    });
  }
  

  return (
    <div className="maincontainer">
      <div className="mainBox">
        <div className="title">Registration</div>
        <Formik
          initialValues={{
            // customerId: "",
            custName: "",
            mobileNo: "",
            email: "",
            custPassword: "",
            
          }}
          onSubmit={(e) => submit(e)}
          validationSchema={registerSchema}
        >
          {(props) => (
            <div className="content">
              <Form>
                <div className="user-details">
                  {/* <div className="input-box">
                                <span className="details">Customer ID(TEMP)</span>
                                <Field onChange={(e) => handle(e)} type="number" id="customerId" value={data.customerId}
                                    placeholder="ID(temp)" /><ErrorMessage name="" />
                            </div> */}
                  <div className="input-box">
                    <span className="details">Full Name</span>
                    <Field
                      name="custName "
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
                    name="custPassword"
                    type="custPassword"
                    className="form-2"
                    id="custPassword"
                    placeholder="Password"
                  />
                  <div className="error">
                  <ErrorMessage name="custPassword" />
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
