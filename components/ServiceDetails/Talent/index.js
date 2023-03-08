import React, { useContext } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from "next/router"
import { HeaderContext } from 'contexts/HeaderContext'
import {services} from '../common'
import TriangleSvg from './assets/triangleLogo.svg'
import SmilySvg from "./assets/smily.svg"

const features = [
    {
        name: 'In It With You',
        description: 'We source and retain the most sought-after talent around the world by getting to know the candidate, understanding your organization and leveraging data-driven insights.'
    },
    {
        name: 'Talent Network',
        description: 'Our unrivaled network covers 81% of the IT workforce and connects us personally to hard-to-find talent. And we’re committed to cultivating a diverse workforce who thrives in inclusive work environments.'
    },
    {
        name: 'Business Knowledge',
        description: 'We put in the time to learn your business’s energy, values, challenges and goals to seek out talent with the skills and expertise to match plus the intangibles—their attitude, their drive—that will help them integrate with your team and culture.'
    },
    {
        name: 'Recruitment Analytics',
        description: 'We use analytics to enhance our services rather than replace our hands-on, high-touch approach. We rely on a combination of artificial intelligence, machine learning, automation and mobile development to target the best candidates for your engagement.'
    }
]

const logos = [
    '/awsLogo.png',
    '/googleCloudLogo.webp',
    '/microsoftPartnerLogo.png',
    '/redHatLogo.png',
    '/serviceNowLogo.png',
    '/snowflakeLogo.png'
]

const Talent = () => {
    const {menuHeight} = useContext(HeaderContext)
    const router = useRouter()
    const pathname = router.pathname
    const url = pathname.split("/").pop()

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
            <div className='py-[80px]'>
                <div className='flex flex-col lg:flex-row max-w-[1300px] mx-auto gap-[25px_35px] px-[20px]'>
                    <div>
                        <div className='text-[30px] lg:text-[40px] font-bold'>Talent, the freshest tracks</div>
                        <div className='text-[16px] lg:text-[20px] mt-[20px]'>
                            Are you looking for the right talent, right now? People ready to activate your vision and contribute from day
                            one? We’re here to make it easier. Together, we’ll help find talent and retain them, so you can accelerate 
                            business outcomes and stay ahead of what’s next.
                            <br /><br />
                            It’s not about matching resumes to job descriptions. It’s understanding your business goals and your culture, and digging into what makes
                            an ideal fit for your organization. Whether you need a highly skilled expert, a practiced full-time employee, support for a fast-track 
                            initiative or some structure for your strategy, we’re here to make it happen.
                        </div>
                    </div>

                    <div className='p-[30px] bg-[#f5f5f5] min-w-[38.33%] h-max rounded-[20px] relative '>
                        <SmilySvg className='absolute top-[27px] left-[-10px] lg:left-[-30px] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' />
                        <div className='text-[50px] lg:text-[70px] font-bold ml-[35px]'>90%</div>
                        <div className='text-[25px] lg:text-[30px] font-[500] leading-8'>of hires fulfilled diversity goals</div>
                    </div>
                </div>

                <div className='max-w-[1300px] w-[98%] mx-auto mt-[45px] lg:mt-[80px]'>
                    <div className='py-[30px] px-[25px] lg:px-[50px] xl:px-[70px] lg:px-[40px] bg-[#021A32] text-white rounded-[25px] pb-[60px] '>
                        {features.map((feat, index) => (
                            <div key={index}>
                                <div className='text-[28px] lg:text-[40px] mt-[25px] lg:mt-[35px] font-bold'>{feat.name}</div>
                                <div className='mt-[20px] lg:text-[20px]'>{feat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='max-w-[1300px] w-[98%] mx-auto mt-[45px] lg:mt-[80px]'>
                    <div className='text-[28px] lg:text-[40px] font-bold'>In Good Company</div>
                    <div className='mt-[20px] text-[20px] leading-10'>
                        We work side by side with you to fully leverage our relationships with the world’s leading technology companies so you can 
                        reap the benefits of best-in-class implementation, 
                        integration and support—making the most of your technology investments and powering next-gen innovation.
                    </div>

                    <div className='mt-[40px] grid-cols-2 grid md:grid-cols-3 xl:grid-cols-6 gap-[35px]'>
                        {logos.map(logo => (
                            <div key={logo} className='relative h-[80px]'>
                                <Image src={logo} alt={logo} layout='fill' objectFit='contain'  />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Talent
