import React from 'react'
import './Logins.css';
function login() {
  return (
    <>
      <div className='lg:mt-[9rem] mt-[5rem] mx-auto flex flex-col lg:justify-start justify-center items-center lg:items-start'> 
     <div className='text-[36px]'>Log in to Exclusive</div> 
     <div className='text-[16px]'>Enter your details below</div> 
     <div><input type="name" name="text" placeholder='name...' id="name" /></div>
     <div><input type="email" name="text" placeholder='Email or Phone Number' id="email" /></div>
     <div ><input id='pass' type="password" name="number" placeholder='Password'  /></div>
    <div className='flex justify-between mt-[3rem] w-[300px] items-center'>
      <div><button className='text-white bg-red-600 w-[100px] py-3'>Log In </button></div>
      <div className='text-red-600 cursor-pointer'>Forget Password?</div>
        </div>
     </div>
    </>
  )
}

export default login;
