import React from 'react'
import Container from '../Container';
import ProblemSalutionsHeader from './ProblemSalutionsHeader';
import { Problmessdata } from '../lib/data/cardata';

function ProblemSalutions() {
  return (
  <>
     <section className='pt-32'>
      <Container>
       <ProblemSalutionsHeader/>
       {/* Problems Salutions Grids */}
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-7 '>
         {/* Problems Salutions cards*/}
         {
          Problmessdata.map((problem , i) => (
              <div className=' h-[349px] rounded-[20px] p-5 space-y-5 shadow-card mt-5 hover:bg-primary transition-all duration-150  group cursor-pointer'>
              <div className='bg-primary size-[58px] rounded-full flex justify-center items-center'>
                <img src={problem.img} alt="" />
              </div>
              <h1 className='font-bold text-lg text-secondary leading-none group-hover:text-white'>{problem.title}</h1>
              <div className='text-accent space-y-2.5 group-hover:text-white'>
                <p>{problem.dis1}</p>
               <p>{problem.dis2}k</p>
              </div>
         </div>
          ))
         }
       </div>

      </Container>
     </section>
      
  </>
  )
}

export default ProblemSalutions;