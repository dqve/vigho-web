import React from 'react'
import { agentSection3Data } from './AgentSection3Data'
import { Grid } from '@material-ui/core'
import AgentButton from '../AgentButton/AgentButton'
import './AgentSection3.css'

const AgentSection3 = () => {
  return (
    <div className='agn-sec3-con'>
      <Grid container='ang-main'>
        <Grid item xs={12} sm={6} className='ang-sec3-info'>
          <div className='ang-sec3-wrap'>
            <div className='why-you-should-become-a-vigho-agent gtwalsheimpro-bold-licorice-50px-2'>
              {window.innerWidth < 600
                ? agentSection3Data.text1sm
                : agentSection3Data.text1}
            </div>
            <div className='ang-sec2-text4'>{agentSection3Data.text2}</div>
            <div className='ang-btn'>
              <AgentButton
                text={agentSection3Data.text3}
                className='agent-sec3-btn'
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className='ang-sec3-img'>
          <div className='ang-image-3'>
            <img
              alt='mockup'
              className='ang-sec2-main-img '
              src={agentSection3Data.sec3Img}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default AgentSection3
