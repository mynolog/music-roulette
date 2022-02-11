import axios from 'axios'

axios.defaults.baseURL = 'https://shazam-core.p.rapidapi.com/v1'
axios.defaults.headers = {
  'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
  'x-rapidapi-key': '4a3f424895msh6e9b210d0323fd9p13f1c4jsn63818c9ece13',
}

export const fetchCharts = async (countryCode = 'KR', limit = 100) => {
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
