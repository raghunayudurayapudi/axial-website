import React, { useState } from 'react'
import Image from 'next/image'
import { writeContactUsData } from 'firebaseApp'
import Loader from 'components/Loader'
import css from './styles.module.css'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: ""
}

let timer = null

const Contact = () => {
  const [values, setValues] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    await writeContactUsData(values)
    setLoading(false)
    setValues({...initialState})

    if(timer) clearTimeout(timer)
    setShowNotification(true)
    timer = setTimeout(() => {
      setShowNotification(false)
      timer = null
    }, 5000)
  }

  const handleChange =  (e) => {
    const {name, value} = e.target;
    setValues(prev => ({...prev, [name]: value}))
  }

  return (
    <div className={`relative mt-[-252px] min-h-[800px] ${css.background}`}>
        <Image
            src="/contactBg.png"
            alt="contact"
            layout='fill'
            objectFit='cover'
            className='absolute top-0 left-0 w-full h-full'
        />

        <form className='pt-[307px] pb-[80px] relative z-10 text-white' onSubmit={handleSubmit}>
          <div className='p-[40px] md:p-[85px] mx-auto max-w-full w-[845px] bg-[rgba(0,0,0,0.47)] rounded-none
            md:rounded-[15px] backdrop-blur-md'>
            <div className={`text-white font-[700] text-[35px] sm:text-[44px] text-center ${css.bigShoulders}`}>
                GET IN TOUCH WITH US
            </div>

            {showNotification && <div className='text-white py-[14px] mt-[15px] text-center bg-[#28A745] font-[500] rounded-md'>
              Form Submitted
            </div>}

            <div className='flex flex-col sm:flex-row gap-[48px] mt-[50px]' onSubmit={handleSubmit}>
              <div className='flex-1'>
                <input className='pb-[17px] bg-transparent border-b border-b-white placeholder:text-white
                  focus:outline-none active:outline-none w-full'
                  name='firstName'
                  placeholder='First Name'
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>
              <div className='flex-1'>
                <input className='pb-[17px] bg-transparent border-b border-b-white placeholder:text-white
                  focus:outline-none active:outline-none w-full'
                  name='lastName'
                  placeholder='Last Name'
                  onChange={handleChange}
                  value={values.lastName}
                />
              </div>
            </div>

            <div>
              <input className='pb-[17px] bg-transparent border-b border-b-white placeholder:text-white
                focus:outline-none active:outline-none w-full mt-[54px]'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div>
              <input className='pb-[17px] bg-transparent border-b border-b-white placeholder:text-white
                focus:outline-none active:outline-none w-full mt-[54px]'
                name='phone'
                placeholder='Phone No.'
                onChange={handleChange}
                value={values.phone}
              />
            </div>

            <div>
              <textarea className='pb-[17px] bg-transparent border-b border-b-white placeholder:text-white
                focus:outline-none active:outline-none w-full mt-[54px] resize-none h-[100px]'
                name='message'
                placeholder='Message'
                onChange={handleChange}
                value={values.message}
              />
            </div>

            <button className={`bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-[21px] font-[500] tracking-[0.2em]
            border rounded border-[#D7B0A8] flex justify-center py-[15px] mt-[70px] w-[175px] ${css.bigShoulders}`} type='submit'>
              {loading ? <Loader /> : "SUBMIT"}
            </button>
          </div>
        </form>
    </div>
  )
}

export default Contact