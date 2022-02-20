import RelatedTracksItem from './RelatedTrackItem'
import styles from './RelatedTracks.module.css'

function RelatedTracks({ relatedTracks }) {
  return (
    <ul className={styles.trackList}>
      {relatedTracks.map((track) => (
        <RelatedTracksItem key={track.id} track={track} />
      ))}
    </ul>
  )
}

export default RelatedTracks
