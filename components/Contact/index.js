import React from 'react'
import Image from 'next/image'
import css from './styles.module.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={`relative mt-[-252px] min-h-[800px] ${css.background}`}>
        <Image
            src="/contactBg.png"
            alt="contact"
            layout='fill'
            objectFit='cover'
            className='absolute h-full w-full left-0 top-0'
        />

        <form className='pt-[307px] pb-[80px] relative z-10 text-white'>
          <div className='p-[40px] md:p-[85px] mx-auto max-w-full w-[845px] bg-[rgba(0,0,0,0.47)] rounded-none
            md:rounded-[15px] backdrop-blur-md'>
            <div className={`text-white font-[700] text-[35px] sm:text-[44px] text-center ${css.bigShoulders}`}>
                GET IN TOUCH WITH US
            </div>

            <div className='flex flex-col sm:flex-row gap-[48px] mt-[63px]' onSubmit={handleSubmit}>
              <div className='flex-1'>
                <input className='pb-[17px] bg-transparent border-b border-b-white placeholder:text-white
                  focus:outline-none active:outline-none w-full'
                  name='firstName'
                  placeholder='First Name'
                />
              </div>
              <div className='flex-1'>
                <input className='pb-[17px] bg-transparent border-b border-b-white placeholder:text-white
                  focus:outline-none active:outline-none w-full'
                  name='lastName'
                  placeholder='Last Name'
                />
              </div>
            </div>

            <div>
              <input className='pb-[17px] bg-transparent border-b border-b-white placeholder:text-white
                focus:outline-none active:outline-none w-full mt-[54px]'
                name='email'
                placeholder='Email'
              />
            </div>
            <div>
              <input className='pb-[17px] bg-transparent border-b border-b-white placeholder:text-white
                focus:outline-none active:outline-none w-full mt-[54px]'
                name='phone'
                placeholder='Phone No.'
              />
            </div>

            <div>
              <textarea className='pb-[17px] bg-transparent border-b border-b-white placeholder:text-white
                focus:outline-none active:outline-none w-full mt-[54px] resize-none h-[100px]'
                name='message'
                placeholder='Message'
              />
            </div>

            <button className={`bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-[21px] font-[500] tracking-[0.2em]
            border rounded border-[#D7B0A8] p-[15px_31px] mt-[70px] ${css.bigShoulders}`} type='submit'>
              SUBMIT
            </button>
          </div>
        </form>
    </div>
  )
}

export default Contact