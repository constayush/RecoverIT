import React from 'react';
import logo from '../../public/logo.svg';
import { Link } from 'react-router-dom';
import { Cover } from './ui/cover';

function AuthPage() {
  return (
    <div className='h-screen w-full bg-neutral-100 dark:bg-black dark:bg-grid-white/[0.01] bg-grid-black/[0.1] p-4 lg:p-14 flex flex-col lg:flex-row justify-center items-center gap-4'>
      
      
      <div className='info-section w-full lg:w-1/2 flex flex-col justify-center items-start p-4'>
        <h1 className='text-5xl md:text-6xl lg:text-8xl logoFont'>
          <Cover>Recover'IT</Cover>
        </h1>
        <p className='text-xl lg:text-2xl logoFont italic text-[#444444] mb-4'>
          Bringing lost items back to you
        </p>
        <p className='text-base lg:text-lg logoFont text-[#5e5e5e] mb-8 lg:mb-16'>
          Lose something on campus? Our Lost and Found app makes it easy to <span className='text-blue-500'>get your stuff back.</span> Just report <span className='text-blue-500'>what you’ve lost</span>, or if you find something, list it here. We’re all about helping you reconnect with your belongings quickly and hassle-free, so nothing important stays lost for long.
        </p>
        <div className='button-wrapper flex flex-row lg:flex-row gap-4 lg:gap-8'>
          <Link to='/login'>
            <button className='button-gen loginBtn w-full lg:w-[150px]'>
              <span className="text">Login</span>
              <span>Login</span>
            </button>
          </Link>
          <Link to='/signup'>
            <button className='button-gen signBtn w-full lg:w-[150px]'>
              <span className="text">Sign Up</span>
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      </div>


      <div className='img-section w-full lg:w-1/2 h-auto flex justify-center items-center'>
        <img className='w-full h-auto max-h-[400px] object-contain' src={logo} alt="Logo" />
      </div>


    </div>
  );
}

export default AuthPage;