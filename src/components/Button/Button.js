import React from 'react'
import './Button.css'

const Button = ({ text, className }) => {
  return (
    <div className={`group-4528 ${className || ''}`}>
      <div className='join-waitlist montserrat-semi-bold-white-14px'>
        {text}
      </div>
    </div>
  )
}

export default Button
