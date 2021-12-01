import React from 'react'
import { section3Data } from './Section3Data'
import './Section3.css'

const Section3 = () => {
  return (
    <div className='sec3Container'>
      <div className='text-5'>
        <span className='montserrat-extra-bold-licorice-60px'>
          {section3Data.text1}
        </span>
        <span className='span1'>{section3Data.text2}</span>
        <span className='montserrat-extra-bold-licorice-60px'>
          {section3Data.text3}
        </span>
      </div>

      <div className='text-6'>
        <span className='centurygothic-regular-normal-steel-gray-32px'>
          {section3Data.text4}
        </span>
        <span className='span2'>{section3Data.text5}</span>
        <span className='centurygothic-regular-normal-steel-gray-32px'>
          {section3Data.text6}
        </span>
      </div>

      <div className='sec3img-con'>
        <img src={section3Data.section3img} className='sec3-img' alt='img' />
      </div>
    </div>
  )
}

export default Section3
