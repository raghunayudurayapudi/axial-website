import React from 'react'
import Image from 'next/image'
import css from "./styles.module.css"

const About = () => {
  return (
    <section id="about">
        <div className={`${css.aboutHeader} mt-[50px] sm:mt-[150px`}>01 About</div>
        <div className={css.aboutSubHeader}>What we do</div>
        <div className={`${css.aboutFirst} flex-col-reverse lg:flex-row px-[17px] md:px-[50px] lg:px-[80px] mt-[30px] md:mt-[115px]`}>
          <div className={`${css.textContent} text-[21px] md:text-[31px]`}>
            We deliver business value through sustainable business outcomes by
            leveraging our experience and expertise in business and technology.
            <br /><br />
            Our innovative frameworks and accelerators help optimize digital
            transformation through hyperautomation amplified by timely,
            data-driven insights that enable organizations to adapt and thrive
            in this ever-changing digital business climate
          </div>
          <div className={css.imageContainer}>
            <Image alt="campaign-creators" src="/campaign_creators.png" layout="fill" objectFit="cover" />
          </div>
        </div>

        <div className={`${css.aboutSecond} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-[17px] md:px-[50px] lg:px-[80px]`}>
          <div className={`${css.quotedText} flex`}>Don’t be afraid to give up the good to go for the great</div>
          <div>
            <div className={css.text}>OPERATING</div>
            <div className={css.image}>
              <Image alt="campaign-creators" src="/campaign_creators.png" layout="fill" objectFit="cover" />
            </div>
            <div className={css.subText}>Since 2020</div>
          </div>
          <div className={`${css.quotedText} hidden md:flex`}>Quality means doing it right when no one is looking</div>
          <div className={css.highlighted}>
            <div className={css.text}>06</div>
            <div className={css.subtext}>CLIENTS</div>
          </div>
          <div className={css.highlighted}>
            <div className={css.text}>27</div>
            <div className={css.subtext}>EMPLOYEES</div>
          </div>
          <div className={css.highlighted}>
            <div className={css.text}>5+</div>
            <div className={css.subtext}>YEARS EXPERIENCE</div>
          </div>
        </div>
      </section>
  )
}

export default About