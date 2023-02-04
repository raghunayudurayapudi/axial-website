import React from 'react'
import css from './styles.module.css'

const Quote = () => {
  return (
    <div className='mt-[140px] items-center justify-center flex flex-col-reverse lg:flex-row px-[20px] md:px-[40px] 
    lg:px-[100px] gap-[120px]'>
        <div className='text-[22px] max-w-[391px] md:max-w-[533px] mx-auto  md:text-[32px] text-[#032246]
         leading-[147%] lg:leading-[46px] flex-1 font-[600]'>
            Whether you&apos;re a young business owner or a seasoned CFO, this guide will help you
            understand the fundamentals of finance management.
            <br /><br />
            Finance management is an important part of business management. As such, you need to know the basic
            principles and principles of finance. This article covers it.
        </div>
        <div className={`${css.quotedText} max-w-[253px] flex-1 text-[23px] lg:text-[30px] relative font-[700] 
        md:max-w-[484px] mx-auto `}>
            Quality means doing it right when no one is looking
        </div>
    </div>
  )
}

export default Quote