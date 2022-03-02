import asyncHandler from 'express-async-handler'
import Waitlist from '../models/waitlistModel.js'

// @desc    add to waitlist
// @route   POST /api/waitlist
// @access  Public
const addWaitlist = asyncHandler(async (req, res) => {
  const { foodie, vendor, fullName, email, phoneNumber } = req.body

  const waitlist = await Waitlist.create({
    foodie,
    vendor,
    fullName,
    email,
    phoneNumber,
  })

  if (waitlist) {
    res.status(201).json({
      success: true,
      message: 'Added to the waitlist',
    })
  } else {
    res.status(400)
    throw new Error('Invalid data')
  }
})

// @desc    get  waitlist
// @route   Get /api/waitlist/:passward
// @access  Private
const getWaitlist = asyncHandler(async (req, res) => {
  const { passward } = req.params

  if (passward == process.env.PASSWORD) {
    const waitlist = await Waitlist.find()
    if (waitlist) {
      res.status(201).json({
        success: true,
        waitlist,
      })
    } else {
      res.status(400)
      throw new Error('Error')
    }
  } else {
    res.status(401).json({
      success: false,
      message: 'unauthorized',
    })
  }
})

export { addWaitlist, getWaitlist }
