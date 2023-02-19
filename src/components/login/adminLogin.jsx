import React ,  {  useRef } from 'react'
import './login.css'
import  Button  from '../Button'
import { images } from '../../constants/index'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { AdminLoginStart, AdminLoginSuccess } from '../../actions/index'

function AdminLogin() {

  const email = useRef();
  const password = useRef();

  const admin = useSelector( (state) => state.AdminReducer )
  const dispatch = useDispatch();

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
      console.log("Hii again")
      dispatch(AdminLoginSuccess({ payload: res.data}))
      console.log(res.data)
      window.location.replace('/adminDash')
    }catch(err){
      alert('Invalid Credentials !')
    }
  }

  return (
    <div className='section log'>  
      <div className='logImg'>
        <img src={images.admin} alt="" />
      </div>
      <form action="" className='form-control' onSubmit={handleSubmit}>
      <h1 className='login'>Admin</h1>
        <div className='inputFields'>
          <label htmlFor="email">Username</label>
          <input type="text" className='text-field' ref={email}/>
          <label htmlFor="password">Password</label>
          <input type="password" className='password-field'ref={password}/>
        </div>
        <button type="submit">Submit</button>
        <p>Are you a Customer ? <Link to="/login">Login Here</Link></p>
      </form>
    </div>
  )
}

export default AdminLogin