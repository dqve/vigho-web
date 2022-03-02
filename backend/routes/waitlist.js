import express from 'express'
const router = express.Router()
import { addWaitlist, getWaitlist } from '../controllers/waitlistController.js'

router.route('/:passward').get(getWaitlist)
router.route('/').post(addWaitlist)

export default router
