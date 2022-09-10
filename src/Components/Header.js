import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className='mb-36 relative'>
      <div className='flex justify-between p-8 fixed w-full top-0 text-gray-600 bg-blue-50 z-40 font-averia'>
        <div className='text-3xl font-large'>
            <NavLink to="/" exact="true" className='relative'>
              <img src='/images/schooling.png' alt='logoImg' className='absolute w-[75px] h-16 -top-5 left-18 -z-10'/>


              <span className='ml-8'><strong className='mr-[18px]'><span className='-ml-1'>S</span></strong>chooling</span>
            </NavLink>
        </div>
        <div className='text-xl'>
            <NavLink to="/" exact="true" className='mr-10 hover:text-yellow-600 transition duration-150'>Home</NavLink>
            <NavLink to="/courses" exact="true" className='mr-10 hover:text-yellow-600 transition duration-150'>Programs</NavLink>
            <NavLink to="/students" exact="true" className='mr-10 hover:text-yellow-600 transition duration-150'>Students</NavLink>
            <NavLink to="/teachers" exact="true" className='mr-10 hover:text-yellow-600 transition duration-150'>Mentors</NavLink>
            <NavLink to="/about" exact="true" className='mr-10 hover:text-yellow-600 transition duration-150'>About</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header

