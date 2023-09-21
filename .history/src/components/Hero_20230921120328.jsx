import React from 'react'
import styles from '../style'
import {discount, robot} from '../assets'
import {GetStarted} from './index'
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[16px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discont" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 uppercase`}>   
            <span className="text-white">Experience Healing at No Cost</span> Your First Therapy Session{" "} 
            <span className="text-white"> is 100%</span>  FREE!
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
           Connecting Minds,   <br className="sm:block hidden"/> {" "}
            <span className="text-gradient"> Healing </span> {" "} 

          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted/>
          </div>
        </div>
        <h1  className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full "></h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5` }>
         
         "Find people who are in the same emotional 
            state as you, connect with them,
         and help each other navigate life's ups and downs." 

         <span className="text-gradient" style={{ fontSize: '30px', padding: '2000px' }}>Low LPrice  Therapy | Community | </span>

        
         
        </p>
      </div>
      


      <div className={`flex-1 flex ${styles.flexCenter} md:mr-0  my-10 relative`}>
        <img src={robot} className="w-[100%] h-[100%] relative z-[5]" alt="" srcset="" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero