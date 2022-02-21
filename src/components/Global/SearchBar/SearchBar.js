import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchSearchResult } from '../../../api'
import styles from './SearchBar.module.css'

function SearchBar({ search, setSearch, setSearchResult }) {
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const getSearchResult = async () => {
    const fetchedSearchResult = await fetchSearchResult(search)
    setSearchResult(fetchedSearchResult)
  }
  const onChange = (event) => {
    setSearch(event.target.value)
  }
  const onSubmit = (event) => {
    if (search.length < 3) {
      setError('최소 3자 이상 입력하세요.')
    }
    if (search.length > 2) {
      setError(null)
      getSearchResult()
      navigate(`/search/${search}`)
      setSearch('')
    }
  }

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search for Artists"
        value={search}
        onKeyDown={onKeyPress}
        onChange={onChange}
        required
        className={`${styles.searchBar} ${error && styles.error}`}
      />
      <button className={styles.searchButton} onClick={onSubmit}>
        Search
      </button>
      {error && <div className={styles.searchBarError}>{error}</div>}
    </div>
  )
}

export default SearchBar
