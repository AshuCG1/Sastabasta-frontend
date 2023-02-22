import React, { useState } from "react";
import Axios from "axios";
import  Button  from "../Button";

import "./register.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Register() {
  const url = "http://localhost:2024/customer/addCustomer";
  const[id, setId] = useState("")
  const registerSchema = Yup.object().shape({
    
      
    custName: Yup.string().required("This Field cannot be empty"),

    mobileNo: Yup.string()
      .length(10)
      .required("This Field cannot be empty")
      .matches(/^$|[6-9][0-9]{9}/, "Phone number is not valid"),

    email: Yup.string().email().required("This Field cannot be empty"),

    password: Yup.string()
      .required("This Field cannot be empty")
      .matches(/(?=.{8,})/, "Password must match criteria")
      .matches(/^(?=.*[a-z])/,"Password must contain at least one Lowercase letter")
      .matches(/^(?=.*[A-Z])/,"Password must contain at least one Uppercase letter")
      .matches(/^(?=.*[0-9])/,"Password must contain at least one Number")
      .matches(/^(?=.*[!@#\$%\^&\*])/,"Password must contain at least one Special Character")
  });

  async function submit(values) {
    // values.preventDefault();
    await Axios.post(url, {
    
      custName: values.custName,
      mobileNo: values.mobileNo,
      email: values.email,
      password: values.password,
    }).then((res) => {
      // alert("Registration Success");
      setId(res.data.custId)
      console.log(res.data.custId)

       Axios.post('http://localhost:2024/wishlist/addWishlist', {}).then((pes)=>{  
        console.log(pes.data.wishlistId) 
        Axios.put(`http://localhost:2024/wishlist/${pes.data.wishlistId}/setCustomer/${res.data.custId}`,{}).then((cres)=>{
          console.log(cres)
          alert("Registration Successful....Redirecting to Login Page")
          window.location.href = "http://localhost:3000/login";
        })

         });

      
      // window.location.href = "http://localhost:3000/customerDash";
    });
    
    
    // adding wishlist
    // Axios.post('http://localhost:2024/wishlist/addWishlist', {}).then((res)=>{   
    // });

  }
  
  return (
    <div className="maincontainer">
      <div className="mainBox">
        <div className="title">Sign Up</div>
        <Formik
          initialValues={{
          
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

                <button type="submit">Register</button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Register;
