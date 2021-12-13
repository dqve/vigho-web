import React from 'react'
import AgentHeader from '../../components/AgentComponets/AgentHeader/AgentHeader'
import AgentSection1 from '../../components/AgentComponets/AgentSection1/AgentSection1'
import AgentSection2 from '../../components/AgentComponets/AgentSection2/AgentSection2'

const Agent = () => {
  return (
    <div className='main-con'>
      <AgentHeader />
      <AgentSection1 />
      <AgentSection2 />
    </div>
  )
}

export default Agent
