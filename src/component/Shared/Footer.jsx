import React from 'react'
import Container from '../Container';
import { navItems } from '../lib/data/data';


const socialIcone = [
  {
    slink:<i class="fa-brands fa-facebook-f"></i>,
    url:""
  },

  {
    slink:<i class="fa-brands fa-instagram"></i>,
    url:""
  },

  {
    slink:<i class="fa-brands fa-linkedin-in"></i>,
    url:""
  },

  {
    slink:<i class="fa-solid fa-x"></i>,
    url:""
  },
]
function Footer() {
  return (
    <>
      
      <footer className='lg:pt-24 pt-5'> 
          <Container>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-2.5 '>
              <h1 className='font-space-grotesk xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-semibold'>Ai GoverningDocs</h1>
              <div className='hidden lg:flex justify-center items-center gap-3 xl:xl-4'>
                 {
                      navItems.map(({lable, links}, i) => (
                    <a href={links} className='text-accent xl:text-base sm:text-sm hover:text-primary transition-colors duration-150 cursor-pointer'>{lable}</a>
                    ))
                    }
              </div>
              <div className='flex justify-center items-center gap-2.5 py-5'>
                 {
                  socialIcone.map(({slink, url}, i) => (
                     <a href={url} key={i} className='text-3xl bg-[#00D2FF] size-[36px] flex justify-center items-center p-6 rounded-full text-[#059DBE] hover:bg-blue-500 transition-all duration-150 hover:text-white'>{slink}</a>
                  ))
                 }
              </div>
            </div>

            <div className=' footer-border-color  border-t-2  md:mt-[50px] mt-5 lg:mt-[106px] py-4'>
             <p className='text-lg text-center leading-[18px] text-[#111111]'>  Ai GoverningDocs 2024. All Rights Reserved.</p>
            </div>
          </Container>
      </footer>
    </>
  )
}

export default Footer;