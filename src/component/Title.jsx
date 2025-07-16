import React from 'react';
import { cn } from './lib';
import GradientText from './textGrea';

function Title({children, className, gradient}) {
  return (
    <h1 className={cn("font-space-grotesk lg:text-[46px] md:text-[35px]  lg:leading-[58px] md:leading-[45px] font-bold text-2xl",

      className
    )}>
      {children} <GradientText>{gradient}</GradientText>
    </h1>
  );
}

export default Title;