import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ChevronRight from '../../../assets/chevron_right.svg'
import Checkmark from '../../../assets/checkmark.svg'

const services = [
    {
      name: 'ADVISORY',
      href: '/services/advisory'
    },
    {
      name: 'SUPPORT',
      href: '/services/support'
    },
    {
      name: 'MIGRATION',
      href: '/services/migration'
    },
    {
      name: 'TALENT',
      href: '/services/talent'
    }
]

const outcomes = [
  {
    name: 'Business Continuity Assurance',
    description: 'Services that support improving business stability and performance by helping your company plan for and manage ongoing product releases.'
  },
  {
    name: 'Strategic alliances',
    description: 'Enable governance policies for Kubernetes clusters that can be coded and maintained as native objects within the container platform'
  },
  {
    name: 'Data Analytics',
    description: 'Patented tool that enables digital signing of OCI images with decentralized signing authority and ability to sign with extensible attributes'
  },
  {
    name: 'Cloud Management',
    description: 'Multi-cloud capable container platform with an emphasis on ease of Day2 operations, security, and governance. Provides the ability to manage'
  }
]

const features = [
  "Management Advice Service",
  "Strategy Advice Service",
  "Operations Advice Service",
  "Financial Advice Service",
  "HR Advice Service"
]

const advantages = [
  "Reliable and Objective Advice",
  "Higher Profits",
  "Streamlined Operations",
  "Expand the Business",
  "Leader in the market"
]

const Advisory = () => {
  const router = useRouter()
  const pathname = router.pathname
  const url = pathname.split("/").pop()

  return (
    <>
        <div className='bg-black mt-[-252px] h-[252px] w-full'></div>
        <div className='mt-[40px] lg:mt-[80px] grid grid-cols-2 sm:grid-cols-4 justify-items-center px-[10px] '>
            {services.map((service) => (
                <Link key={service.name} passHref href={service.href}>
                    <div className={`${url === service.name.toLowerCase() ? 'bg-[#F5ECEA] text-[#84584A]' : ''}
                    p-[15px_25px] lg:px-[31px] text-[16px] md:text-[23px] font-[700] rounded-[10px] 
                    cursor-pointer w-max tracking-[2px] lg:tracking-[4px]`}>{service.name}</div>
                </Link>
            ))}
        </div>

        <div className='flex flex-col lg:flex-row mt-[50px] lg:mt-[100px] px-[28px] lg:px-[100px] gap-[50px_120px] 
        lg:items-center '>
            <div className='text-[#032246] lg:flex-1'>
                <div className='text-[30px] lg:text-[42px] font-[700] text-center leading-[43px] '>We provide a wide range of advisory management and services.</div>
                <div className='text-[20px] lg:text-[28px]font-[500] text-center mt-[40px] '>Improve your business with out advisory service with most experience  Large team of experts</div>
            </div>
            <div className='lg:flex-1 h-[357px] relative'>
                <Image src="/serviceDetails1.png" alt="" layout="fill" objectFit="cover" />
            </div>
        </div>

        <div className='mt-[90px] lg:mt-[120px] text-center text-[39px] lg:text-[48px]
         text-[#032246] px-[115px] font-[700] leading-[30px]'>Business outcomes</div>

         <div className='mt-[50px] lg:mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[86px_100px]
         px-[20px] md:px-[40px] xl:px-[100px]'>
          {outcomes.map((outcome) => (
            <div key={outcome.name} className='bg-[#F5ECEA] p-[30px]'>
              <div className='text-center text-[25px] lg:text-[30px] font-[600] leading-[30px] text-[#032246]'>{outcome.name}</div>
              <div className='text-[#84584D] text-[18px] lg:text-[25px] font-[400] leading-[24px] mt-[25px]'>{outcome.description}</div>
            </div>
          ))}
         </div>

        <div className='lg:hidden  text-[40px] lg:text-[50px] font-[700] text-center mt-[80px]'>Features</div>
        <div className='flex flex-col-reverse lg:flex-row mt-[50px] lg:mt-[100px] px-[16px] lg:px-[100px] gap-[50px_120px] '>
          <div className='flex-1 text-[#032246]'>
            <div className='hidden lg:block text-[40px] lg:text-[50px] font-[700]'>Features</div>
            <div className='flex flex-col gap-[20px] w-max m-auto lg:ml-0 lg:mr-0 mt-[30px] '>
              {features.map((feature) => (
                <div key={feature} className='flex gap-[27px] items-center '>
                  <div><ChevronRight /></div>
                  <div className='text-[21px] text-[#032246] font-[600] lg:text-[26px]'>{feature}</div>
                </div>
              ))}
            </div>

          </div>
          <div className='lg:flex-1 h-[357px] relative'>
            <Image src="/serviceDetails2.png" alt="" layout='fill' objectFit='cover' />
          </div>
        </div>

        <div className='mt-[100px] bg-[#F5ECEA] px-[20px] lg:px-[60px] xl:px-[100px] pb-[100px]  '>
          <div className='pt-[50px] text-center lg:text-left text-[44px] text-[#84584D] font-[700]  '>Advantages</div>
          <div className='flex flex-col lg:flex-row mt-[50px] gap-[40px_20px] items-center'>
            <div className='relative lg:flex-1 h-[216px] sm:h-[432px]'>
              <Image src="/serviceDetails3.png" alt="Advantages" layout='fill' objectFit='cover' />
            </div>

            <div className='flex-1'>
              <div className='flex flex-col gap-[35px] w-max m-auto'>
                {advantages.map((adv) => (
                  <div key={adv} className='flex gap-[24px]'>
                    <div><Checkmark /></div>
                    <div className='text-[#84584D] text-[22px] lg:text-[29px] font-[600] ' >{adv}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Advisory