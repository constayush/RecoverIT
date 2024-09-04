// import React from 'react'
// import logo from '../../public/logo.svg'
// import { Link } from 'react-router-dom'
// import loginPage from './LoginPage'
// import signUpPage from './SignPage'
// import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
// function AuthPage() {
//   return (


//       <div className='px-8 flex lg:flex-row flex-col h-full w-full bg-[#F5F5F5]'>

//         <div className='w-full h-1/2 lg:w-1/2 lg:h-full '>
//           <h1 className='text-[2rem] lg:text-[6rem] logoFont text-[#1E212D]'>Recover'IT</h1>
//           <p className='p-2 text-[1rem] lg:text-[1.5rem] w-[100%] text-[#1E212D]'>Lose something on campus? Our Lost and Found app makes it easy to get your stuff back. Just report what you’ve lost, or if you find something, list it here. We’re all about helping you reconnect with your belongings quickly and hassle-free, so nothing important stays lost for long.</p>


//           <div className='flex gap-[2rem] ml-1 mt-[3rem]'>

//           </div>
//         </div>


//         <div className='w-full h-1/2  lg:w-1/2 lg:h-full'>

//           <img className='w-full h-full' src={logo} />

//         </div>


//       </div>



//   )
// }

// export default AuthPage

import React from 'react'
import logo from '../../public/logo.svg'
import { Link } from 'react-router-dom'
import loginPage from './LoginPage'
import signUpPage from './SignPage'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { Cover } from './ui/cover'

function AuthPage() {
  return (


    <div className='h-[100vh] w-full bg-neutral-100 dark:bg-black dark:bg-grid-white/[0.01] bg-grid-black/[0.1] p-8 lg:p-14 flex lg:flex-row flex-col justify-center items-center'>


      <div className='info-section w-full h-[50%]  lg:w-[50%] lg:h-full'>

        <h1 className='text-[3rem] lg:text-[6rem] logoFont'><Cover >Recover'IT</Cover></h1>
        <p className='text-[1.5rem] lg:text-[2.1rem] logoFont italic text-[#444444] mb-4'> Bringing lost items back to you</p>
       
        <p className='text-[.8rem] lg:text-[1.5rem] logoFont  text-[#5e5e5e] mb-8 lg:mb-16'>Lose something on campus? Our Lost and Found app makes it easy to <span className='text-blue-500'>get your stuff back.</span> Just report <span className='text-blue-500'>what you’ve lost</span>, or if you find something, list it here. We’re all about helping you reconnect with your belongings quickly and hassle-free, so nothing important stays lost for long.</p>


        <div className='button-wrapper flex gap-8'>
          <Link to='/login'><button className='button-gen loginBtn  w-[150px]'><span class="text">Login</span><span>Login</span></button></Link>
          <Link to='/signup' ><button className='button-gen signBtn w-[150px]'><span class="text">Sign Up</span><span>Sign Up</span></button></Link>
       
        </div>


      </div>



      <div className='img-section w-full h-[50%]  lg:w-[50%] lg:h-full'><img className='w-full h-full' src={logo} /></div>


    </div>





  )
}

export default AuthPage


