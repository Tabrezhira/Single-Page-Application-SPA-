import React, { useState } from 'react'
import logo from '../../public/Logo.png'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=' container  px-4 md:px-0   mx-auto flex bg-black font-poppins items-center justify-between h-18 xl:h-30 w-full relative'>
      <img className='w-18 h-7 cursor-pointer' src={logo} alt="logo"/>
      {/* Desktop Nav */}
      <nav className=''>
        <ul className='hidden md:flex items-center justify-center text-white gap-14 text-base lg:text-lg font-normal'>
          <li className='cursor-pointer hover:text-[#FA709A]'>Home</li>
          <li className='cursor-pointer hover:text-[#FA709A]'>Portfolio</li>
          <li className='cursor-pointer hover:text-[#FA709A]'>Skills</li>
          <li className='cursor-pointer hover:text-[#FA709A]'>About Me</li>
        </ul>
      </nav>
      <button className='hidden sm:block text-white bg-[#925FF0] cursor-pointer text-base w-35 h-10 rounded'>Contact me</button>
      {/* Mobile Menu Button */}
      <button
        className='sm:hidden text-white focus:outline-none'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <i className={`fas fa-${menuOpen ? 'times' : 'bars'} text-2xl`}></i>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-black z-10 sm:hidden'>
          <ul className='flex flex-col items-center text-white gap-6 py-6 text-base font-normal'>
            <li className='cursor-pointer hover:text-[#FA709A]' onClick={() => setMenuOpen(false)}>Home</li>
            <li className='cursor-pointer hover:text-[#FA709A]' onClick={() => setMenuOpen(false)}>Portfolio</li>
            <li className='cursor-pointer hover:text-[#FA709A]' onClick={() => setMenuOpen(false)}>Skills</li>
            <li className='cursor-pointer hover:text-[#FA709A]' onClick={() => setMenuOpen(false)}>About Me</li>
            <button className='text-white bg-[#925FF0] cursor-pointer text-base w-35 h-10 rounded mt-4' onClick={() => setMenuOpen(false)}>Contact me</button>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Nav