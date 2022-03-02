import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import './OffCanvas.css'
import BackBtn from '../../assets/back-btn.svg'
import tick from '../../assets/tick.png'
import { addWaitlist } from '../../actions/waitlistAction'
import { toast } from 'react-toastify'

function OffCanvas({ show, handleClose }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [foodie, setFoodie] = useState(true)
  const [vendor, setVendor] = useState(false)
  const [options, setOptions] = useState(1)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    const waitlist = {
      foodie: foodie,
      vendor: vendor,
      fullName: fullName,
      email: email,
      phoneNumber: number,
    }
    const response = await addWaitlist(waitlist)
    if (response) {
      setSuccess(true)
    } else {
      toast.error(' enter valid details or another email ', {
        position: 'top-center',
        theme: 'dark',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const selectDiscribtion = (options) => {
    if (options === 'foodie') {
      setOptions(1)
      setFoodie(true)
      setVendor(false)
    } else {
      setOptions(2)
      setFoodie(false)
      setVendor(true)
    }
  }

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      keyboard={true}
      placement='end'
      scroll={true}
      className='offSlide'
    >
      <Offcanvas.Header>
        {success ? (
          <Offcanvas.Title>
            <div className='header-con'>
              <div
                className='back-icon'
                onClick={() => {
                  setSuccess(false)
                  handleClose()
                }}
              >
                <img src={BackBtn} alt='back-btn' />
              </div>
            </div>
          </Offcanvas.Title>
        ) : (
          <Offcanvas.Title>
            <div className='header-con'>
              <div
                className='back-icon'
                onClick={() => {
                  setSuccess(false)
                  handleClose()
                }}
              >
                <img src={BackBtn} alt='back-btn' />
              </div>
              <div className='header-text'>
                <div className='header-bold'>Join the waitlist</div>
                <div className='header-mute'>
                  Take a few minutes to fill in our information and we’ll get in
                  touch with you.
                </div>
              </div>
            </div>
          </Offcanvas.Title>
        )}
      </Offcanvas.Header>

      {success ? (
        <Offcanvas.Body>
          <div className='success-con'>
            <div className='message-head'>Gracias!</div>
            <div className='animation-img'></div>
            <div className='message-text'>
              We are working to get this product out for you as soon as
              possible. We will alert you as soon as it’s ready for use
            </div>
          </div>
        </Offcanvas.Body>
      ) : (
        <Offcanvas.Body>
          <div className='header-body-con'>
            <div className='dis-label'>Which of this best describes you</div>
            <div className='dis-select-con'>
              <div className='dis-select'>
                <div
                  className='foodie'
                  onClick={() => {
                    selectDiscribtion('foodie')
                  }}
                >
                  <img
                    src={tick}
                    alt='tick'
                    className={options === 1 ? 'tick' : 'no-display'}
                  />
                </div>
                <div className='dis-text'>Foodie</div>
              </div>
              <div className='dis-select'>
                <div
                  className='vendor'
                  onClick={() => {
                    selectDiscribtion('vendor')
                  }}
                >
                  <img
                    src={tick}
                    alt='tick'
                    className={options === 2 ? 'tick' : 'no-display'}
                  />
                </div>
                <div className='dis-text'>Foodie</div>
              </div>
            </div>
            <form className='my-4'>
              <div class='form-group'>
                <label for='fullname' className='label-main'>
                  Full name
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='fullname'
                  aria-describedby='emailHelp'
                  placeholder='Type here...'
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div class='form-group'>
                <label for='exampleInputPassword1' className='label-main'>
                  Email Address
                </label>
                <input
                  type='email'
                  className='form-control form-control-lg'
                  id='exampleInputPassword1'
                  placeholder='Type here...'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class='form-group'>
                <label for='PhoneNumber' className='label-main'>
                  Your Phone Number (WhatsApp Preferred)
                </label>
                <input
                  type='number'
                  className='form-control form-control-lg'
                  id='PhoneNumber'
                  placeholder='+234'
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <button
                type='button'
                className='btn btn-success btn-lg btn-block mt-5'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </Offcanvas.Body>
      )}
    </Offcanvas>
  )
}

export default OffCanvas
