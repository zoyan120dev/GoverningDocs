import React from 'react'
import Title from '../Title'

 export const ProblemSalutionsHeader = ()=> {
  return (
    <div className='flex justify-between items-center gap-2 '>
      <Title gradient="Solutions">Problem &</Title>
      <div className='flex justify-center items-center gap-2.5 sm:gap-[15px]'>
         <button className='bg-white size-9 sm:size-10 rounded-full text-primary cursor-pointer flex justify-center items-center shadow-arrow-btn hover:text-red-400 transition-colors '> <i class="fa-solid fa-arrow-left"></i></button>
         <button className='bg-gradient-primary size-9 sm:size-10 rounded-full text-white cursor-pointer flex justify-center items-center shadow-arrow-btn hover:text-red-400 transition-colors '><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  )
}

export default ProblemSalutionsHeader;