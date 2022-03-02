import axios from 'axios'

export const addWaitlist = async (waitlist) => {
  try {
    const { data } = await axios
      .post(`/api/waitlist`, waitlist)
      .catch((err) => {
        console.log(err)
      })

    if (data) {
      return data
    }
  } catch (error) {
    console.log(error)
  }
}
