import React, { useState } from 'react'
import './Agent.css'
import AgentFooter from '../../components/AgentComponets/AgentFooter/AgentFooter'
import AgentHeader from '../../components/AgentComponets/AgentHeader/AgentHeader'
import AgentSection1 from '../../components/AgentComponets/AgentSection1/AgentSection1'
import AgentSection2 from '../../components/AgentComponets/AgentSection2/AgentSection2'
import AgentSection3 from '../../components/AgentComponets/AgentSection3/AgentSection3'
import AgentSection4 from '../../components/AgentComponets/AgentSection4/AgentSection4'
import AgentSection5 from '../../components/AgentComponets/AgentSection5/AgentSection5'
import AgentSection6 from '../../components/AgentComponets/AgentSection6/AgentSection6'
import { Offcanvas } from 'react-bootstrap'

const Agent = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='main-con'>
      <AgentHeader handleShow={handleShow} />

      <AgentSection1 />
      <AgentSection2 />
      <AgentSection3 />
      <AgentSection4 />
      <AgentSection5 />
      <AgentSection6 />
      <AgentFooter />
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Body>
          <div className='side-col'>
            <div className='side-text'>Privacy Policy</div>
            <div className='side-text'>Terms & Conditions</div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Agent
