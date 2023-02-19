import React ,  {  useRef } from 'react'
import './login.css'
import  Button  from '../Button'
import { images } from '../../constants/index'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { CustomerLoginStart, CustomerLoginSuccess } from '../../actions/index'

function CustomerLogin() {
  
  const email = useRef();
  const password = useRef();

  const customer = useSelector( (state) => state.CustomerReducer )
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(CustomerLoginStart())
    console.log("Hello")
    try{
      console.log("Hii")
      const res = await axios.post("http://localhost:2024/customer/login", {
        email: email.current.value,
        password: password.current.value
      })
      console.log("Hii again")
      dispatch(CustomerLoginSuccess({ payload: res.data}))
      console.log(res.data)
      window.location.replace('/customerDash')
    }catch(err){
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
          <input type="text" className='text-field' ref={email}/>
          <label htmlFor="password">Password</label>
          <input type="password" className='password-field' ref={password}/>
        </div>
        <button type="submit">Submit</button>
      <p>Are you an Admin ? <Link to="/admin-login">Login Here</Link></p>
      </form>
    </div>
      <p style={{ marginTop: "10px"}}>Don't have an account ? <Link to="/register">Sign Up</Link></p>
  </>)
}

export default CustomerLogin