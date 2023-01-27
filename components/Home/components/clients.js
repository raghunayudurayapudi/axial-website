import React from 'react'
import Ps5 from "../assets/ps5.svg"
import Nintendo from "../assets/nintendo.svg"
import MotionWin from "../assets/motionwin.svg"
import Notion from "../assets/notion.svg"
import Oculus from "../assets/oculus.svg"
import Xbox from "../assets/xbox.svg"
import css from "./styles.module.css"

const Clients = () => {
    const icons = [
        <Ps5 key={0} />,
        <Nintendo key={1} />,
        <MotionWin key={2} />,
        <Notion key={3} />,
        <Oculus key={4} />,
        <Xbox key={5} />
    ]

  return (
    <section id="clients">
        <div className={`${css.aboutHeader} mt-[160px]`}>03 Clients</div>
        <div className={css.aboutSubHeader}>Brands we have worked with</div>

        <div className={`grid items-center justify-items-center grid-cols-2 sm:grid-cols-3
        gap-[3rem_1rem] mt-[130px] px-[40px] lg:px-[75px] xl:px-[135px]
        ${css.clientIcons}`}>
            {icons}
        </div>
    </section>
  )
}

export default Clients