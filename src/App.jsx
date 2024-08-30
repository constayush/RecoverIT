import React from 'react'
import AuthPage from '../src/components/AuthPage'
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignPage from './components/SignPage';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<AuthPage/>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignPage />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App;