import React from 'react';
import logo from '../../public/logo.svg';
import { Link } from 'react-router-dom';
import { Cover } from './ui/cover';
import { AuroraBackground,  } from "./ui/aurora-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";
import { ZIndex } from '@tsparticles/engine';
function AuthPage() {


  const words = `Lose something on campus? Our Lost and Found app makes it easy to get your stuff back. Just report what you’ve lost, or if you find something, list it here. We’re all about helping you reconnect with your belongings quickly and hassle-free, so nothing important stays lost for long.`;
 


  return (
    <AuroraBackground className={'z-50'}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center  z-99"
      >
    <div className='h-screen w-full bg-neutral-100 dark:bg-black dark:bg-grid-white/[0.01] bg-grid-black/[0.1] p-4 lg:p-14 flex flex-col lg:flex-row justify-center items-center gap-4'>
      
      
      <div className='info-section w-full lg:w-1/2 flex flex-col justify-center items-start p-4'>
        <h1 className='text-5xl md:text-6xl lg:text-8xl logoFont'>
          <Cover>Recover'IT</Cover>
        </h1>
        <p className='text-xl lg:text-2xl logoFont italic text-[#444444] mb-4'>
          Bringing lost items back to you
        </p>
      
        <TextGenerateEffect className="" words={words} />
        
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
  
    </motion.div>
    </AuroraBackground>
  );
}

export default AuthPage;