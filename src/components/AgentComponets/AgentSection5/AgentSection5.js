import React from 'react'
import './AgentSection5.css'
import { agentSection5Data } from './AgentSectionData5'
import { Grid } from '@material-ui/core'
import Button from '../../Button/Button'
const AgentSection5 = () => {
  return (
    <div className='ang-sec5-con'>
      <div className='ang5-bg'>
        <Grid container className='ang5-con2'>
          <Grid item sm={12} md={6} className='ang-sec5-info2'>
            <div className='ang-info5-con'>
              <div className='ang-sec5-info'>
                <div className='ang-sec5-text1'>{agentSection5Data.text1}</div>
                <div className='ang-sec5-text2'>{agentSection5Data.text2}</div>
                <div className='group-547162'>
                  <input
                    type='text'
                    className='sec5-input'
                    placeholder={agentSection5Data.text3}
                  />
                  <Button
                    text={agentSection5Data.text4}
                    className='no-margin'
                  />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item sm={12} md={6} xs={12} className='ang-sec5-img'>
            <div className='ang-image-5'>
              <img
                className='ang-sec5-main-img'
                src={agentSection5Data.sec5Img}
                alt='phone'
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default AgentSection5
