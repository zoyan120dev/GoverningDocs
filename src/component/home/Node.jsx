import React from 'react'
import Container from '../Container';
import Button from '../Buttoon';

function  Nodearea() {
  return (
      <section className='mt-[50px] sm:mt-20 lg:mt-[100px] px-2.5 '>
        <Container className="bg-gradient-primary rounded-[20px] md:py-14  py-10 md:pr-16  pr-6 md:pl-10 pl-6 text-white flex justify-between items-center gap-5 md:gap-2.5 flex-col md:flex-row">

         <div className=' space-y-[20px] md:space-y-[30px]'>
            <h2 className='lg:text-[46px]   md:text-[35px] text-2xl font-bold text-center py-5  md:leading-[45px] lg:leading-[64px] text-white sm:max-w-[500px] max-w-full lg:max-w-[566px]'>Ready to Simplify Your Document Management?</h2>
         <p className='font-bold md:text-base text-sm max-w-[500px] '>Sign up today and experience the power of AI-driven legal documentation.</p>
         </div>
         <div>
            <Button className="bg-white text-secondary min-w-fit">Get Started Now</Button>
         </div>
        </Container>
      </section>
  )
}

export default Nodearea;