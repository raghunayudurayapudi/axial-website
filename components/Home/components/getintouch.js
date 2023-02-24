import React, { Fragment } from 'react'
import Checkmark from "../assets/checkmark.svg"
import css from "./styles.module.css"

const infoTexts = [
  "Quality is out top priority",
  "Large team of experts",
  "Experience since 2020",
  "Leader in the market",
]

const GetInTouch = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='mt-[200px] bg-[#F5ECEA] flex-col flex lg:flex-row' id='getintouch'>
        <form className='p-[53px_40px] flex-1' onSubmit={onSubmit}>
            <div className={`${css.bigShoulders} text-[#032246] text-[33px] font-[700]`}>GET IN TOUCH</div>
            <input className='w-[100%] border-b border-b-[#9B675C] pb-[17px] mt-[54px] bg-transparent
              focus:outline-none active:outline-none text-[19px] text-[#9B675C] placeholder:text-[#9B675C]'
              placeholder='First Name'
            />
            <input className='w-[100%] border-b border-b-[#9B675C] pb-[17px] mt-[54px] bg-transparent
              focus:outline-none active:outline-none text-[19px] text-[#9B675C] placeholder:text-[#9B675C]'
              placeholder='Last Name'
            />
            <input className='w-[100%] border-b border-b-[#9B675C] pb-[17px] mt-[54px] bg-transparent
              focus:outline-none active:outline-none text-[19px] text-[#9B675C] placeholder:text-[#9B675C]'
              placeholder='Company'
            />
            <input className='w-[100%] border-b border-b-[#9B675C] pb-[17px] mt-[54px] bg-transparent
              focus:outline-none active:outline-none text-[19px] text-[#9B675C] placeholder:text-[#9B675C]'
              placeholder='Company Email'
            />
            <button className={`mt-[62px] bg-[rgba(215,176,168,0.27)] font-[700] text-[#84584D] text-[18px]
            px-[30px] py-[13px] rounded border border-[#D7B0A8] ${css.bigShoulders}`}type="submit">SUBMIT</button>
        </form>

        <div className='hidden md:flex md:flex-1 justify-center border-l border-[#D7B0A8]'>
          <div className={`mt-[60px] lg:mt-[135px] ${css.checkmark} mb-[30px] lg:mb-0`}>
            {infoTexts.map((text) => (
              <div key={text} className="flex items-center gap-[25px] mt-[92px] first-of-type:mt-0">
                <div className='relative z-10'><Checkmark /></div>
                <div className='text-[29px] font-[600] text-[#5F453E]'>{text}</div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default GetInTouch