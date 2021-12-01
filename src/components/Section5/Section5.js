import React from 'react'
import './section5.css'
import { Grid } from '@material-ui/core'
import Button from '../Button/Button'
import { section5Data } from './section5Data'

const Section5 = () => {
  return (
    <div className='sec5-con'>
      <Grid container className='sec5Bg'>
        <Grid item xs={12} sm={6} className='sec5Image'>
          <div className='image5'>
            <img
              alt='mockup'
              className='mockup-img5'
              src={section5Data.sec5Img}
            />
          </div>
        </Grid>
        <Grid item md={0} lg={6} className='sec5Info'>
          <div className='group-6'>
            <div className='graphic-designer'> {section5Data.text1}</div>
            <div className='graphic-designer-wit montserrat-extra-bold-licorice-60px'>
              {section5Data.text2}
            </div>
            <div className='lorem-ipsum-dolor-si centurygothic-regular-normal-scarpa-flow-24px'>
              {section5Data.text3}
            </div>
            <Button text={section5Data.btntxt} />
          </div>
        </Grid>
      </Grid>
      <div className='group-54715'>
        <div className='title-5'>{section5Data.text4}</div>
        <div className='text-10'>{section5Data.text5}</div>
      </div>

      <div className='group-54716'>
        <input
          type='text'
          className='sec5-input'
          placeholder='Type Your Whatsapp Line'
        />
        <Button text={section5Data.btntxt} className='no-margin' />
      </div>
    </div>
  )
}

export default Section5
