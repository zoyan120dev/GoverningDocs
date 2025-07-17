import React, { useState } from 'react';
import Container from '../Container';
import Title from '../Title';
import { QeutionsAns } from '../lib/data/Quetion';
import { FaqCard } from './FaqCard';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(1); // null means nothing openS

  const handleClick = (i) => {
    setActiveIndex(prev => prev === i ? null : i); // toggle
  };

  return (
    <section className='mt-[50px] sm:mt-20 lg:mt-[100px] xl:mt-[150px] relative'>
      <Container className="max-w-[982px] relative z-10">
        <Title gradient=" Asked Questions">Frequently</Title>
        <div className='space-y-5 mt-10'>
          {
            QeutionsAns.map((a, i) => (
              <FaqCard
                key={i}
                {...a}
                onClick={() => handleClick(i)}
                isActive={activeIndex === i}
              />
            ))
          }
        </div>
      </Container>
      <img src="/faq.png" alt="" className='absolute  -top-[115px] 2xl:-left-[20%]'/>
    </section>
  );
}

export default Faq;
