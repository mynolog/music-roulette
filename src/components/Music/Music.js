import styles from './Music.module.css'

function Music({ getRandomMusic, randomMusic, isStandBy }) {
  console.log(randomMusic)
  return (
    <div className={styles.musicContainer}>
      <div className={styles.musicBox}>
        {isStandBy && (
          <>
            <img
              className={styles.musicCover}
              src={randomMusic.images.coverart}
              alt={randomMusic.subtitle}
            />
            <span className={styles.musicTitle}>{randomMusic.title}</span>
            <span className={styles.musicArtist}>{randomMusic.subtitle}</span>
          </>
        )}
      </div>

      <button className={styles.rouletteButton} onClick={getRandomMusic}>
        Shake it!
      </button>
    </div>
  )
}

export default Music
