import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import qs from 'qs'
import { LoaderBar } from '..'
import { fetchSearchResult } from '../../api'
import styles from './SearchResult.module.css'

function SearchResult({ searchResult, setSearchResult }) {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const { artist } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  useEffect(
    () => {
      const getSearchResult = async () => {
        setIsLoading(true)
        const fetchedSearchResult = await fetchSearchResult(artist)
        setSearchResult(fetchedSearchResult)
        setIsLoading(false)
      }
      getSearchResult()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [artist]
  )
  return (
    <>
      {isLoading && <LoaderBar />}
      <div className={styles.searchResultContainer}>
        <ul className={styles.searchList}>
          {searchResult.map((result, index) => (
            <li className={styles.searchListItem} key={index}>
              {!result.avatar && <div className={styles.artistCoverEmpty} />}
              {result.avatar && (
                <Link to={`/artist/${result.id}`}>
                  <img
                    className={styles.artistCover}
                    src={result.avatar.default}
                    alt={result.name}
                  />
                </Link>
              )}

              <Link to={`/artist/${result.id}`}>
                <span>{result.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SearchResult
