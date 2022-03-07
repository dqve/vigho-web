import React, { useEffect, useState } from 'react'
import './site.css'
import OffCanvas from '../../componets/OffCanvas/OffCanvas'

const Home = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    var myNav = document.getElementById('nav')
    const hamburger = document.querySelector('.hamburger')
    const navMenu = document.querySelector('.navContents')

    hamburger.addEventListener('click', mobileMenu)

    function mobileMenu() {
      hamburger.classList.toggle('active')
      navMenu.classList.toggle('activate')
    }
    const navLink = document.querySelectorAll('.mobile-list')

    navLink.forEach((n) => n.addEventListener('click', closeMenu))

    function closeMenu() {
      hamburger.classList.remove('active')
      navMenu.classList.remove('activate')
    }

    window.onscroll = function (e) {
      if (this.scrollY >= 700) {
        myNav.classList.add('scroll')
      } else {
        myNav.classList.remove('scroll')
      }
    }
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <header className='header-home' id='nav'>
        <div className='header__container'>
          {/* navigation */}
          <div className='nav__container'>
            <nav className='navigation-home'>
              <div className='brand'>
                <a href='#'>
                  <img
                    src='img/Vigho.svg'
                    alt='Vigho Logo'
                    className='brand__logo-img'
                  />
                  <span className='brand__logo-text'>Vigho</span>
                </a>
              </div>
              <ul className='navigation__lists-home'>
                <li className='navigation__list navig__active'>
                  <a href='#' className='navigation__link'>
                    About
                  </a>
                </li>
                <li className='navigation__list'>
                  <a
                    href='network'
                    className='navigation__link'
                    target='_blank'
                  >
                    Agent Network
                  </a>
                </li>
                <div className='navigation__button--container'>
                  <a
                  // href='https://docs.google.com/forms/d/e/1FAIpQLSfUv_uGp8z869NVHf35Jpg7fIXmOLXLQJZHCWkSfMxrLUSOLg/viewform?embedded=true'
                  // target='_blank'
                  >
                    <button className='button' onClick={handleShow}>
                      Join waitlist
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='26.667'
                        height='26.668'
                        viewBox='0 0 26.667 26.668'
                      >
                        <g id='arrow-left-25' transform='translate(0 0)'>
                          <g
                            id='Group_56915'
                            data-name='Group 56915'
                            transform='translate(0 0)'
                          >
                            <g id='Group_56914' data-name='Group 56914'>
                              <path
                                id='Path_200957'
                                data-name='Path 200957'
                                d='M16-27.333A13.339,13.339,0,0,1,29.334-14,13.339,13.339,0,0,1,16-.665,13.339,13.339,0,0,1,2.667-14,13.339,13.339,0,0,1,16-27.333ZM11.333-13h6.92L15.96-10.706a1.006,1.006,0,0,0,0,1.413A.989.989,0,0,0,16.667-9a.989.989,0,0,0,.707-.293l4-4a1.006,1.006,0,0,0,0-1.413l-4-4a1.006,1.006,0,0,0-1.413,0,1.006,1.006,0,0,0,0,1.413L18.253-15h-6.92a1.007,1.007,0,0,0-1,1,1.007,1.007,0,0,0,1,1Z'
                                transform='translate(-2.667 27.333)'
                                fill='#fff'
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </a>
                </div>
              </ul>
              {/* mobile navigation */}
              <div className='mobile__nav'>
                <div className='navContents'>
                  <div className='mobile__brand'>
                    <a href='#' className='mobile-list'>
                      <img
                        src='img/logo.svg'
                        alt='Vigho Logo'
                        className='mobile__brand--img'
                      />
                      <span className='mobile__brand--text'>Vigho</span>
                    </a>
                  </div>
                  <ul>
                    <li className='mobile-list'>
                      <a href='#'>About</a>
                    </li>
                    <li className='mobile-list'>
                      <a href='network'>Agent Network</a>
                    </li>
                    <a>
                      <button
                        className='mobile__button mobile-list'
                        onClick={handleShow}
                      >
                        Join Waitlist
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='26.667'
                          height='26.668'
                          viewBox='0 0 26.667 26.668'
                        >
                          <g id='arrow-left-25' transform='translate(0 0)'>
                            <g
                              id='Group_56915'
                              data-name='Group 56915'
                              transform='translate(0 0)'
                            >
                              <g id='Group_56914' data-name='Group 56914'>
                                <path
                                  id='Path_200957'
                                  data-name='Path 200957'
                                  d='M16-27.333A13.339,13.339,0,0,1,29.334-14,13.339,13.339,0,0,1,16-.665,13.339,13.339,0,0,1,2.667-14,13.339,13.339,0,0,1,16-27.333ZM11.333-13h6.92L15.96-10.706a1.006,1.006,0,0,0,0,1.413A.989.989,0,0,0,16.667-9a.989.989,0,0,0,.707-.293l4-4a1.006,1.006,0,0,0,0-1.413l-4-4a1.006,1.006,0,0,0-1.413,0,1.006,1.006,0,0,0,0,1.413L18.253-15h-6.92a1.007,1.007,0,0,0-1,1,1.007,1.007,0,0,0,1,1Z'
                                  transform='translate(-2.667 27.333)'
                                  fill='#fff'
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </button>
                    </a>
                  </ul>
                </div>
                {/*Hamburger*/}
                <div className='hamburger'>
                  <span />
                  <span />
                </div>
                {/*Hamburger ends */}
              </div>
              {/* mobile navigation ends */}
            </nav>
          </div>
          {/* navigation ends */}
        </div>
        {/* hero section */}
        <div className='hero__container-home'>
          <section className='hero__section'>
            <div className='hero__section--contents'>
              <h1>Chop Now, Pay Later</h1>
              <p>
                Buy meals, foodstuff, pharmaceuticals and pay later at 0%
                interest and no signup fee.
              </p>
              <div className='hero__content--button'>
                <a
                // href='https://docs.google.com/forms/d/e/1FAIpQLSfUv_uGp8z869NVHf35Jpg7fIXmOLXLQJZHCWkSfMxrLUSOLg/viewform?embedded=true'
                // target='_blank'
                >
                  <button className='button' onClick={handleShow}>
                    Join Waitlist
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='26.667'
                      height='26.668'
                      viewBox='0 0 26.667 26.668'
                    >
                      <g id='arrow-left-25' transform='translate(0 0)'>
                        <g
                          id='Group_56915'
                          data-name='Group 56915'
                          transform='translate(0 0)'
                        >
                          <g id='Group_56914' data-name='Group 56914'>
                            <path
                              id='Path_200957'
                              data-name='Path 200957'
                              d='M16-27.333A13.339,13.339,0,0,1,29.334-14,13.339,13.339,0,0,1,16-.665,13.339,13.339,0,0,1,2.667-14,13.339,13.339,0,0,1,16-27.333ZM11.333-13h6.92L15.96-10.706a1.006,1.006,0,0,0,0,1.413A.989.989,0,0,0,16.667-9a.989.989,0,0,0,.707-.293l4-4a1.006,1.006,0,0,0,0-1.413l-4-4a1.006,1.006,0,0,0-1.413,0,1.006,1.006,0,0,0,0,1.413L18.253-15h-6.92a1.007,1.007,0,0,0-1,1,1.007,1.007,0,0,0,1,1Z'
                              transform='translate(-2.667 27.333)'
                              fill='#fff'
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
        {/* hero section ends */}
      </header>
      <main>
        {/* offer section */}
        <div className='offer__container'>
          <section className='offer__section'>
            <h1>What We Offer</h1>
            <div className='offer__cards--container'>
              {/* card 1 */}
              <div className='offer__card'>
                <div className='box'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='37.99'
                    height='34.85'
                    viewBox='0 0 37.99 34.85'
                  >
                    <g
                      id='wallet-money5'
                      transform='translate(-3.915 5.536) rotate(-17)'
                    >
                      <g
                        id='Group_56931'
                        data-name='Group 56931'
                        transform='translate(2.667 4.667)'
                      >
                        <g id='Group_56930' data-name='Group 56930'>
                          <path
                            id='Path_200985'
                            data-name='Path 200985'
                            d='M32.575-5.5C32.2-1.29,29.153,1.469,24.739,1.469H10.55A7.886,7.886,0,0,1,2.667-6.414V-17.45c0-4.288,2.586-7.284,6.606-7.788a8.389,8.389,0,0,1,1.277-.095H24.739a7.213,7.213,0,0,1,1.182.079,7.252,7.252,0,0,1,6.653,6.89.774.774,0,0,1-.788.836H29.343a5.427,5.427,0,0,0-3.926,1.624,5.546,5.546,0,0,0-1.655,4.446,5.747,5.747,0,0,0,5.77,5.124h2.255A.774.774,0,0,1,32.575-5.5ZM34.2-13.557v3.248A1.619,1.619,0,0,1,32.622-8.7h-3.09a3.362,3.362,0,0,1-3.405-2.948,3.166,3.166,0,0,1,.946-2.57,3.142,3.142,0,0,1,2.27-.946h3.279A1.619,1.619,0,0,1,34.2-13.558Z'
                            transform='translate(-2.667 25.333)'
                            fill='#212121'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <h1>VighoCredit</h1>
                <p>
                  Buy meals, foodstuff, drugs and pay later at 0% interest.
                  Increase your credit limit by paying more with Vigho.
                </p>
              </div>
              {/* card 1 ends */}
              {/* card 2 */}
              <div className='offer__card'>
                <div className='box'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='46.69'
                    height='37.973'
                    viewBox='0 0 46.69 37.973'
                  >
                    <g
                      id='moneys'
                      transform='translate(-3.386 15.333) rotate(-34)'
                    >
                      <g
                        id='Group_56927'
                        data-name='Group 56927'
                        transform='translate(1.71 3.52)'
                      >
                        <path
                          id='Path_200962'
                          data-name='Path 200962'
                          d='M32.41,9.006C31.654,5.19,28.823,3.52,24.884,3.52H9.446C4.8,3.52,1.71,5.841,1.71,11.256v9.055c0,3.9,1.6,6.189,4.237,7.174a6.837,6.837,0,0,0,1.248.334,10.282,10.282,0,0,0,2.251.229H24.9c4.642,0,7.736-2.321,7.736-7.736V11.256a9.954,9.954,0,0,0-.229-2.251ZM8.427,18.43a1.319,1.319,0,0,1-2.637,0V13.155a1.319,1.319,0,0,1,2.637,0Zm8.739,2a4.642,4.642,0,1,1,4.642-4.642A4.637,4.637,0,0,1,17.165,20.435Zm11.359-2a1.319,1.319,0,0,1-2.637,0V13.155a1.319,1.319,0,1,1,2.637,0Z'
                          transform='translate(-1.71 -3.52)'
                          fill='#292d32'
                        />
                        <path
                          id='Path_200963'
                          data-name='Path 200963'
                          d='M34.8,13.412v9.055c0,5.416-3.095,7.754-7.754,7.754H11.608a9.9,9.9,0,0,1-3.517-.58,5.929,5.929,0,0,1-2.128-1.3.454.454,0,0,1,.369-.774H21.771c6.506,0,10.374-3.868,10.374-10.356V8.137a.457.457,0,0,1,.774-.369A7.9,7.9,0,0,1,34.8,13.412Z'
                          transform='translate(1.407 -0.405)'
                          fill='#292d32'
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <h1>VighoPay</h1>
                <p>
                  Pay for food, drugs &amp; other consumables instantly from
                  your wallet and access discounts, cashbacks and more.
                </p>
              </div>
              {/* card 2 ends */}
              {/* card 3 */}
              <div className='offer__card'>
                <div className='box'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='43.406'
                    height='38.443'
                    viewBox='0 0 43.406 38.443'
                  >
                    <g
                      id='fi-sr-credit-card'
                      transform='translate(-1.124 10.677) rotate(-22)'
                    >
                      <g
                        id='Group_56924'
                        data-name='Group 56924'
                        transform='translate(0 3)'
                      >
                        <path
                          id='Path_200959'
                          data-name='Path 200959'
                          d='M28.443,3H7.485A7.412,7.412,0,0,0,0,10.485H35.928A7.412,7.412,0,0,0,28.443,3Z'
                          transform='translate(0 -3)'
                          fill='#111'
                        />
                        <path
                          id='Path_200960'
                          data-name='Path 200960'
                          d='M0,18.982a7.412,7.412,0,0,0,7.485,7.485H28.443a7.412,7.412,0,0,0,7.485-7.485V10H0Zm10.479-.749a2.3,2.3,0,0,1-2.246,2.246,2.246,2.246,0,0,1,0-4.491,2.3,2.3,0,0,1,2.246,2.246'
                          transform='translate(0 0.479)'
                          fill='#111'
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <h1>VighoCards</h1>
                <p>
                  Take charge with a physical or virtual card and enjoy
                  unlimited benefits. Get a free debit card when you perform 10
                  transactions.
                </p>
              </div>
              {/* card 3 ends */}
              {/* card 4 */}
              <div className='offer__card card__4'>
                <div className='box'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='36.344'
                    height='41.835'
                    viewBox='0 0 36.344 41.835'
                  >
                    <g id='savings' transform='translate(-2.2)'>
                      <g
                        id='Group_56928'
                        data-name='Group 56928'
                        transform='translate(2.2)'
                      >
                        <path
                          id='Path_200964'
                          data-name='Path 200964'
                          d='M24.971,18.641a10.422,10.422,0,0,0,13.573-1.373A10.417,10.417,0,0,0,30.962,14c-.089,0-.175.012-.261.013V14a11.766,11.766,0,0,0-10.459,6.406A11.766,11.766,0,0,0,9.783,14,10.416,10.416,0,0,0,2.2,17.268a10.405,10.405,0,0,0,13.428,1.464,9.137,9.137,0,0,1,3.306,7.034H12.4A1.307,1.307,0,0,0,11.1,27.259L12.41,36.41A1.307,1.307,0,0,0,13.7,37.532H26.778a1.307,1.307,0,0,0,1.294-1.122l1.307-9.151a1.307,1.307,0,0,0-1.294-1.493H21.549A9.134,9.134,0,0,1,24.971,18.641Z'
                          transform='translate(-2.2 4.303)'
                          fill='#212121'
                        />
                        <path
                          id='Path_200965'
                          data-name='Path 200965'
                          d='M18.151,0A9.151,9.151,0,1,0,27.3,9.151,9.151,9.151,0,0,0,18.151,0Zm1.307,13.073H16.844V5.229h2.615Z'
                          transform='translate(-0.11)'
                          fill='#212121'
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <h1>VighoSure</h1>
                <p>
                  We want to ensure that you’re absolutely in-charge of your
                  future and not just today. Something “Hooge” is coming!
                </p>
              </div>
              {/* card 4 ends */}
            </div>
          </section>
        </div>
        {/* offer section  ends */}
        {/* purchase section */}
        <div className='purchase__container'>
          <section className='purchase__section'>
            <h1>
              Purchase Meals, Foodstuff &amp; Pharmaceuticals from over 5000
              vendors.
            </h1>
            <p>
              Discover amazing offers, discounts and promotions by
              <span className='green__color'>Vigho vendors</span>
              around you and pay with ease.
            </p>
            <div className='circle__section'>
              {/* circle 1 */}
              <div className='first__section'>
                <div className='circle'>
                  <img src='img/market.svg' alt='' className='market' />
                </div>
                <div className='circle'>
                  <img src='img/grill.svg' alt='' />
                </div>
              </div>
              {/* circle 1 ends */}
              {/* circle 2 */}
              <div className='second__section'>
                <div className='circle'>
                  <img src='img/mega.svg' alt='' className='mega' />
                </div>
                <div className='circle'>
                  <img src='img/chop.svg' alt='' />
                </div>
              </div>
              {/* circle 2 ends */}
              {/* circle 3 */}
              <div className='third__section'>
                <div className='circle'>
                  <img src='img/anu.svg' alt='' />
                </div>
                <div className='circle'>
                  <img src='img/eve.svg' alt='' />
                </div>
              </div>
              {/* circle 3 ends */}
              {/* circle 4 */}
              <div className='fourth__section'>
                <div className='circle'>
                  <img src='img/farm.svg' alt='' className='farm' />
                </div>
                <div className='circle'>
                  <img src='img/medplus.svg' alt='' />
                </div>
              </div>
              {/* circle 4 ends */}
            </div>
          </section>
        </div>
        {/* purchase section ends*/}
        {/* sales section */}
        <div className='sales__container'>
          <section className='sales__section'>
            <div className='sales__contents'>
              <h1>Make more sales with Vigho</h1>
              <p>
                Accept payments online and in-store using Vigho. Get more
                customers and get paid instantly.
              </p>
              <div className='sales__button'>
                <a
                // href='https://docs.google.com/forms/d/e/1FAIpQLSfUv_uGp8z869NVHf35Jpg7fIXmOLXLQJZHCWkSfMxrLUSOLg/viewform?embedded=true'
                // target='_blank'
                >
                  <button className='button' onClick={handleShow}>
                    Join Waitlist
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='26.667'
                      height='26.668'
                      viewBox='0 0 26.667 26.668'
                    >
                      <g id='arrow-left-25' transform='translate(0 0)'>
                        <g
                          id='Group_56915'
                          data-name='Group 56915'
                          transform='translate(0 0)'
                        >
                          <g id='Group_56914' data-name='Group 56914'>
                            <path
                              id='Path_200957'
                              data-name='Path 200957'
                              d='M16-27.333A13.339,13.339,0,0,1,29.334-14,13.339,13.339,0,0,1,16-.665,13.339,13.339,0,0,1,2.667-14,13.339,13.339,0,0,1,16-27.333ZM11.333-13h6.92L15.96-10.706a1.006,1.006,0,0,0,0,1.413A.989.989,0,0,0,16.667-9a.989.989,0,0,0,.707-.293l4-4a1.006,1.006,0,0,0,0-1.413l-4-4a1.006,1.006,0,0,0-1.413,0,1.006,1.006,0,0,0,0,1.413L18.253-15h-6.92a1.007,1.007,0,0,0-1,1,1.007,1.007,0,0,0,1,1Z'
                              transform='translate(-2.667 27.333)'
                              fill='#fff'
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className='sales__img'>
              <img src='img/woman.svg' alt='woman' />
            </div>
          </section>
        </div>
        {/* sales section ends */}
        {/* soon section  */}
        <div className='soon__container'>
          <section className='soon__section'>
            <div className='soon__contents'>
              <h1>Coming soon to your mobile</h1>
              <p>
                Be the first to know when we launch mobile apps for both android
                and iOS
              </p>
              <div className='sales__button'>
                <a
                // href='https://docs.google.com/forms/d/e/1FAIpQLSfUv_uGp8z869NVHf35Jpg7fIXmOLXLQJZHCWkSfMxrLUSOLg/viewform?embedded=true'
                // target='_blank'
                >
                  <button className='button' onClick={handleShow}>
                    Join Waitlist
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='26.667'
                      height='26.668'
                      viewBox='0 0 26.667 26.668'
                    >
                      <g id='arrow-left-25' transform='translate(0 0)'>
                        <g
                          id='Group_56915'
                          data-name='Group 56915'
                          transform='translate(0 0)'
                        >
                          <g id='Group_56914' data-name='Group 56914'>
                            <path
                              id='Path_200957'
                              data-name='Path 200957'
                              d='M16-27.333A13.339,13.339,0,0,1,29.334-14,13.339,13.339,0,0,1,16-.665,13.339,13.339,0,0,1,2.667-14,13.339,13.339,0,0,1,16-27.333ZM11.333-13h6.92L15.96-10.706a1.006,1.006,0,0,0,0,1.413A.989.989,0,0,0,16.667-9a.989.989,0,0,0,.707-.293l4-4a1.006,1.006,0,0,0,0-1.413l-4-4a1.006,1.006,0,0,0-1.413,0,1.006,1.006,0,0,0,0,1.413L18.253-15h-6.92a1.007,1.007,0,0,0-1,1,1.007,1.007,0,0,0,1,1Z'
                              transform='translate(-2.667 27.333)'
                              fill='#fff'
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className='soon__image'>
              <img src='img/Gp.svg' alt='phone' />
            </div>
          </section>
        </div>
        {/* soon section ends */}
        {/* access section */}
        <div className='access__container'>
          <section className='access__contents'>
            <h1>Get Early Access</h1>
            <p>
              Be the first to know when we launch mobile apps for both android
              and iOS
            </p>
            <div className='input__field'>
              <div className='input__wrapper'>
                <label className='form__label'>Your Email</label>
                <input
                  type='email'
                  id='form__label'
                  name='email'
                  placeholder='Type Your Email Address'
                  required
                />
                <a
                  // href='https://docs.google.com/forms/d/e/1FAIpQLSfUv_uGp8z869NVHf35Jpg7fIXmOLXLQJZHCWkSfMxrLUSOLg/viewform?embedded=true'
                  className='form__btn-container'
                  // target='_blank'
                >
                  <button
                    type='submit'
                    className='form__button'
                    onClick={handleShow}
                  >
                    Join waitlist
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
        {/* access section ends */}
      </main>
      {/* footer */}
      <footer className='footer__container'>
        <div className='footer__content'>
          <div className='footer__content--logo'>
            <a href='#'>
              <img src='img/Vigho-Icon-white.svg' alt='footer logo' />
              <span className='footer__logo-text'>Vigho</span>
            </a>
          </div>
          <div className='footer__content--social-media'>
            <h1>Follow us for updates</h1>
            <div className='social_media--icons'>
              <a
                href='https://instagram.com/vighohq?utm_medium=copy_link'
                target='_blank'
              >
                <svg
                  className='footer__icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width={50}
                  height={50}
                  viewBox='0 0 50 50'
                >
                  <g
                    id='Group_3285'
                    data-name='Group 3285'
                    transform='translate(0.001)'
                  >
                    <rect
                      id='Rectangle_12052'
                      data-name='Rectangle 12052'
                      width={50}
                      height={50}
                      rx={10}
                      transform='translate(-0.001)'
                      fill='#fff'
                      opacity='0.1'
                    />
                    <g id='Instagram' transform='translate(14.327 14.554)'>
                      <path
                        id='Subtraction_24'
                        data-name='Subtraction 24'
                        d='M15.012,20.731H5.719A5.725,5.725,0,0,1,0,15.013V5.719A5.725,5.725,0,0,1,5.719,0h9.293a5.725,5.725,0,0,1,5.719,5.719v9.294A5.725,5.725,0,0,1,15.012,20.731ZM10.366,5.186a5.18,5.18,0,1,0,5.179,5.18A5.185,5.185,0,0,0,10.366,5.186ZM15.71,3.74a1.331,1.331,0,1,0,1.331,1.331A1.333,1.333,0,0,0,15.71,3.74Zm-5.344,9.79a3.165,3.165,0,1,1,3.165-3.165A3.169,3.169,0,0,1,10.366,13.531Z'
                        transform='translate(0 0)'
                        fill='#ededed'
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href='https://twitter.com/vighohq?t=Vsg-bIiToae3oT47PceTfA&s=09'
                target='_blank'
              >
                <svg
                  className='footer__icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width={50}
                  height={50}
                  viewBox='0 0 50 50'
                >
                  <g
                    id='Group_3286'
                    data-name='Group 3286'
                    transform='translate(0.075)'
                  >
                    <rect
                      id='Rectangle_12051'
                      data-name='Rectangle 12051'
                      width={50}
                      height={50}
                      rx={10}
                      transform='translate(-0.075)'
                      fill='#fff'
                      opacity='0.1'
                    />
                    <path
                      id='twitter'
                      d='M7.291,14.187A13.06,13.06,0,0,0,20.673,1.25q0-.3-.013-.588a9.4,9.4,0,0,0,2.346-2.355,9.636,9.636,0,0,1-2.7.716,4.6,4.6,0,0,0,2.068-2.515,9.631,9.631,0,0,1-2.986,1.1,4.774,4.774,0,0,0-3.433-1.436A4.628,4.628,0,0,0,11.25.722a4.4,4.4,0,0,0,.122,1.037A13.51,13.51,0,0,1,1.677-2.992,4.421,4.421,0,0,0,1.04-.706,4.506,4.506,0,0,0,3.133,3.078,4.789,4.789,0,0,1,1,2.51c0,.019,0,.038,0,.058A4.59,4.59,0,0,0,4.776,7.025a4.873,4.873,0,0,1-1.24.16A4.829,4.829,0,0,1,2.652,7.1a4.691,4.691,0,0,0,4.394,3.158A9.643,9.643,0,0,1,1.2,12.207a9.9,9.9,0,0,1-1.122-.063,13.647,13.647,0,0,0,7.209,2.043'
                      transform='translate(13.345 19.708)'
                      fill='#ededed'
                    />
                  </g>
                </svg>
              </a>
              <a
                href='https://www.linkedin.com/company/vighohq'
                target='_blank'
              >
                <svg
                  className='footer__icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width={50}
                  height={50}
                  viewBox='0 0 50 50'
                >
                  <g
                    id='Group_55196'
                    data-name='Group 55196'
                    transform='translate(0.148)'
                  >
                    <rect
                      id='Rectangle_12051'
                      data-name='Rectangle 12051'
                      width={50}
                      height={50}
                      rx={10}
                      transform='translate(-0.148)'
                      fill='#fff'
                      opacity='0.1'
                    />
                    <path
                      id='Path_200943'
                      data-name='Path 200943'
                      d='M41.553,61.631V49.349H37.471V61.631h4.083Zm-2.04-13.959a2.284,2.284,0,1,0-.027,0h.026Zm4.3,13.959h4.082V54.773a2.8,2.8,0,0,1,.134-1,2.234,2.234,0,0,1,2.095-1.493c1.477,0,2.068,1.126,2.068,2.777v6.57h4.082V54.589c0-3.772-2.014-5.528-4.7-5.528a4.067,4.067,0,0,0-3.706,2.069h.027V49.349H43.813c.053,1.152,0,12.282,0,12.282Z'
                      transform='translate(-21.467 -27.665)'
                      fill='#fff'
                    />
                  </g>
                </svg>
              </a>
              <a href='https://www.facebook.com/vighohq/' target='_blank'>
                <svg
                  className='footer__icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width={50}
                  height={50}
                  viewBox='0 0 50 50'
                >
                  <g
                    id='Group_55197'
                    data-name='Group 55197'
                    transform='translate(0.222)'
                  >
                    <rect
                      id='Rectangle_12051'
                      data-name='Rectangle 12051'
                      width={50}
                      height={50}
                      rx={10}
                      transform='translate(-0.222)'
                      fill='#fff'
                      opacity='0.1'
                    />
                    <path
                      id='Path_200944'
                      data-name='Path 200944'
                      d='M9.412-24.338q-1.982,0-1.982,1.727v1.387H10.6V-17.8H7.43V-7.576H3.1V-17.8H.663v-3.426H3.1v-1.331a6.178,6.178,0,0,1,.481-2.562,3.533,3.533,0,0,1,1.274-1.571,5.975,5.975,0,0,1,1.586-.736,6.052,6.052,0,0,1,1.671-.227,8.443,8.443,0,0,1,2.492.311v3.086q-.142,0-.552-.042T9.412-24.338Z'
                      transform='translate(19.248 42.584)'
                      fill='#fff'
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className='footer__contact'>
            <h1>Contact us</h1>
            <p className='footer__contact--whatsp'>Whatsapp: 09055555819</p>
            <p className='footer__contact--email'>Email: support@govigho.com</p>
            <p className='footer__contact--address'>
              Office Address: Idado Estate, <br />
              Lekki phase II, Lagos state
            </p>
          </div>
        </div>
      </footer>
      <OffCanvas handleClose={handleClose} show={show} />
    </div>
  )
}

export default Home
