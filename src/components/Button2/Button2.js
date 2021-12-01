import React from 'react'
import './Button2.css'
const Button2 = ({ appStore, className, logo, btnspace }) => {
  return (
    <div className={`group-4529 ${btnspace || ''}`}>
      <div className='apple-g'>
        <img className='apple-logo' src={logo} alt='img' />
        <div className={`group-1096 ${className || ''}`}>
          <div className='overlap-group'>
            <div className='coming-soon montserrat-semi-bold-white-12px'>
              Coming Soon
            </div>
            <div className='x-store montserrat-semi-bold-white-14px'>
              {appStore}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Button2
