import React from 'react'
import './section1.css'
import { Grid } from '@material-ui/core'
import Button from '../Button/Button'
import { section1Data } from './section1Data'

const Section1 = () => {
  return (
    <div className='sec1-con'>
      <Grid container className='sec1Bg'>
        <Grid item xs={12} sm={6} className='sec1Info'>
          <div className='group-4878'>
            <div className='text-2'>{section1Data.text1}</div>
            <div className='text-1'>{section1Data.text2}</div>
            <Button text={section1Data.btntxt} />
          </div>
        </Grid>
        <Grid item md={0} lg={6} className='sec1Image'>
          <div className='image'>
            <img
              alt='mockup'
              className='mockup-img'
              src={section1Data.sec1img}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Section1
