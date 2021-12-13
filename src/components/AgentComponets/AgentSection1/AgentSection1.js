import React from 'react'
import { Grid } from '@material-ui/core'
import './AgentSection1.css'
import { agentSection1Data } from './AgentSection1Data'
import AgentButton from '../AgentButton/AgentButton'

const AgentSection1 = () => {
  return (
    <div className='agn-sec1-con'>
      <Grid container='ang-main'>
        <Grid item xs={12} sm={6} className='ang-sec1-info'>
          <div className='ang-text-con'>
            <div className='ang-text1'>
              {agentSection1Data.text1}
              <span className='ang-text2'>{agentSection1Data.text2}</span>
            </div>
            <div className='ang-text3'>{agentSection1Data.text3}</div>
            <div className='line-con'>
              <img
                alt='mockup'
                className='line-img'
                src={agentSection1Data.Line}
              />
            </div>
            <div className='ang-text5'>{agentSection1Data.text4}</div>
            <div className='ang-btn'>
              <AgentButton text='Become An Agent' />
            </div>
          </div>
        </Grid>
        <Grid item md={0} lg={6} className='ang-sec1Image'>
          <div className='ang-image'>
            <img
              alt='mockup'
              className='ang-mockup-img'
              src={agentSection1Data.sec1Img}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default AgentSection1
