import React from 'react'
import logo from '../../assets/logo.svg'
import intagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import { useEffect } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
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
      <div className='nav-bar'>
        <NavLink className='logo' to='/'>
          <img src={logo} alt='logo' height='40px' width='95px' />
        </NavLink>
        <div className='social'>
          <img
            className='social-icon'
            src={intagram}
            alt='intagram'
            height='40px'
            width='40px'
          />
          <img
            className='social-icon'
            src={twitter}
            alt='twitter'
            height='40px'
            width='40px'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
