import React from 'react'
import './AgentSection6.css'
import { agentSection6Data } from './AgentSection6Data'
import AgentButton from '../AgentButton/AgentButton'

const AgentSection6 = () => {
  return (
    <div className='ang-6-con'>
      <div className='why-you-should-become-a-vigho-agent gtwalsheimpro-bold-licorice-50px-2'>
        <div className='ang-6-text-center'>{agentSection6Data.text1}</div>
        <span className='gtwalsheimpro-bold-green-haze-50px'>
          {agentSection6Data.text2}
        </span>
        <span>{agentSection6Data.text3}</span>
      </div>
      <div className='ang-6-text4'>
        {window.innerWidth > 600
          ? agentSection6Data.text4
          : agentSection6Data.text4min}
      </div>

      <AgentButton text='Get Started' />
    </div>
  )
}

export default AgentSection6
