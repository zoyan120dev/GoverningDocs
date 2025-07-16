import React from 'react'
import Logo from './Logo';
import { navItems } from '../lib/data/data';

function Moblimenu({ toggleMenu}) {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-gray-100 z-50 p-6 overflow-y-hidden'>
        <div className='flex justify-between items-center pb-6'>
            <Logo/>
            <button className='text-black text-2xl self-end ' aria-label='Close Menu' onClick={toggleMenu}>
                 &times;
            </button>
        </div>

        <div className='space-y-4'>
                {
                    navItems.map(( {links, lable}, i) =>(
                        <a href={links} key={i} className='block text-lg text-accent hover:text-primary transition-colors duration-150'>
                            {lable}
                        </a>
                    ))
                }
            </div>
            
    </div>
  )
}

export default Moblimenu;