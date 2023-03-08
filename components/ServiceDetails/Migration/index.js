import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ChevronRight from '../../../assets/chevron_right.svg'
import { services } from '../common'
import { HeaderContext } from 'contexts/HeaderContext'

const capabilities = [
  {
    name: 'Infrastructure Migration',
    image: '/infrastructure-migration.png'
  },
  {
    name: 'Platform Migration',
    image: '/platform-migration.png'
  },
  {
    name: 'Database Migration',
    image: '/database-migration.png'
  },
  {
    name: 'Application Migration',
    image: '/application-migration.png'
  },
]

const features = [
  "Accelarated Deployment",
  "Simplified Infrastructure",
  "Efficient Monitoring",
  "Improvised Security",
  "Zeroing-down Data Centers",
  "Investment-Winning Services",
  "Enhanced Key Metrics Logging"
]

const advantages = [
  "Building roadmap, strategy and executing journey to cloud Re-architecting, re-platforming and operational support for databases and applications",
  "Round the clock assistance in all stages of cloud migration process",
  "Minimizing error and glitches through addressing migration requirements and addressing infrastructure needs",
]

const Migration = () => {
  const router = useRouter()
  const pathname = router.pathname
  const url = pathname.split("/").pop()
  const {menuHeight} = useContext(HeaderContext)

  return (
    <>
        <div className='bg-black w-full' style={{height: menuHeight+252, marginTop: -(menuHeight+252)}}></div>
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
                <div className='text-[30px] lg:text-[42px] font-[700] text-center leading-[43px] '>Why Cloud Migration is Important to Business Growth?</div>
                <div className='text-[20px] lg:text-[28px]font-[500] text-center mt-[40px] '>
                    Cloud Migration is a process whereby 
                    an organization’s digital assets, resources and services or applications are deployed in the cloud, where the 
                    migrated assets cannot be accessed beyond the cloud’s firewall.
                    With smart features and an unending array of business benefits, the Cloud computing trend has picked off in recent 
                    years. Gone are the days when ‘migration to the cloud’ was still a concept for debate.
                </div>
            </div>
            <div className='lg:flex-1 h-[357px] relative'>
                <Image src="/serviceDetails1.png" alt="" layout="fill" objectFit="cover" />
            </div>
        </div>

        <div className='mt-[90px] lg:mt-[120px] text-center text-[39px] lg:text-[48px]
         text-[#032246] px-[115px] font-[700] leading-[30px]'>Our Capabilities</div>

         <div className='mt-[50px] lg:mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[86px_100px]
         px-[20px] md:px-[40px] xl:px-[100px]'>
          {capabilities.map((cap) => (
            <div key={cap.name} className='bg-[#F5ECEA] p-[30px]'>
              <div className='relative text-center'><Image src={cap.image} alt={cap.image} objectFit='cover' width="100%" height={100} /></div>
              <div className='text-center text-[25px] mt-[15px] lg:text-[30px] font-[600] leading-[30px] text-[#032246]'>{cap.name}</div>
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
          <div className='lg:flex-1 min-h-[357px] relative'>
            <Image src="/serviceDetails2.png" alt="" layout='fill' objectFit='cover' />
          </div>
        </div>

        <div className='mt-[100px] bg-[#F5ECEA] px-[20px] lg:px-[60px] xl:px-[100px] pb-[100px]  '>
          <div className='pt-[50px] text-center lg:text-left text-[44px] text-[#84584D] font-[700]  '>How Axial Helps?</div>
            <div className='text-[#84584D] text-[18px] lg:text-[22px] mt-[18px]'>
                With more than a decade long-track of being one of the leading cloud migration consulting service providers, 
                Axial has helped deliver friendly and time-saving cloud migration solutions to a varied range of customers.
            </div>
            <div className='text-[#84584D] text-[18px] lg:text-[22px] mt-[18px]'>
                Apart from our tried and tested, proven methods, here are some ways through which we help you restructure your processes:
            </div>
            <ul className='flex flex-col gap-[15px] mt-[35px] list-disc '>
                {advantages.map((adv) => (
                    <li key={adv}>
                        <div className='text-[#84584D] text-[18px] lg:text-[22px] font-[600] ' >{adv}</div>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Migration