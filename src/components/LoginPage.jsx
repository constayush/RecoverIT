import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Home from './Home';
import AuthPage from './AuthPage';

function LoginPage() {
  let [isLoginValid, setIsLoginValid] = useState(true);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = () => {
    // Perform login validation logic here
    if (isLoginValid) {
      navigate('/home'); // Redirect to Home if login is valid
    } else {
      setIsLoginValid(false); // Show AuthPage if login is invalid
    }
  };

  const handleBack = () => {navigate('/'); }

  return (
    <>
     
        <button className='button-86 loginBtn' onClick={handleLogin}>Login</button>
        <button className='button-86 loginBtn' onClick={handleBack}>Back</button>
      
    </>
  );
}

export default LoginPage;
