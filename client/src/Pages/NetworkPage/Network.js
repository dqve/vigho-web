import React, { useEffect } from 'react'
import './network.css'

const Network = () => {
  useEffect(() => {
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
  }, [])
  return (
    <div>
      <header className='container header-network'>
        {/* navigation */}
        <nav className='navigation'>
          <div className='brand'>
            <a href='/'>
              <img
                src='img/logo.svg'
                alt='Vigho Logo'
                className='brand__logo-img'
              />
              <span className='brand__logo-text'>Vigho</span>
            </a>
          </div>
          <ul className='navigation__lists-network'>
            <li className='navigation__list navig__active'>
              <a href='privacy' className='navigation__link'>
                Privacy Policy
              </a>
            </li>
            <li className='navigation__list'>
              <a href='terms' className='navigation__link'>
                Terms &amp; Conditions
              </a>
            </li>
            <div className='navigation__button--container'>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSfRNh6F_U2wXiGVrDwCOR08EcoIPCDZY-16dGZJ3Xd09gMBuw/viewform?embedded=true'
                target='_blank'
              >
                <button className='button'>Become an Agent</button>
              </a>
            </div>
          </ul>
          {/* mobile navigation */}
          <div className='mobile__nav'>
            <div className='navContents'>
              <div className='mobile__brand'>
                <a href='/' className='mobile-list'>
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
                  <a href='privacy'>Privacy Policy</a>
                </li>
                <li className='mobile-list'>
                  <a href='terms'>Terms &amp; Conditions</a>
                </li>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfRNh6F_U2wXiGVrDwCOR08EcoIPCDZY-16dGZJ3Xd09gMBuw/viewform?embedded=true'>
                  <button className='mobile__button mobile-list'>
                    Become an Agent
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
        {/* navigation ends */}
        {/* hero */}
        <div className='hero__container-network container'>
          <section className='hero__content'>
            <div className='hero__content--texts'>
              <h1>
                BOLD
                <span className='green__color'> BETTER </span>
                BANKING
                <span className='green__rope'>
                  <svg
                    className='green__rope--img'
                    xmlns='http://www.w3.org/2000/svg'
                    width='340.738'
                    height='21.018'
                    viewBox='0 0 340.738 21.018'
                  >
                    <path
                      id='Path_200938'
                      data-name='Path 200938'
                      d='M-88.5,476.171S93.718,457.114,193.639,461.3l.588.027c23.041,2.086,41.293,12.122,52.235,14.845'
                      transform='translate(91.246 -458.183)'
                      fill='none'
                      stroke='#15a05d'
                      strokeLinecap='round'
                      strokeWidth={5}
                    />
                  </svg>
                </span>
              </h1>
              <p>
                Dependable Agency banking platform; <br />
                For the Unbanked, Underbanked, and <br />
                Underserved communities.
              </p>
              <div className='hero__content--button'>
                <a
                  href='https://docs.google.com/forms/d/e/1FAIpQLSfRNh6F_U2wXiGVrDwCOR08EcoIPCDZY-16dGZJ3Xd09gMBuw/viewform?embedded=true'
                  target='_blank'
                >
                  <button className='button'>Become an Agent</button>
                </a>
              </div>
            </div>
            <div className='hero__content--image'>
              <img
                src='img/Pos-web.svg'
                alt='pos and banking'
                className='hero__content--img'
              />
              <img
                src='img/Pos-mobile.svg'
                alt='pos and banking mobile'
                className='hero__content-mobile_img'
              />
            </div>
          </section>
        </div>
        {/* hero ends*/}
      </header>
      <main className='main__container'>
        <span className='line__1'>
          <img src='img/lines2.svg' alt='' />
        </span>
        {/* agent */}
        <div className='agent__container container'>
          <section className='agent__main'>
            <div className='agent__main--header'>
              <h1>
                Why You Should Become A
                <span className='green__color'> Vigho </span>
                Agent
              </h1>
              <p>
                Make transfers, withdrawals, and pay bills for your customers.
              </p>
            </div>
            <section className='agent__section'>
              <div className='agent__section--image'>
                <img src='img/phone.svg' alt='Wallet Balance' />
              </div>
              <div className='agent__section--contents'>
                {/*first wrapper*/}
                <div className='agent__reasons-wrapper'>
                  <svg
                    className='agent--icon'
                    id='Group_55187'
                    data-name='Group 55187'
                    xmlns='http://www.w3.org/2000/svg'
                    width={60}
                    height='60.612'
                    viewBox='0 0 60 60.612'
                  >
                    <rect
                      id='Rectangle_12382'
                      data-name='Rectangle 12382'
                      width={60}
                      height='60.612'
                      rx={30}
                      fill='#b7e2cd'
                    />
                    <g id='profile-2user' transform='translate(13.867 14.333)'>
                      <g id='Group_55188' data-name='Group 55188'>
                        <g id='Group_55187-2' data-name='Group 55187'>
                          <path
                            id='Path_200939'
                            data-name='Path 200939'
                            d='M12.214-14.507h-.107a.723.723,0,0,0-.24,0,6.89,6.89,0,0,1-6.787-6.907A6.931,6.931,0,0,1,12-28.333a6.931,6.931,0,0,1,6.92,6.92,6.9,6.9,0,0,1-6.667,6.907h-.04ZM12-26.333a4.934,4.934,0,0,0-4.92,4.92,4.885,4.885,0,0,0,4.733,4.907,2.218,2.218,0,0,1,.427,0,4.912,4.912,0,0,0,4.68-4.907A4.934,4.934,0,0,0,12-26.333Zm10.053,12a.369.369,0,0,1-.12-.013,1.056,1.056,0,0,1-1.16-.88.972.972,0,0,1,.827-1.107c.16-.013.333-.013.48-.013a3.662,3.662,0,0,0,3.467-3.667,3.665,3.665,0,0,0-3.667-3.667.987.987,0,0,1-1-.987,1.007,1.007,0,0,1,1-1A5.679,5.679,0,0,1,27.547-20a5.654,5.654,0,0,1-5.453,5.667h-.04ZM12.226.067A13.17,13.17,0,0,1,5-1.933,5.722,5.722,0,0,1,2.133-6.667,5.781,5.781,0,0,1,5-11.427a14.117,14.117,0,0,1,14.453,0,5.752,5.752,0,0,1,2.867,4.733,5.781,5.781,0,0,1-2.867,4.76,13.2,13.2,0,0,1-7.227,2ZM6.106-9.747A3.834,3.834,0,0,0,4.133-6.653,3.825,3.825,0,0,0,6.106-3.587a12.049,12.049,0,0,0,12.24,0A3.834,3.834,0,0,0,20.319-6.68a3.825,3.825,0,0,0-1.973-3.067,12.111,12.111,0,0,0-12.24,0ZM24.454-2.333a.984.984,0,0,1-.973-.8,1.014,1.014,0,0,1,.773-1.187,5.4,5.4,0,0,0,2.213-.973A2.608,2.608,0,0,0,27.64-7.347a2.586,2.586,0,0,0-1.16-2.04,5.582,5.582,0,0,0-2.187-.973,1.008,1.008,0,0,1-.76-1.2,1.008,1.008,0,0,1,1.2-.76,7.441,7.441,0,0,1,2.96,1.333,4.586,4.586,0,0,1,1.947,3.64,4.644,4.644,0,0,1-1.96,3.653A7.222,7.222,0,0,1,24.667-2.36.624.624,0,0,1,24.454-2.333Z'
                            transform='translate(0 30)'
                            fill='#212121'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className='agent__reasons-texts'>
                    <h1>Reliable &amp; Secure Network</h1>
                    <p>
                      With Vigho, you can be sure not to lose customers and
                      transactions due to incessant downtimes and network
                      issues.
                    </p>
                  </div>
                </div>
                {/*first wrapper*/}
                {/*second wrapper*/}
                <div className='agent__reasons-wrapper second__wrapper'>
                  <svg
                    className='agent--icon'
                    id='Group_55189'
                    data-name='Group 55189'
                    xmlns='http://www.w3.org/2000/svg'
                    width={60}
                    height='60.612'
                    viewBox='0 0 60 60.612'
                  >
                    <rect
                      id='Rectangle_12382'
                      data-name='Rectangle 12382'
                      width={60}
                      height='60.612'
                      rx={30}
                      fill='#b7e2cd'
                    />
                    <g id='send-sqaure-2' transform='translate(14.332 14.333)'>
                      <g id='Group_55191' data-name='Group 55191'>
                        <g id='Group_55190' data-name='Group 55190'>
                          <path
                            id='Path_200940'
                            data-name='Path 200940'
                            d='M20,.333H12C4.76.333,1.667-2.76,1.667-10v-8C1.667-25.24,4.76-28.333,12-28.333h8c7.24,0,10.333,3.093,10.333,10.333v8C30.333-2.76,27.24.333,20,.333ZM12-26.333c-6.147,0-8.333,2.187-8.333,8.333v8c0,6.147,2.187,8.333,8.333,8.333h8c6.147,0,8.333-2.187,8.333-8.333v-8c0-6.147-2.187-8.333-8.333-8.333Zm7.773,13.24a1.007,1.007,0,0,1-1-1v-4.653H14.12a1.007,1.007,0,0,1-1-1,1.007,1.007,0,0,1,1-1h5.653a1.007,1.007,0,0,1,1,1v5.653A1.007,1.007,0,0,1,19.773-13.093Zm-7.547,1.88a.989.989,0,0,1-.707-.293,1.006,1.006,0,0,1,0-1.413l7.547-7.547a1.006,1.006,0,0,1,1.413,0,1.006,1.006,0,0,1,0,1.413l-7.547,7.547a.967.967,0,0,1-.707.293ZM16-5.693A26.387,26.387,0,0,1,7.681-7.04a1,1,0,0,1-.627-1.267.993.993,0,0,1,1.267-.627,24.444,24.444,0,0,0,15.373,0,1,1,0,0,1,1.267.627,1,1,0,0,1-.627,1.267A26.154,26.154,0,0,1,16-5.693Z'
                            transform='translate(0 30)'
                            fill='#212121'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className='agent__reasons-texts'>
                    <h1>Instant settlement on transactions</h1>
                    <p>
                      We guarantee that all your transactions are settled
                      instantly, “No Stories”.
                    </p>
                  </div>
                </div>
                {/*second wrapper*/}
                {/*third wrapper*/}
                <div className='agent__reasons-wrapper'>
                  <svg
                    className='agent--icon'
                    id='Group_55192'
                    data-name='Group 55192'
                    xmlns='http://www.w3.org/2000/svg'
                    width={60}
                    height='60.612'
                    viewBox='0 0 60 60.612'
                  >
                    <rect
                      id='Rectangle_12382'
                      data-name='Rectangle 12382'
                      width={60}
                      height='60.612'
                      rx={30}
                      fill='#b7e2cd'
                    />
                    <g id='award4' transform='translate(14.321 14.333)'>
                      <g id='Group_55194' data-name='Group 55194'>
                        <g id='Group_55193' data-name='Group 55193'>
                          <path
                            id='Path_200941'
                            data-name='Path 200941'
                            d='M16,.333a4.589,4.589,0,0,1-2.227-.547L7.466-3.853C4.853-5.613,4.68-5.933,4.68-8.693v-6.613c0-2.76.173-3.08,2.733-4.8l6.373-3.68a4.755,4.755,0,0,1,4.44,0l6.307,3.64c2.613,1.76,2.787,2.08,2.787,4.84v6.613c0,2.76-.173,3.08-2.733,4.8L18.213-.213A4.4,4.4,0,0,1,16,.333Zm0-22.667a2.526,2.526,0,0,0-1.227.28l-6.307,3.64C6.68-17.2,6.68-17.2,6.68-15.307v6.613c0,1.893,0,1.893,1.853,3.147l6.253,3.6a2.8,2.8,0,0,0,2.44,0l6.307-3.64C25.32-6.8,25.32-6.8,25.32-8.693v-6.613c0-1.893,0-1.893-1.853-3.147l-6.253-3.6A2.437,2.437,0,0,0,16-22.333Zm7.334,3.507a1.007,1.007,0,0,1-1-1v-3.507c0-2.107-.893-3-3-3H12.667c-2.107,0-3,.893-3,3v3.413a1.007,1.007,0,0,1-1,1,1,1,0,0,1-1-1v-3.413c0-3.227,1.773-5,5-5h6.667c3.227,0,5,1.773,5,5v3.507A1.007,1.007,0,0,1,23.333-18.827ZM18.174-6.493a2.282,2.282,0,0,1-.867-.173L16-7.173l-1.307.52a2.024,2.024,0,0,1-1.96-.173A2.045,2.045,0,0,1,11.96-8.64l.08-1.4-.893-1.08a2.031,2.031,0,0,1-.427-1.933,2.012,2.012,0,0,1,1.48-1.293l1.36-.347.76-1.187a1.962,1.962,0,0,1,3.373,0l.76,1.187,1.36.347a2.012,2.012,0,0,1,1.48,1.293,2.048,2.048,0,0,1-.44,1.92l-.893,1.08.08,1.4a2.06,2.06,0,0,1-.773,1.813,1.87,1.87,0,0,1-1.093.347ZM12.694-12.4l.893,1.08a2.128,2.128,0,0,1,.453,1.4l-.08,1.4,1.307-.52a2.133,2.133,0,0,1,1.467,0l1.307.52-.08-1.4a2.152,2.152,0,0,1,.453-1.4l.893-1.08-1.36-.347A2.2,2.2,0,0,1,16.76-13.6l-.747-1.173-.76,1.173a2.156,2.156,0,0,1-1.187.867l-1.373.333Z'
                            transform='translate(0 30)'
                            fill='#212121'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className='agent__reasons-texts'>
                    <h1>Best Pricing</h1>
                    <p>
                      We make it easy to provide quality access to financial
                      services in your local communities at affordable fees.
                    </p>
                  </div>
                </div>
                {/*third wrapper*/}
              </div>
            </section>
          </section>
          <span className='line__2'>
            <img src='img/Lines3.svg' alt='' />
          </span>
        </div>
        {/* agent ends */}
        {/* customers */}
        <div className='customers__conatiner conatiner'>
          <section className='customers__section'>
            <div className='customers__section--texts'>
              <h1>Peerless Customer support</h1>
              <p>
                Be reminded that we are in this together. Which is why we have
                made available multiple channels through which you can reach us
                to resolves your issues with the speed of light.
              </p>
              <div className='hero__content--button'>
                <a href='#'>
                  <button className='button'>Learn More</button>
                </a>
              </div>
            </div>
            <div className='customers__section--image'>
              <img src='img/girl.svg' alt='Girl' />
            </div>
          </section>
        </div>
        {/* customers ends*/}
        {/* testimonial__conatiner */}
        <div className='testimonial__conatiner conatiner'>
          <section className='testimonial__section'>
            <div className='testimonial__section--header'>
              <p className='green__color'>Testimonials</p>
              <h1>Hear from our Agents</h1>
            </div>
            <div className='testimonial__section--container'>
              <div className='testimonial__section--image'>
                <img src='img/teacher.jpeg' alt='' />
              </div>
              <div className='testimonial__section--texts'>
                <h1>Fast &amp; Reliable</h1>
                <p>
                  “I’ve never used a platform so swift and fast with its
                  transactions and I trust this app more than my friends, lol”.
                </p>
                <div className='testimonial__section--slide'>
                  <div className='slide__list active'>Venessa Agbo</div>
                  <div className='slide__list'>Aisha Samson</div>
                  <div className='slide__list'>Enyo Prime</div>
                  <div className='slide__list'>Alicia Keys</div>
                  <div className='slide__list'>Enyo Prime</div>
                  <div className='slide__list'>Aisha Samson</div>
                  <div className='slide__list'>Enyo Prime</div>
                  <div className='slide__list'>Enyo Prime</div>
                  <div className='slide__list'>Enyo Prime</div>
                  <div className='slide__list'>Enyo Prime</div>
                  <div className='slide__list'>Enyo Prime</div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* testimonial__conatiner ends*/}
        {/* newsletter__conatiner */}
        <div className='newsletter__container'>
          <section className='newletter__section'>
            <div className='newletter__section--texts'>
              <h1>Coming soon to your mobile</h1>
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
                    placeholder='Enter Email Address'
                    required
                  />
                  <a
                    href='https://docs.google.com/forms/d/e/1FAIpQLSfUv_uGp8z869NVHf35Jpg7fIXmOLXLQJZHCWkSfMxrLUSOLg/viewform?embedded=true'
                    className='form__btn-container'
                    target='_blank'
                  >
                    <button type='submit' className='form__button'>
                      Join waitlist
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className='newsletter__section--image'>
              <img src='img/Phone3.svg' alt='wallet' />
            </div>
          </section>
          <div className='line__3'>
            <img src='img/lines2.svg' alt='line' />
          </div>
          <div className='line__4'>
            <img src='img/lines2.svg' alt='line' />
          </div>
        </div>
        {/* newsletter__conatiner ends*/}
        {/* Get started */}
        <div className='started__container container'>
          <section className='started__contents'>
            <h1>
              Become a<span className='green__color'>Vigho</span>
              Agent
            </h1>
            <p>
              Make transfers, withdrawals, and pay bills for your customers And
              make more money.
            </p>
            <div className='started__contents--button'>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSfRNh6F_U2wXiGVrDwCOR08EcoIPCDZY-16dGZJ3Xd09gMBuw/viewform?embedded=true'
                target='_blank'
              >
                <button className='button'>Get Started</button>
              </a>
            </div>
          </section>
        </div>
        {/* Get started ends*/}
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
    </div>
  )
}

export default Network
