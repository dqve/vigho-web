import React from 'react'
import logo from '../../../assets/logo.svg'
import AgentButton from '../AgentButton/AgentButton.js'

import { useEffect } from 'react'
import './AgentHeader.css'
import { NavLink } from 'react-router-dom'

const AgentHeader = () => {
  const [scrolled, setScrolled] = React.useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let navbarClasses = ['header']

  if (scrolled) {
    navbarClasses.push('scrolled')
  }
  return (
    <div className={navbarClasses.join(' ')}>
      <div className='nav-bar2 '>
        <NavLink className='logo' to='/'>
          <img src={logo} alt='logo' height='40px' width='95px' />
        </NavLink>

        <div className='nav-group'>
          <div className='ham1'></div>
          <div className='ham2'></div>
        </div>

        <div className='nav-group2'>
          <div className='header-agent-text'>Privacy Policy</div>
          <div className='header-agent-text'>Terms & Conditions</div>
          {window.innerWidth > 600 ? (
            <div className='show-btn'>
              <AgentButton text='Become an Agent' />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default AgentHeader
