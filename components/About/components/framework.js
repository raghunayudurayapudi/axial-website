import React from 'react'

const frameworks = [
    { id: '01', value: 'Tech Roadmap and Strategy' },
    { id: '02', value: 'Security and Risk Analysis' },
    { id: '03', value: 'Performance & Scalability' },
    { id: '04', value: 'Tech Roadmap and Strategy' },
    { id: '05', value: 'Tech Roadmap and Strategy' }
]

const Framework = () => {
  return (
    <div className='flex flex-col lg:flex-row mt-[140px] mb-[160px] items-center gap-[40px]'>
        <div className='text-[50px] lg:text-[90px] text-[#032246] flex-1
        leading-[112.18%] font-bold'>
            <div className='mx-auto text-center lg:text-left w-max'>
                Our <br /> Framework
            </div>
        </div>

        <div className='flex flex-col gap-[100px] flex-1'>
            {frameworks.map(({id, value}) => (
                <div key={id} className='flex mx-auto'>
                    <div className='text-[39px] bg-[#D7B0A8] w-[94px] h-[86px] flex justify-center items-center 
                    text-[rgba(3,34,70,0.38)] sm:text-[60px] sm:w-[115px] sm:h-[110px] font-[900]'>{id}</div>
                    <div className='text-[23px] sm:text-[29px] text-[#032246] w-[234px] h-[86px] flex justify-center items-center
                    sm:w-[288px] sm:h-[110px] bg-[#E4C6BE] font-[600] text-center px-[10px] sm:px-[28px]'>{value}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Framework