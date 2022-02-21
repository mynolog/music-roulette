import axios from 'axios'

axios.defaults.baseURL = 'https://shazam-core.p.rapidapi.com/v1'
axios.defaults.headers = {
  'x-rapidapi-host': process.env.REACT_APP_HOST,
  'x-rapidapi-key': process.env.REACT_APP_API_KEY,
}
axios.defaults.withCredentials = true

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

export const fetchMusicDetail = async (id) => {
  const options = {
    method: 'get',
    url: '/tracks/details',
    params: { track_id: id },
  }

  try {
    const { data } = await axios.request(options)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const fetchArtistDetail = async (id) => {
  const options = {
    method: 'get',
    url: '/artists/details',
    params: { artist_id: id },
  }

  try {
    const { data } = await axios.request(options)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const fetchRelatedTracks = async (id) => {
  const options = {
    method: 'get',
    url: '/artists/tracks',
    params: { artist_id: id },
  }

  try {
    const { data } = await axios.request(options)
    return data
  } catch (err) {
    console.log(err)
  }
}
