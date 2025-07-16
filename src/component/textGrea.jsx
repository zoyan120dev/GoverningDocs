import React from 'react'
import {cn} from "./lib"

export const GradeintText = ({children, className})=>{
  return (
    <span className={cn("bg-gradient-to-b text-[#00D2FF] to-[#059DBE] bg-clip-text leading-[58px]",
    
    className)}>
    
     
    {children}
    
    </span>
  )
}

export default  GradeintText ;