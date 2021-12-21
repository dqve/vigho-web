import React from 'react'
import AgentFooter from '../../components/AgentComponets/AgentFooter/AgentFooter'
import AgentHeader from '../../components/AgentComponets/AgentHeader/AgentHeader'
import AgentSection1 from '../../components/AgentComponets/AgentSection1/AgentSection1'
import AgentSection2 from '../../components/AgentComponets/AgentSection2/AgentSection2'
import AgentSection3 from '../../components/AgentComponets/AgentSection3/AgentSection3'
import AgentSection4 from '../../components/AgentComponets/AgentSection4/AgentSection4'
import AgentSection5 from '../../components/AgentComponets/AgentSection5/AgentSection5'
import AgentSection6 from '../../components/AgentComponets/AgentSection6/AgentSection6'

const Agent = () => {
  return (
    <div className='main-con'>
      <AgentHeader />
      <AgentSection1 />
      <AgentSection2 />
      <AgentSection3 />
      <AgentSection4 />
      <AgentSection5 />
      <AgentSection6 />
      <AgentFooter />
    </div>
  )
}

export default Agent
