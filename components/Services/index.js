import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import css from './styles.module.css'

const services = [
  {
    name: 'ADVISORY',
    description: 'Our skilled experts provide quality advisory services covering several use cases',
    image: "/advisoryBg.png",
    href: '/services/advisory'
  },
  {
    name: 'SUPPORT',
    description: 'We also offer continuous maintenance services, including optimizing',
    image: "/supportBg.png",
    href: '/services/support'
  },
  {
    name: 'MIGRATION',
    description: 'We help your team investigate compatibility anywhere',
    image: "/migrationBg.png",
    href: '/services/migration'
  },
  {
    name: 'TALENT',
    description: 'Our team will help get your business processes off ground by setting up custom sales',
    image: "/talentBg.png",
    href: '/services/talent'
  }
]

const Services = () => {
  return (
    <div className='bg-black mt-[-252px] pb-[25px]'>
      <div className='pt-[255px] relative z-10 px-[23px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5'>
      {services.map((service) => (
        <div key={service.name} className="relative h-[520px] lg:h-[670px] after:absolute after:content-[''] after:w-full 
        after:h-full after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.7)] ">
          <Image src={service.image} alt={service.name} layout="fill" objectFit='cover' className='absolute top-0 left-0' />
          <div className={`text-center text-[44px] mt-[120px] lg:mt-[150px] relative z-[5] text-white ${css.bigShoulders}`}>
            {service.name}
          </div>
          <div className='mt-[30px] text-[20px] text-[#C99B85] relative z-[5] h-[80px] text-center px-[22px]'>
            {service.description}
          </div>

          <div className='mt-[50px] lg:mt-[85px] flex justify-center relative z-[5]'>
            <Link href={service.href} passHref>
              <div className='text-[21px] text-[#E4C6BE] p-[15px_31px] bg-[rgba(255,255,255,0.1)]
            rounded tracking-[0.1em] xl:tracking-[0.2em] cursor-pointer backdrop-blur-sm font-[500]'>KNOW MORE</div>
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Services