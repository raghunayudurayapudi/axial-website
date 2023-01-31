import Image from "next/image"
import css from "./styles.module.css"

const HeroSection = () => {
    return <div className={`h-[812px] relative mt-[-252px] w-[100%] ${css.heroBg}`}>
        <Image src="/heroImage.png" alt="hero" layout="fill" objectFit="cover"/>
        <div className="relative pt-[305px] text-[30px] mx-[40px] text-center
         text-white z-10 lg:w-[674px] lg:ml-[125px] lg:text-left lg:text-[41px] ">Axial IT Solutions is 
         he leader in Digital Business Transformation and Optimization
        </div>
        <button className={`relative mt-[52px] flex justify-center p-[15px_31px] border
         border-[#D7B0A8] backdrop-blur-[4.5px] rounded bg-[rgba(255,255,255,0.1)]
          text-white mx-auto lg:mx-[125px] font-bold z-10 ${css.bigShoulders}`}>START A PROJECT</button>
    </div>
}

export default HeroSection