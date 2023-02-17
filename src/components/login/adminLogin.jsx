import React from 'react'
import './login.css'
import  Button  from '../Button'
import { images } from '../../constants/index'

const AdminLogin = () => {
  return (
    <div className='section log'>  
      <div className='logImg'>
        <img src={images.admin} alt="" />
      </div>
      <form action="" className='form-control'>
      <h1 className='login'>Admin</h1>
        <div className='inputFields'>
          <label htmlFor="">Username</label>
          <input type="text" className='text-field'/>
          <label htmlFor="">Password</label>
          <input type="password" className='password-field'/>
        </div>
        <Button value='Login' />
      </form>
    </div>
  )
}

export default AdminLogin