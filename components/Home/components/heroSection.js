import { useContext } from "react"
import Image from "next/image"
import {HeaderContext} from "../../../contexts/HeaderContext"
import css from "./styles.module.css"

const HeroSection = () => {
    const {menuHeight} = useContext(HeaderContext)

    return <div className={`relative w-[100%] ${css.heroBg}`} style={{height: menuHeight+700, marginTop: -(menuHeight+252)}}>
        <Image src="/heroImage.png" alt="hero" layout="fill" objectFit="cover"/>
        <div className="relative text-[24px] mx-[40px] text-center
         text-white z-10 lg:w-[674px] lg:ml-[125px] lg:text-left lg:text-[35px] " style={{paddingTop: menuHeight+350}}>Axial IT Solutions is 
         the leader in Digital Business Transformation and Optimization
        </div>
        <button className={`relative mt-[52px] flex justify-center p-[15px_31px] border
         border-[#D7B0A8] backdrop-blur-[4.5px] rounded bg-[rgba(255,255,255,0.1)]
          text-white mx-auto lg:mx-[125px] font-bold z-10 `}>START A PROJECT</button>
    </div>
}

export default HeroSection