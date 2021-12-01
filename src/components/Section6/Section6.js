import React from 'react'
import './Section6.css'
import { section6Data } from './Section6Data'
const Section6 = () => {
  return (
    <div className='group-54748'>
      <div className='group-54437'>
        <div className='group-54435'>
          <div className='vigho-tech-ltd'>Vigho Tech Ltd</div>
        </div>
        <div className='group-54749'>
          <div className='group-5024'>
            <div className='about valuesanspro-medium-white-10px'>About</div>
          </div>
          <div className='group-54702'>
            <div className='faq valuesanspro-medium-white-10px'>FAQ</div>
          </div>
          <div className='group-5026'>
            <div className='place valuesanspro-medium-white-10px'>Contact</div>
          </div>
        </div>
        <div className='group-4922'>
          <div className='group-3284'>
            <div className='group-3285'>
              <img
                className='group-3283'
                src={section6Data.intagram}
                alt='logo'
              />
            </div>
            <div className='group-3286'>
              <img className='twitter' src={section6Data.twitter} alt='logo' />
            </div>
            <div className='group-3287'>
              <img
                className='facebook'
                src={section6Data.facebook}
                alt='logo'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>©2021 Vigho</div>
    </div>
  )
}

export default Section6
