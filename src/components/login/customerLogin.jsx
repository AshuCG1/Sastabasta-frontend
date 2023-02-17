import React from 'react'
import './login.css'
import  Button  from '../Button'
import { images } from '../../constants/index'
import { Link } from 'react-router-dom'

const CustomerLogin = () => {
  return (<>
    <div className='section log'>  
      <div className='logImg'>
        <img src={images.customer} alt="" />
      </div>
      <form action="" className='form-control'>
      <h1 className='login'>Customer</h1>
        <div className='inputFields'>
          <label htmlFor="">Username</label>
          <input type="text" className='text-field'/>
          <label htmlFor="">Password</label>
          <input type="password" className='password-field'/>
        </div>
        <Button value='Login' />
      </form>
    </div>
      <p>Don't have an account ? <Link to="/customer-signup">Sign Up</Link></p>
  </>)
}

export default CustomerLogin