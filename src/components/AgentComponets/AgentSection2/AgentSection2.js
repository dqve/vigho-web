import React from 'react'
import './AgentSection2.css'
import { agentSection2Data } from './AgentSection2Data'
import { Grid } from '@material-ui/core'
const AgentSection2 = () => {
  return (
    <div className='ang-sec2-con-main'>
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
      <Grid container className='ang-sec2-con'>
        <Grid item xs={12} sm={6} className='ang-sec2-img'>
          <img
            className='ang-sec2-main-img '
            src={agentSection2Data.phone}
            alt='phone'
          />
        </Grid>
        <Grid item xs={12} sm={6} className='ang-sec2-text2'>
          <div className='ang-sec2-col'>
            <div className='ang-sec2-row'>
              <div className='ang-min-img'>
                <img src={agentSection2Data.icon1} alt='icon' />
              </div>
              <div className='ang-min-text-con'>
                <div className='ang-min-text1'>Reliable & Secure Network</div>
                <div className='ang-min-text2'>{agentSection2Data.text5}</div>
              </div>
            </div>
            <div className='ang-sec2-row'>
              <div className='ang-min-img'>
                <img src={agentSection2Data.icon2} alt='icon' />
              </div>
              <div className='ang-min-text-con'>
                <div className='ang-min-text1'>Reliable & Secure Network</div>
                <div className='ang-min-text2'>{agentSection2Data.text6}</div>
              </div>
            </div>
            <div className='ang-sec2-row'>
              <div className='ang-min-img'>
                <img src={agentSection2Data.icon3} alt='icon' />
              </div>
              <div className='ang-min-text-con'>
                <div className='ang-min-text1'>Reliable & Secure Network</div>
                <div className='ang-min-text2'>{agentSection2Data.text7}</div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default AgentSection2
