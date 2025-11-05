import React from 'react'
// import Features from './Features'
import newlogo from './assets/newlogo.png'

const Headder = () => {
  return (
    <section className='header-section flex justify-between items-center p-4'>
      
      <img className='logo w-[50px]' src={newlogo} alt="logo" />

      <nav className="flex space-x-10">
        <a href="#features">Features</a>
        {/* <a href="#why">Why </a> */}
        <a href="#how_works">How It Works</a>
        {/* <a href="#Demo">Demo </a> */}
      </nav>

      <div className="flex space-x-9">
        <button>Compiler</button>
        <button className='login-button'>Login</button>
        <button className='signup-button'>Sign Up</button>
      </div>

    </section>
  )
}

export default Headder
