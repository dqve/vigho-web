import React from 'react'
import './AgentButton.css'

const AgentButton = ({ text, className, className2 }) => {
  return (
    <div className={` ${className || ' agent-btn'}`}>
      <div className={` ${className2 || ' agent-text'}`}>{text}</div>
    </div>
  )
}

export default AgentButton
