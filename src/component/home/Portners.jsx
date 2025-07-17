import React from 'react'
import Container from '../Container'
import Title from '../Title'
import { portImg } from '../lib/data/PortImg'

function Portners() {
  return (
   <section >
      <Container className="bg-[#E6F9FD] max-w-[1276px]  py-[50px]  px-3  Rounded-[20px]">
              <Title gradient="Partners" className="text-center">
                  Our
              </Title>
              <div className='pt-10 flex justify-center items-center flex-wrap  gap-x-[30px] gap-y-[28px]'>
                {
                    portImg.map((index, i) =>(
                         <div key={i} className='w-[274px] bg-white border border-[#D6D6D6] rounded-xl h-[101px] flex justify-center items-center'>
                       <img src={index.img} alt="" />
                      </div>
                    ))
                }
              </div>
      </Container>
   </section>
  )
}

export default Portners