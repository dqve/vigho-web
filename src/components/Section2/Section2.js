import React from 'react'
import { section2Data } from './Section2Data'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='sec2Container'>
      <div className='component-4-1'>
        <div className='text-3 montserrat-extra-bold-licorice-60px'>
          {section2Data.text1}
        </div>
      </div>

      <div className='text-4 centurygothic-regular-normal-steel-gray-32px'>
        {section2Data.text2}
      </div>

      <div className='group-6112'>
        <h1 className='title'>Our Products</h1>
      </div>
      <div className='sec2img-con'>
        <img src={section2Data.section2img} className='sec2-img' alt='img' />
      </div>
    </div>
  )
}

export default Section2
