import { Link } from 'react-router-dom'
import styles from './RelatedTrackItem.module.css'

function RelatedTrackItem({ track }) {
  return (
    <li className={styles.trackItem}>
      {track.images && (
        <Link to={`/music/${track.id}`}>
          <img
            className={styles.trackCover}
            src={track.images.coverart}
            alt={track.title}
          />
        </Link>
      )}
      <Link to={`/music/${track.id}`}>
        <span>{track.title}</span>
      </Link>
    </li>
  )
}

export default RelatedTrackItem
