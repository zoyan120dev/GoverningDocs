import React, { useState } from 'react'
import Title from '../Title';
import Container from '../Container';
import { cn } from '../lib';
import { Reviewcardas } from '../lib/data/ReviewCard';

function Rivew() {

  //  Step 1: Active card index (default = 0)
  const [active, setActive] = useState(1);

  return (
    <>
      <section className='xl:my-[150px] lg:my-[100px] md:my-[80px] my-12 bg-[#f6f6f6] py-10 '>
        <Container>
          <Title gradient="Our Client" className="text-center">Reviews From</Title>
          <div className='pt-10 flex justify-center items-center xl:gap-[93px]  lg:gap-[80px] gap-[50px] flex-col md:flex-row '>

            {/*  Step 2: Vertical line showing active position */}
            <div className='bg-[#E2DED8] w-[5px] rounded-[50px] hidden md:flex'>
              <div className='flex flex-col justify-between items-center gap-[15px]'>
                {
                  Reviewcardas.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        'w-[5px] rounded-[20px] h-[92px]',
                        i === active ? 'bg-gradient-primary' : 'bg-transparent'
                      )}
                    ></div>
                  ))
                }
              </div>
            </div>

            {/*  Step 3: Review Cards */}
            <div className='space-y-[15px] flex-grow'>
              {
                Reviewcardas.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setActive(i)} 
                    className={cn(
                      'flex justify-start items-center border-primary rounded-[20px] border xl:w-[491px] lg:w-[400px] w-full py-[1px] px-5 gap-[13px] cursor-pointer',
                      i === active && 'bg-gradient-primary text-white'
                    )}
                  >
                    <img src={item.img} alt="" className='rounded-full' />
                    <div className='font-semibold text-base text-accent'>
                      <h4>{item.client}</h4>
                      <p>{item.clints}</p>
                    </div>
                  </div>
                ))
              }
            </div>

            {/*  Step 4: Review Details */}
            <div className='space-y-[30px]'>
              <h1 className='font-bold text-[30px]'>{Reviewcardas[active].title}</h1>
              <div className='flex items-center gap-5'>
                {[...Array(Reviewcardas[active].rating || 5)].map((_, i) => (
                  <img key={i} src="/Vector.png" alt="" />
                ))}
              </div>
              <p className='text-base text-accent max-w-[500px]'>
                {Reviewcardas[active].desc}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Rivew;