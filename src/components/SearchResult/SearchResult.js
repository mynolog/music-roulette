import { Link } from 'react-router-dom'
import styles from './SearchResult.module.css'

function SearchResult({ searchResult }) {
  return (
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
  )
}

export default SearchResult
