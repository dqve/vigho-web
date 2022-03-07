import React, { useEffect } from 'react'
import './terms.css'

const Terms = () => {
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
            <a href='/'>
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
              <a href='privacy' className='navigation__link'>
                Privacy Policy
              </a>
            </li>
            <li className='navigation__list'>
              <a href='#' className='navigation__link nav__active'>
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
      </header>
      <main>
        <div className='hero__container-terms'>
          <section className='hero__section privacy__hero'>
            <h1>Terms &amp; Conditions</h1>
            <h4>Terms and Conditions</h4>
            <h2 className='heading-2'>1. DEFINITIONS</h2>
            <p>
              “Agent” means a person or entity who successfully subscribes to
              use our platform. The term Agent shall include the said Agent’s
              personal representatives, successors in title and assigns as well
              as persons acting with the Agent’s authority such as servants or
              employees. “Cash” means the lawful currency of the Federal
              Republic of Nigeria. “Charges” means the charges for the use of
              our platform as may be prescribed and published by Vigho Solutions
              Limited, from time to time. “Contract”: means the terms and
              conditions contained herein and as may be amended in writing, from
              time to time by Vigho Solutions Limited. “VIGHO”, “we”, “us”,
              “our”, means Vigho Solutions Limited and where applicable, its
              employees, officers, and authorized agents. “Wallet” means a
              digital account on our platform that, when funded, allows an Agent
              to make electronic transactions on behalf of members of the
              public. “PIN” means your personal identification number is the
              password you choose to access and operate your Wallet and includes
              the one-time 4-digit PIN sent to you on registration for the
              purpose of activating your Wallet. “Recipient” means a member of
              the public or corporate entity to whom a fund transfer has been
              initiated through our platform and services. “You” or “your” means
              the Agent who has registered to use our platform.
            </p>
            <h2 className='heading-3'>
              2. ACCESS TO VIGHO’S PLATFORM AND SERVICES
            </h2>
            <p>
              To access our platform or some of the resources it offers, you
              will be required to provide certain registration details or other
              information i.e. bank account or card details, information about
              the location of your business, etc. You represent and warrant that
              all the information you provide will be correct, current, and
              complete. If we believe that the information you provide is not
              current, incorrect, incomplete, or misleading, we reserve the
              right to refuse you access to our platform or any of our services
              and to terminate or suspend your access at any time, where such
              discovery is made.
            </p>
            <h2 className='heading-3'>3. PASSWORD SAFETY</h2>
            <p>
              You are responsible for safeguarding the password that you use to
              access our platform. We encourage you to use “strong” passwords
              (passwords that use a combination of upper and lowercase letters,
              numbers, and symbols). We cannot and will not be liable for any
              loss or damage arising from your failure to comply with the above.
            </p>
            <h2 className='heading-3'>4. AGE LIMITATIONS</h2>
            <p>
              To use our platform or services, you must be, and represent and
              warrant that you are 18 years and over and of legal competence to
              enter into a binding agreement with us, and are not otherwise
              prohibited from using our platform and services in accordance with
              these terms and conditions or any relevant laws.
            </p>
            <h2 className='heading-3'>5. IDENTIFICATION</h2>
            <p>
              1. To use our platform and services, you must provide sufficient
              proof of identification (ID). The following items shall constitute
              sufficient proof of (ID): original national ID card, driver’s
              license or international passport if you are a Nigerian national;
              and original alien certificate, diplomatic ID, or passport if you
              are a foreign national. <br />
              2. Vigho Solutions Limited may at its sole discretion, reject any
              attempt to our platform or our services if any of the requirements
              set out in 5a above are not met or if you fail to provide us with
              satisfactory proof of ID.
            </p>
            <h2 className='heading-3'>6. PRIVACY</h2>
            <p>
              Your use of our platform and services signifies your continuing
              consent to our privacy policy (insert a hyperlink to the privacy
              policy here), which governs our collection and use of personal
              information that you supply to us.
            </p>
            <h2 className='heading-4'>7. CHANGES</h2>
            <p>
              TO OUR PLATFORM OR SERVICES We may discontinue our platform and/or
              any of our services (temporarily or permanently). We also reserve
              the right to change any information, content, or feature on our
              platform or services at any time with or without notice. We also
              retain the right to create limits on the use of our platform or
              services at our sole discretion. Your use of our platform or
              services after such changes are implemented constitutes your
              acknowledgment and acceptance of the changes. Please consult these
              terms of use regularly to acquit yourself with any changes that
              may apply. You can review the most current version of these Terms
              and Conditions by clicking on the “Terms of Use” link on our
              platform.
            </p>
            <h2 className='heading-5'>8. SERVICE DISPOSITION</h2>
            <p>
              Our platform permits registered Agents to make a profit while
              performing financial transactions on behalf of members of the
              public including without limitation, transfers, withdrawals,
              airtime purchases, paying cable and electricity bills, using VIGHO
              Wallet. All transactions shall be denominated in Nigerian Naira
              and Kobo. Our platform may not recognize any other monetary value.
              You hereby agree to round off any transaction value to the nearest
              Nigerian currency. Subject to the prescribed transaction limits
              and the provisions of these Terms and Conditions, the balance of
              your VIGHO Wallet is redeemable at any time and shall be disposed
              of only in accordance with your instructions given on our
              platform. Vigho Solutions Limited may in its absolute discretion,
              restrict or limit the number of VIGHO Wallets that Agents may
              operate at any one time.
            </p>
            <h2 className='heading-6'>9. VIGHO WALLET USAGE</h2>
            <p>
              After your VIGHO Wallet has been opened and activated, you will be
              able to initiate the following Transactions; Fund your VIGHO
              Wallet through a debit card; Send money to personal or third party
              accounts from your VIGHO Wallet(s); Withdraw cash from your VIGHO
              Wallet through participating ATM networks; Purchase Prepaid
              Airtime; Pay utility bills or make one-off or periodic payments or
              remittances to participating utility providers, financial
              institutions charity organizations, etc.; Manage your VIGHO Wallet
              (e.g. balance enquiries, change PIN, etc.); Any other transactions
              may be introduced by VIGHO from time to time. No interest will be
              paid on any funds held in your VIGHO Wallet. Vigho Solutions
              Limited does not warrant that all functionalities and or
              transactions on our platform shall be available at all times.
              VIGHO may withdraw any functionality and or transaction or the
              entire platform as a direct result of new or amended legislation,
              statutory instrument, government regulations or policy, or any
              other compelling reason. Vigho Solutions Limited may provide
              additional functionalities and or transactions on our platform
              following integration with platforms of financial institutions and
              other entities providing you with specified services. Such
              functionalities may give you limited access to platforms of
              financial institutions or other entities. By using such
              functionalities to gain access to other platforms, you hereby
              agree to indemnify Vigho Solutions Limited against, and hold VIGHO
              harmless from any losses arising from your access to such external
              platforms. In the event of any review of our business planning,
              technical, public interest or operational reasons, changes within
              the industry, recommendations from regulatory bodies, or similar
              events, Vigho Solutions Limited may vary these terms and
              conditions or policies affecting usage and shall notify you of
              such changes through appropriate means. Your continued use of our
              platform shall be deemed to be your acceptance of all such varied
              terms and conditions.
            </p>
            <h2 className='heading-6'>10. TRANSFER OF FUNDS</h2>
            <p>
              Transaction limits and charges as prescribed by Vigho Solutions
              Limited shall apply each time you send money, pay bills or use
              other functionalities that process the transfer of funds from your
              VIGHO Wallet. Your transaction request will not be completed:{' '}
              <br />
              1. The funds in your VIGHO Wallet are not sufficient to complete
              the transaction and or to cover the charges for the transaction;{' '}
              <br />
              2. If you have reached the maximum VIGHO Wallet balance limit
              prescribed by our platform; <br />
              3. If you have reached the daily limit prescribed by our platform;
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

export default Terms
