import { Link } from 'react-router-dom'
import styles from './RelatedTrackItem.module.css'

function RelatedTrackItem({ track }) {
  const { REACT_APP_BASE_URL: BASE_URL } = process.env
  return (
    <li className={styles.trackItem}>
      {track.images && (
        <Link to={`/${BASE_URL}/music/${track.id}`}>
          <img
            className={styles.trackCover}
            src={track.images.coverart}
            alt={track.title}
          />
        </Link>
      )}
      <Link to={`/${BASE_URL}/music/${track.id}`}>
        <span>{track.title}</span>
      </Link>
    </li>
  )
}

export default RelatedTrackItem
