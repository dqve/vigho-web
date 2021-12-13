import React from 'react'
import './AgentSection2.css'
import { agentSection2Data } from './AgentSection2Data'
const AgentSection2 = () => {
  return (
    <div className='ang-sec2-con'>
      <div className='ang-sec2-text'>
        <div className='ang-sec2-text-wrap'>
          <div className='why-you-should-become-a-vigho-agent gtwalsheimpro-bold-licorice-50px-2'>
            <span className='gtwalsheimpro-bold-licorice-50px'>
              {agentSection2Data.text1}
            </span>
            <span className='gtwalsheimpro-bold-green-haze-50px'>
              {' '}
              {agentSection2Data.text2}
            </span>
            <span className='gtwalsheimpro-bold-licorice-50px'>
              {' '}
              {agentSection2Data.text3}
            </span>
          </div>

          <div className='ang-sec2-text4'>{agentSection2Data.text4}</div>
        </div>
      </div>
      <div className='empty'></div>
    </div>
  )
}

export default AgentSection2
