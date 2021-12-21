import React from 'react'
import './AgentFooter.css'
import ftLogo from '../../../assets/ft-logo.svg'
import ftFb from '../../../assets/ft-fb.svg'
import ftIg from '../../../assets/ft-IG.svg'
import ftLn from '../../../assets/ft-lin.svg'
import ftTw from '../../../assets/ft-tw.svg'

const AgentFooter = () => {
  return (
    <div className='ang-ft-con'>
      <div className='ang-ft-wrapper'>
        <div className='ang-ft-logo'>
          <img src={ftLogo} alt='logo' className='ft-log' />
        </div>

        <div className='ang-ft-social'>
          <div className='ang-ft-text'>Follow us for updates</div>
          <div className='ang-social-icon-group'>
            <div className='ang-social-icon'>
              <img src={ftIg} alt='instagram' className='ang-ft-social-icon' />
            </div>
            <div className='ang-social-icon'>
              <img src={ftTw} alt='twitter' className='ang-ft-social-icon' />
            </div>
            <div className='ang-social-icon'>
              <img src={ftLn} alt='linkedin ' className='ang-ft-social-icon' />
            </div>
            <div className='ang-social-icon'>
              <img src={ftFb} alt='facebook' className='ang-ft-social-icon' />
            </div>
          </div>
        </div>
        <div className='contact-con'>
          <div className='ang-ft-text2'>Contact us</div>
          <div className='ang-whatapp-text'>Whatsapp: 09055555819</div>
          <div className='ang-whatapp-text ft-magin-non'>
            Email: support@vigho.co
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentFooter
