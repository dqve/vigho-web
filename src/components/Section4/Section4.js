import React from 'react'
import './section4.css'
import { Grid } from '@material-ui/core'
import Button2 from '../Button2/Button2'
import { section4Data } from './section4Data'

const Section4 = () => {
  return (
    <div className='sec4-con'>
      <Grid container className='sec4Bg'>
        <Grid item xs={12} sm={6} className='sec4Info'>
          <div className='group-6235'>
            <div className='text-7 montserrat-extra-bold-licorice-60px'>
              {section4Data.text1}
            </div>
            <div className='text-8 centurygothic-regular-normal-scarpa-flow-24px'>
              {section4Data.text2}
            </div>
            <div className='group-6236'>
              <Button2 appStore='App Store' logo={section4Data.applelogo} />

              <Button2
                appStore='Play Store'
                logo={section4Data.playlogo}
                className='group-1096-1'
                btnspace='btnspace'
              />
            </div>
          </div>
        </Grid>
        <Grid item md={0} lg={6} className='sec4Image'>
          <div className='image2'>
            <img
              alt='mockup'
              className='mockup-img2'
              src={section4Data.phoneImg}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Section4
