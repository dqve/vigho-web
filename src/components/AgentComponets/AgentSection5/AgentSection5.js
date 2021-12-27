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
          <Grid item sm={6} md={6} lg={6} className='ang-sec5-info2'>
            <div className='ang-info5-con'>
              <div className='ang-sec5-info'>
                <div className='ang-sec5-text1'>{agentSection5Data.text1}</div>
                <div className='ang-sec5-text2'>{agentSection5Data.text2}</div>
                <div
                  className={
                    window.innerWidth > 600 ? 'group-547162' : 'group-547172'
                  }
                >
                  <input
                    type='text'
                    className='sec5-input'
                    placeholder={agentSection5Data.text3}
                  />
                  {window.innerWidth > 600 ? (
                    <Button
                      text={agentSection5Data.text4}
                      className='no-margin'
                    />
                  ) : null}
                </div>
                {window.innerWidth < 600 ? (
                  <Button
                    text={agentSection5Data.text4}
                    className='min-screen-btn'
                  />
                ) : null}
              </div>
            </div>
          </Grid>

          <Grid item xs={0} sm={6} md={6} lg={6} className='ang-sec5-img'>
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
