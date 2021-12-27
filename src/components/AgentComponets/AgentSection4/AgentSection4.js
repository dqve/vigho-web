import React from 'react'
import { agentSection4Data } from './AgentSection4Data'
import { Grid } from '@material-ui/core'
import './AgentSection4.css'
const AgentSection4 = () => {
  return (
    <div className='ang-sec4-con'>
      <div className='ang-sec4-info-con'>
        <div className='sec4-info1'>
          <div className='ang-sec4-text1'>{agentSection4Data.text1}</div>
          <div className='why-you-should-become-a-vigho-agent gtwalsheimpro-bold-licorice-50px-2'>
            {agentSection4Data.text2}
          </div>
        </div>
        <div className='empty'></div>
      </div>
      <div className='ang4-main'>
        <div className='ang4-bg'>
          <Grid container className='ang4-con2'>
            <Grid item xs={6} sm={6} className='ang-sec4-img'>
              <div className='ang-image-4'>
                <img
                  className='ang-sec4-main-img'
                  src={agentSection4Data.sec4Img}
                  alt='user'
                />
              </div>
            </Grid>
            <Grid item xs={6} sm={6} className='ang-sec4-info2'>
              <div className='ang-sec-info'>
                <div className='ang-sec4-text3'>{agentSection4Data.text3}</div>
                <div className='ang-sec4-text4'>{agentSection4Data.text4}</div>
                <div className='ang-sec4-text-row'>
                  <div className='ang-sec4-text5'>
                    {agentSection4Data.text5}
                  </div>
                  <div className='ang-sec4-text-mute'>
                    {agentSection4Data.text6}
                  </div>
                  <div className='ang-sec4-text-mute'>
                    {agentSection4Data.text6}
                  </div>
                  <div className='ang-sec4-text-mute'>
                    {agentSection4Data.text6}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default AgentSection4
