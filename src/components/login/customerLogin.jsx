import React, { useRef, useState } from 'react'
import './login.css'
import Button from '../Button'
import { images } from '../../constants/index'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { CustomerLoginStart, CustomerLoginSuccess } from '../../actions/index'

function CustomerLogin() {

  const email = useRef();
  const password = useRef();
  const [passwordCheck, setPasswordCheck] = useState('');
  const [emailCheck, setEmailCheck] = useState('');

  const customer = useSelector((state) => state.CustomerReducer)
  const dispatch = useDispatch();

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  const isEmailValid = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (event) => {
    setPasswordCheck(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailCheck(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(CustomerLoginStart())
    console.log("Hello")
    try {
      console.log("Hii")
      const res = await axios.post("http://localhost:2024/customer/login", {
        email: email.current.value,
        password: password.current.value
      })
      console.log("Hii again")
      dispatch(CustomerLoginSuccess({ payload: res.data }))
      console.log(res.data)
      window.location.replace('/customerDash')
    } catch (err) {
      alert('Invalid Credentials !')
    }
  }

  return (<>
    <div className='section log'>
      <div className='logImg'>
        <img src={images.customer} alt="" />
      </div>
      <form action="" className='form-control' onSubmit={handleSubmit}>
        <h1 className='login'>Customer</h1>
        <div className='inputFields'>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={emailCheck} onChange={handleEmailChange} required className='text-field' ref={email} />
          {!isEmailValid(emailCheck) && (
            <><span class="badge rounded-pill text-bg-danger">Email not valid</span></>
            
          )}
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={passwordCheck} onChange={handlePasswordChange} required className='password-field' ref={password} />
          {!isPasswordValid(passwordCheck) && (

          <><span class="badge rounded-pill text-bg-danger">Password not valid</span></>


          )}
        </div>
        <button type="submit">Login</button>
        <p>Are you an Admin ? <Link to="/admin-login">Login Here</Link></p>
      </form>
    </div>
    <p style={{ marginTop: "10px" }}>Don't have an account ? <Link to="/register">Sign Up</Link></p>
  </>)
}

export default CustomerLogin