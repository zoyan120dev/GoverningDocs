import React from 'react'
import Container from '../Container'
import Button from '../Buttoon'

function Hero() {
  return (
    <>
       <section className='xl:pt-[142px] lg:pt-28 md:pt-20 pt-10'>
         <Container className="flex md:justify-end items-center md:gap-0 flex-col-reverse justify-center gap-5 md:flex-row">

        {/* left */}
        <div className='md:space-y-[29px] space-y-[20px]'>
           <h1 className='font-space-grotesk font-bold lg:text-6xl md:text-4xl text-2xl lg:leading-[76px]  md:leading-[60px] max-w-[593px] '>Simplify your real estate document analysis
          </h1>
          <p className='font-semibold max-w-[450px]  xl:max-w-[519px] lg:text-xl md:text-lg text-base'>Streamline, Automate, and Secure Your Business Documents with Ai GoverningDocs</p>
          <Button>Get Started Today</Button>
        </div>
        {/* right */}
        <div>
            <img src="/hero.png" alt="" className='w-[80%] mx-auto md:w-[550px] xl:w-[740px] ' />
        </div>
      </Container>
       </section>
    </>
  )
}

export default Hero