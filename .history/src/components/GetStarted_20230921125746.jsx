import React from 'react'
import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="" />
        </div>
        
      </div>
    </div>
)


export default GetStarted