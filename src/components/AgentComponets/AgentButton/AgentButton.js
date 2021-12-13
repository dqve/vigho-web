import React from 'react'
import './AgentButton.css'

const AgentButton = ({ text }) => {
  return (
    <div className='agent-btn'>
      <div className='agent-text'>{text}</div>
    </div>
  )
}

export default AgentButton
