import { useEffect, useState } from 'react'
import { Music, LoaderBar } from './components/'
import { fetchCharts } from './api'
import { makeRandomNumber } from './lib/makeRandomNumber'
import { countryCode } from './constant/countryCode'

function App() {
  const [charts, setCharts] = useState([])
  const [randomMusic, setRandomMusic] = useState('')
  const [limit, setLimit] = useState(100) // music chart limit
  const [currentCountryCode, setCurrentCountryCode] = useState('KR')
  const [isLoading, setIsLoading] = useState(true)
  const [isStandBy, setIsStandBy] = useState(false)

  useEffect(() => {
    const getCharts = async () => {
      setIsLoading(true)
      const fetchedCharts = await fetchCharts(currentCountryCode, limit)
      setCharts(fetchedCharts)
      setIsLoading(false)
    }
    getCharts()
  }, [currentCountryCode, limit])

  const getRandomMusic = () => {
    setIsStandBy(false)
    if (typeof charts === 'undefined') {
      return
    }
    const index = makeRandomNumber(limit)
    setRandomMusic(charts[index])
    setIsStandBy(true)
  }

  return (
    <div className="appContainer">
      {isLoading && <LoaderBar />}
      <Music
        getRandomMusic={getRandomMusic}
        randomMusic={randomMusic}
        isStandBy={isStandBy}
        setCurrentCountryCode={setCurrentCountryCode}
        countryCode={countryCode}
      />
    </div>
  )
}

export default App
