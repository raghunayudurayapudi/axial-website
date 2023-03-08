import { useContext } from "react"
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from "next/link"
import { HeaderContext } from "contexts/HeaderContext"
import {services} from "../common"

const features = [
    {
        image: '/assurance.png',
        text: 'Highly qualified and certified ERP, CRM, and e-commerce consultants'
    },
    {
        image: '/dependable.png',
        text: 'Long-standing cloud application support expertise'
    },
    {
        image: '/support 2.png',
        text: '24×7 Managed Helpdesk'
    },
    {
        image: '/partnership.png',
        text: '20+ years of application support experience'
    },
    {
        image: '/technology.png',
        text: '99.99% uptime guarantee'
    },
    {
        image: '/flexible.png',
        text: 'Flexible pricing model'
    }
]

const Support = () => {
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
                <div className='max-w-[1300px] mx-auto gap-[25px_35px] px-[20px]'>
                    <div className='text-[30px] lg:text-[40px] font-bold'>Managed Application Support Services for Enhanced Efficiency and Results</div>
                    <div className='text-[16px] mt-[30px] lg:text-[20px]'>
                        Synoptek offers a gamut of Managed Application Support Services to ensure your mission-critical 
                        ERP, CRM, e-commerce, and other enterprise applications can sustain and accelerate business results.
                        <br /><br />
                        Using time-tested tools and advanced support frameworks, we ensure your 
                        business applications are implemented properly, function securely, and operate to their maximum potential.
                    </div>

                    <div className='text-[30px] mt-[45px] lg:mt-[80px] lg:text-[40px] font-bold'>Why Partner with Axial</div>
                    <div className='text-[16px] mt-[30px] lg:text-[20px]'>
                        Whether you need ongoing monitoring and maintenance, want to achieve cost savings, or want to improve user experience, 
                        we provide the support you need to ensure your custom business application is always running smoothly. 
                        We make use of industry-standard service delivery metrics to enhance transparency and accountability and increase capacity to 
                        prioritize and resolve issues.
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[80px] gap-[70px_35px]'>
                        {features.map(feat => (
                            <div key={feat.image} className='p-[16px] min-h-[165px] border border-[#919197] flex items-end text-[20px] relative '>
                                <div className='absolute w-full text-center top-[-30%]'>
                                    <Image src={feat.image} alt={feat.image} width='100%' height='100%' />
                                </div>
                                <div className='min-h-[55%] text-center w-full'>{feat.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support