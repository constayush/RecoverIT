import React from 'react'
import logo from '../../public/logo.svg'
import { Link } from 'react-router-dom'
import loginPage from './LoginPage'
import signUpPage from './SignPage'
function AuthPage() {
  return (


    //write your code here, baki mat chediyo.






    <div className='p-8 flex w-full h-[100dvh] bg-[#FAF3E0]'>

      <div className='w-[50%] h-full'>
        <h1 className='text-[6rem] logoFont text-[#1E212D]'>Recover'IT</h1>
        <p className='p-2 text-[1.5rem] w-[100%] text-[#1E212D]'>Lose something on campus? Our Lost and Found app makes it easy to get your stuff back. Just report what you’ve lost, or if you find something, list it here. We’re all about helping you reconnect with your belongings quickly and hassle-free, so nothing important stays lost for long.</p>


        <div className='flex gap-[2rem] ml-1 mt-[3rem]'>
          <Link to='/login'><button className='button-86 loginBtn '>Login</button></Link>
          <Link to='/signup' ><button className='button-86 signBtn '>Sign up</button></Link>
        </div>
      </div>


      <div className='w-[50%] h-full'>

        <img className='w-[100%] h-[100%]' src={logo} />

      </div>


    </div>












  )
}

export default AuthPage