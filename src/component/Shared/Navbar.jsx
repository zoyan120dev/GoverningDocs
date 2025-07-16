import React, { useState } from 'react'
import Container from '../Container';
import Logo from './Logo';
import Button from '../Buttoon';
import { navItems } from '../lib/data/data';
import Moblimenu from './moblie';

function Navbar() {

   const [isMenuOpen, setMenuOpen]  =  useState(false);
   const  toggleMenu = () => setMenuOpen((pev) => !pev)
  return (
    <nav className='py-5 '>
        <Container>
            <div className='flex justify-between items-center gap-2.5 xl:px-[30px] sm:px-5 sm:py-3.5 py-2 xl:py-5 bg-white rounded-full '>
                <Logo/>
            <div className='hidden lg:flex justify-center items-center xl:gap-4 gap-3'>
              {
                navItems.map(({lable, links}, i) => (
                     <a href={links} className='text-accent xl:text-base sm:text-sm hover:text-primary transition-colors duration-150 cursor-pointer'>{lable}</a>
                ))
              }
            </div>
            <div className='flex justify-center items-center gap-2.5'>
              <button className='lg:hidden block text-accent' onClick={toggleMenu }>
                 <div className='space-y-1'>
                   <span className='block w-6 h-0.5 bg-black'></span>
                  <span className='block w-6 h-0.5 bg-black'></span>
                  <span className='block w-6 h-0.5 bg-black'></span>
                 </div>
              </button>
              <Button>Get Started Today</Button>
            </div>
            </div>
            {isMenuOpen && <Moblimenu toggleMenu={toggleMenu}/>}
        </Container>
       
    </nav>
  )
}

export default Navbar;