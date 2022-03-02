import React, { useEffect } from 'react'
// import './privacy.css'

const Privacy = () => {
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
      <header className='privacy__header'>
        {/* navigation */}
        <nav className='navigation'>
          <div className='brand'>
            <a href='home'>
              <img
                src='img/logo.svg'
                alt='Vigho Logo'
                className='brand__logo-img'
              />
              <span className='brand__logo-text'>Vigho</span>
            </a>
          </div>
          <ul className='navigation__lists'>
            <li className='navigation__list'>
              <a href='#' className='navigation__link nav__active'>
                Privacy Policy
              </a>
            </li>
            <li className='navigation__list'>
              <a href='terms' className='navigation__link'>
                Terms &amp; Conditions
              </a>
            </li>
            <div className='navigation__button--container'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfRNh6F_U2wXiGVrDwCOR08EcoIPCDZY-16dGZJ3Xd09gMBuw/viewform?embedded=true'>
                <button className='button'>Become an Agent</button>
              </a>
            </div>
          </ul>
          {/* mobile navigation */}
          <div className='mobile__nav'>
            <div className='navContents'>
              <div className='mobile__brand'>
                <a href='home' className='mobile-list'>
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
      </header>
      <main>
        <div className='hero__container'>
          <section className='hero__section privacy__hero'>
            <h1>Privacy Policy</h1>
            <h4>Information Collection</h4>
            <p>
              Vigho Solutions Limited understands how important your
              information, how it is handled used and transmitted is to you.
              Please read this Privacy Policy carefully to learn more about how
              information is gathered, stored, and processed by Vigho Solutions
              Limited. This Privacy Policy is a component of our Terms of Use.
            </p>
            <h2 className='heading-2'>
              This document takes effect from December 1, 2021.
            </h2>
            <p>
              Information Collection We may collect information about you that
              will help identify you as an individual such as your name,
              address, phone number, email address, date of birth, gender, debit
              card details, bank information, and other information that might
              be considered private. We may collect this information during
              registration on mobile or web Apps. Information about your device
              and software application; operating system, type of browser,
              domain name, time, date, and others.
            </p>
            <h2 className='heading-3'>Information Usage</h2>
            <p>
              The information collected from you is used in different ways. We
              use the information to process your registration, attend to your
              service requests, quality assurance purposes, gather information
              about our users, process payment in respect of services we offer
              to you, customize and improve the content of our APP, fulfill any
              other request you have made, conduct research and generally
              improve our service delivery to you. The information collected is
              also used to prepare reports for our internal use and for our
              current or potential partners e.g. investors, sponsors,
              advertisers, and other potential agents. 3. We may from time to
              time wish to provide you with information on new and exciting
              features of the APP or any other service we believe may be of
              interest to you. Sometimes, we might want to provide you with
              related information from third parties we think may be of interest
              to you. Your information could also be provided to selected third
              parties, our partners, or affiliates whose services we believe may
              be of interest to you. If you do not wish to receive these kinds
              of communications, you can opt-out by unchecking the appropriate
              announcement boxes during registration or on the user profile page
              on the APP. Alternatively, you can send an email to
              support@vigho.co We occasionally engage other companies to provide
              services on our behalf. These companies may use your personal
              information and or communicate with you. Only necessary
              information will be provided in such cases. In the case of legal
              proceedings and regulatory investigations, we reserve the right to
              share or transmit your information with and to regulators (i.e.
              any statutory demand, subpoena, warrant, or court order) to
              protect against the fraudulent, abusive, unlawful use of the APP,
              to protect our rights or property, to defend the personal safety
              of Agents or when we believe in good faith that a situation
              involving danger or injury to any person requires disclosure. We
              shall not sell, share or offer information about you with third
              parties except in the manner described in this policy. We
              sometimes compare the information that we receive on the APP with
              information from other sources and channels. Such outside sources
              include information from third parties which enable us to
              reconcile our accounts, search results, links, and paid listings
              which we use to help prevent and detect fraud.
            </p>
            <h2 className='heading-3'>Cookies</h2>
            <p>
              A cookie is a small file that asks for permission to be on your
              computer’s hard drive. Cookies provide information regarding the
              device used by a visitor. Cookies allow applications or websites
              to respond to you.
            </p>
            <p>
              This allows the website or application to tailor its operations to
              your needs, likes, and dislikes collecting and remembering
              information about your preferences.
            </p>
            <p>
              We use cookies on our web platforms to identify you as a user and
              make your user experience easier, customize our services, content,
              and advertising; help you ensure that your account security is not
              compromised, mitigate risk and prevent fraud; and promote trust
              and safety on our website. Cookies allow our servers to remember
              your account information, your account log-in information when you
              visit our website, IP addresses, date and time of visits, monitor
              web traffic, and prevent fraudulent activities.
            </p>
            <p>
              If your browser or browser add-on permits, you have the choice to
              disable cookies on our website, however, this may limit your
              ability to use our website. The cookies we use include but are not
              limited to session cookies, persistent cookies, and third-party
              cookies.
            </p>
            <h2 className='heading-4'>Data Security</h2>
            <p>
              We employ appropriate technical and organizational security
              measures to prevent unauthorized access to information that we
              collect online.
            </p>
            <h2 className='heading-5'>Information Access</h2>
            <p>
              Some information that we collect and process about you can be
              edited or updated by you. Such as your name, email address, phone
              number, etc. Please ensure that all information provided is
              accurate and updated. You can notify us of such changes via email
              at support@vigho.co Categories of emails you will receive from us
              may include but are not limited to: Feature update, service
              disruptions, promotional offers, new products, and services.
            </p>
            <h2 className='heading-6'>Channels</h2>
            <p>
              We prescribe that you exercise caution while sharing your personal
              information on any of our channels, as these might be used by
              others.
            </p>
            <h2 className='heading-7'>Links</h2>
            <p>
              Links Our web or mobile Apps might redirect you to other external
              links to other applications or services. It is not our
              responsibility to determine what policies are adopted by such
              apps. Our privacy policies apply to our Apps and not that of other
              parties and affiliates. AGE RESTRICTION Use of this page, its
              features, and services are only permitted to individuals aged 18
              and above.
            </p>
            <h2 className='heading-8'>Conditions Of Use</h2>
            <p>
              By registering on the Vigho APP, you accept this policy and the
              Terms and Conditions of Use. If you disagree with parts or the
              entire policy, please do not proceed with registration or use this
              APP. Provision of your personal information implies that you
              consent to the use of all provided information as stated in this
              policy. If you continue to use the vigho App during or after this
              policy is updated, it is assumed that you accept the changes
              therein. By registering and using parts or all the features of the
              Vigho App you confirm that you have the legal rights to give
              consent.
            </p>
            <h2 className='heading-9'>Business Or Asset Transfer Or Sale</h2>
            <p>
              We may choose to acquire,or sell the business assets of our
              business or merge with another business. In such transactions,
              information obtained from you is generally one of the transferred
              business assets. In the event of such transfer, we will make
              reasonable efforts to provide notice on the APP and to notify you
              of any change in ownership or control of your personal
              information. Any casual inadvertence in providing such
              notification shall be considered a breach of our obligation under
              the policy.
            </p>
            <h2 className='heading-10'>Service Access</h2>
            <p>
              In order to access the Vigho APP and all its features, you will be
              required to register and activate a Vigho Wallet, which will grant
              you full access to the APP.
            </p>
            <h2 className='heading-11'>Policy Change Or Review</h2>
            <p>
              Our privacy policy is constantly reviewed. Changes to our privacy
              policy will be communicated to you in a timely fashion on this
              page. We are not obligated to inform you of these changes via
              other means. We advise that you visit this page frequently for any
              changes. You agree that it is your responsibility to review this
              privacy policy regularly for updated information.
            </p>
          </section>
        </div>
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
            <a href='index.html'>
              <img src='img/Vigho Icon white.svg' alt='footer logo' />
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

export default Privacy
