import React from 'react'
import logo from '../../public/logo.svg'
import { Link } from 'react-router-dom'
import loginPage from './LoginPage'
import signUpPage from './SignPage'
function AuthPage() {
  return (


    //write your code here, baki mat chediyo.






    <div className='p-8 flex lg:flex-row flex-col w-full h-[100dvh] bg-[#F5F5F5]'>

      <div className='w-full lg:w-[50%] h-[50%] lg:h-full'>
        <h1 className='text-[2rem] lg:text-[6rem] logoFont text-[#1E212D]'>Recover'IT</h1>
        <p className='p-2 text-[1rem] lg:text-[1.5rem] w-[100%] text-[#1E212D]'>Lose something on campus? Our Lost and Found app makes it easy to get your stuff back. Just report what you’ve lost, or if you find something, list it here. We’re all about helping you reconnect with your belongings quickly and hassle-free, so nothing important stays lost for long.</p>


        <div className='flex gap-[2rem] ml-1 mt-[3rem]'>
          <Link to='/login'><button className='button-86 loginBtn  w-[100rem]'>Login</button></Link>
          <Link to='/signup' ><button className='button-86 signBtn w-[1rem]'>Sign up</button></Link>
        </div>
      </div>


      <div className='w-full h-[50%] lg:w-[50%] lg:h-full'>

        <img className='w-full h-full' src={logo} />

      </div>


    </div>












  )
}

export default AuthPage