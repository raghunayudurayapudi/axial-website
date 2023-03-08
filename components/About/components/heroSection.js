import Image from "next/image"
import css from "./styles.module.css"
import { useContext } from "react"
import { HeaderContext } from "contexts/HeaderContext"

const HeroSection = () => {
    const {menuHeight} = useContext(HeaderContext)

    return (
        <div className={`relative w-[100%]
         text-white bg-black ${css.heroBg} pt-[260px] md:pt-[281px] px-[20px] md:px-[90px] pb-[18px] 
         md:pb-[80px] lg:pb-[140px] grid items-center grid-cols-1 lg:grid-cols-3 gap-[30px_89px]`} style={{ marginTop: -(menuHeight+252)}}>
            <div className="w-[100%] relative h-[512px]" style={{marginTop: menuHeight}}>
                <Image src="/aboutHeroImage.png" alt="about" layout="fill" objectFit="cover" />
            </div>

            <div className="flex flex-col gap-[40px] md:gap-[60px] ">
                <div>
                    <div className={`text-[#84584D] text-[31px]`}>About</div>
                    <div className="text-[33px] text-[#E4C6BE] mt-[10px]">20+ Employees</div>
                </div>
                <div>
                    <div className={`text-[#84584D] text-[31px]`}>Expertise</div>
                    <div className="text-[33px] text-[#E4C6BE] mt-[10px]">30+ Technologies</div>
                </div>
                <div>
                    <div className={`text-[#84584D] text-[31px]`}>Experience</div>
                    <div className="text-[33px] text-[#E4C6BE] mt-[10px]">5+ Years</div>
                </div>
            </div>

            <div>
                <div className=" text-[22px] lg:text-[26px] font-[700] text-[#E4C6BE] ">
                    Our skilled experts provide quality advisory services covering several use cases of Automation Anywhere. 
                    We can also collaborate with your team for a short project or an extended period for models on Automation Anywhere.
                </div>
                <div className="text-[#AF9791] text-[21px] lg:text-[24px] mt-[60px] ">
                    We also offer continuous maintenance services, including optimizing your Automation 
                    Anywhere licenses, ticket management, and helpdesk services.
                </div>
            </div>
        </div>
    )
}

export default HeroSection