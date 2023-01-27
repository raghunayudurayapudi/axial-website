import Image from 'next/image'
import React from 'react'
import ReadMoreIcon from "../assets/read_more.svg"
import css from "./styles.module.css"

const content = [
    {
        header: "ADVISORY",
        content: "Our skilled experts provide quality advisory services covering several use cases of Automation Anywhere.",
        img: "/advisory.png"
    },
    {
        header: "Implementation",
        content: "We help you drive your transition by delivering the bots in pilot and full-scale phases while testing for integrating AI and other cognitive technologies",
        img: "/implementation.png"
    },
    {
        header: "Migration",
        content: "We help your team investigate compatibility with Automation anywhere with a complete examination of your infrastructure",
        img: "/migration.png"
    },
    {
        header: "Support",
        content: "We also offer continuous maintenance services, including optimizing your Automation Anywhere licenses, ticket management, and helpdesk services",
        img: "/support.png"
    },
    {
        header: "Talent",
        content: "Our team will help get your business processes off the ground by setting up custom sales, services and development operations",
        img: "/talent.png"
    }
]

const Technologies = () => {
  return (
    <section id="technologies" className='border-b-2 border-b-[#D7B0A8]' >
        <div className={`${css.aboutHeader} mt-[160px]`}>02 Technologies</div>
        <div className={css.aboutSubHeader}>Areas Of Expertise</div>

        <div className='mt-[73px]'>
            {content.map((value, index) => (
                <div key={value.header} className={`border-t-2 border-t-[#D7B0A8] px-[17px] 
                bg-[#F5ECEA] py-[35px] md:grid md:grid-cols-3 md:items-center lg:px-[60px] lg:gap-4 xl:px-[130px]
                ${index !== 1 ? "md:bg-white":""}  `}>
                    <div className={`text-[36px] text-[#032246] font-[700] ${css.bigShoulders}`}>{value.header}</div>
                    <div className={`mt-[25px] text-[18px] text-[#032246] max-w-[328px] md:max-w-[375px] ${index === 1 ? "md:text-[#84584D]": ""}`}>{value.content}</div>
                    <div className={`flex items-center gap-[13px] ${css.bigShoulders} mt-[30px] text-[#84584D] md:hidden`}>READ MORE <ReadMoreIcon /></div>
                    <div className='h-[225px] w-[100%] mt-[20px] relative'>
                        <Image alt={value.header} src={value.img} layout="fill" objectFit='cover' />
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Technologies