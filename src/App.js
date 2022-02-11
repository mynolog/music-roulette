import { useEffect, useState } from 'react'
import { Music } from './components/'
import { fetchCharts } from './api'
import { makeRandomNumber } from './lib/makeRandomNumber'

function App() {
  const [charts, setCharts] = useState([])
  const [randomMusic, setRandomMusic] = useState('')
  const [limit, setLimit] = useState(100) // music chart limit
  const [isLoading, setIsLoading] = useState(true)
  const [isStandBy, setIsStandBy] = useState(false)

  useEffect(() => {
    const getCharts = async () => {
      const fetchedCharts = await fetchCharts()
      setCharts(fetchedCharts)
      setIsLoading(false)
    }
    getCharts()
  }, [])

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
      <Music
        getRandomMusic={getRandomMusic}
        randomMusic={randomMusic}
        isStandBy={isStandBy}
      />
    </div>
  )
}

export default App
