import React ,  {  useRef, useState } from 'react'
import './login.css'
import { images } from '../../constants/index'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { AdminLoginStart, AdminLoginSuccess } from '../../actions/index'

function AdminLogin() {

  const email = useRef();
  const password = useRef();
  const [passwordCheck, setPasswordCheck] = useState('');
  const [emailCheck, setEmailCheck] = useState('');

  const admin = useSelector( (state) => state.AdminReducer )
  const dispatch = useDispatch();

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  const isEmailValid = (email) => {

  };

  const handlePasswordChange = (event) => {
    setPasswordCheck(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailCheck(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(AdminLoginStart())
    console.log("Hello")
    try{
      console.log("Hii")
      const res = await axios.post("http://localhost:2024/admin/login", {
        email: email.current.value,
        password: password.current.value
      })
      // console.log("Hii again")
      dispatch(AdminLoginSuccess({ payload: res.data}))
      console.log(res.data)
      window.location.replace('/adminDash')
    }catch(err){
      alert('Invalid Credentials !')
    }
  }

  return (<>
    <div className='section log'>  
      <div className='logImg'>
        <img src={images.admin} alt="" />
      </div>
      <form action="" className='form-control' onSubmit={handleSubmit}>
      <h1 className='login'>Admin</h1>
      <div className='inputFields'>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={emailCheck} onChange={handleEmailChange} required className='text-field' ref={email} />
          {!isEmailValid(emailCheck) && (
            <><p></p></>
          )}
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={passwordCheck} onChange={handlePasswordChange} required className='password-field' ref={password} />
          {!isPasswordValid(passwordCheck) && (

            <>
<button type="button" class="btn btn-outline-danger btn-sm " data-bs-toggle="modal" data-bs-target="#exampleModal">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>

</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Email Conditions:</h5>
        <ul>
          <li>Should be a valid email i.e Registered Beforehand</li>
          <li>Should Contain @ and .com, .org , etc. i.e dsp@capgemini.com</li>
        </ul>
        <h5>Password Conditions:</h5>
        <ul>
          <li>Should contain atleast one UpperCase letter</li>
          <li>Should contain atleast one lowerCase letter</li>
          <li>Should contain atleast one Special Character</li>
          <li>Should contain atleast one number</li>
          <li>Should contain atleast 8 charater long</li>
          
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div></>

          )}
        </div>
        <button type="submit">Login</button>
        <p>Are you a Customer ? <Link to="/login">Login Here</Link></p>
      </form>
    </div>
  </>)
}

export default AdminLogin