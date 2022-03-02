import mongoose from 'mongoose'

const waitlistSchema = mongoose.Schema(
  {
    foodie: {
      type: Boolean,
      default: false,
    },
    vendor: {
      type: Boolean,
      default: false,
    },

    fullName: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      // unique: true,
      required: true,
    },
    phoneNumber: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Waitlist = mongoose.model('Waitlist', waitlistSchema)

export default Waitlist
