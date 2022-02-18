import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Music, MusicDetail, Chart, LoaderBar, Header } from './components/'
import { fetchCharts } from './api'
import { makeRandomNumber } from './lib/makeRandomNumber'
import { countryCodeList, topLimit } from './constant'

function App() {
  const [charts, setCharts] = useState([])
  const [randomMusic, setRandomMusic] = useState('')
  const [query, setQuery] = useState({
    currentCountryCode: 'KR',
    label: 'South Korea',
    limit: 100,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isStandBy, setIsStandBy] = useState(false)

  const { currentCountryCode, limit } = query

  const getCharts = async () => {
    setIsLoading(true)
    const fetchedCharts = await fetchCharts(currentCountryCode, limit)
    setCharts(fetchedCharts)
    setIsLoading(false)
  }

  useEffect(() => {
    getCharts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getRandomMusic = () => {
    setIsStandBy(false)
    if (typeof charts === 'undefined') {
      return
    }
    const index = makeRandomNumber(limit)
    if (typeof charts[index].images.coverart === 'undefined') {
      throw new Error('Music List is not ready...')
    }
    setRandomMusic(charts[index])
    setIsStandBy(true)
  }

  const { REACT_APP_BASE_URL: BASE_URL } = process.env

  return (
    <div className="appContainer">
      {isLoading && <LoaderBar />}
      <Header />
      <Routes>
        <>
          <Route
            path={`${BASE_URL}/*`}
            element={
              <Music
                getRandomMusic={getRandomMusic}
                randomMusic={randomMusic}
                setQuery={setQuery}
                query={query}
                countryCodeList={countryCodeList}
                topLimit={topLimit}
                isStandBy={isStandBy}
                getCharts={getCharts}
              />
            }
          />
          <Route path={`${BASE_URL}/music/:id`} element={<MusicDetail />} />
          <Route
            path={`${BASE_URL}/chart`}
            element={
              <Chart charts={charts} query={query} isLoading={isLoading} />
            }
          />
        </>
      </Routes>
    </div>
  )
}
export default App
