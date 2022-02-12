import axios from 'axios'

axios.defaults.baseURL = 'https://shazam-core.p.rapidapi.com/v1'
axios.defaults.headers = {
  'x-rapidapi-host': process.env.REACT_APP_HOST,
  'x-rapidapi-key': process.env.REACT_APP_API_KEY,
}

export const fetchCharts = async (countryCode, limit) => {
  const options = {
    method: 'get',
    url: '/charts/country',
    params: { country_code: countryCode, limit },
  }

  try {
    const { data } = await axios.request(options)
    return data
  } catch (err) {
    console.log(err)
  }
}
