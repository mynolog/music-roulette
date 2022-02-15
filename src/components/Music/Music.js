import { SelectBox, Button } from '../'

import styles from './Music.module.css'

function Music({
  getRandomMusic,
  randomMusic,
  isStandBy,
  query,
  setQuery,
  countryCodeList,
  topLimit,
}) {
  return (
    <div className={styles.musicContainer}>
      {isStandBy && (
        <div className={styles.musicBox}>
          <>
            <div className={styles.musicContents}>
              <img
                className={styles.musicCover}
                src={randomMusic.images.coverart}
                alt={randomMusic.subtitle}
              />
              <span className={styles.musicTitle}>{randomMusic.title}</span>
              <span className={styles.musicArtist}>{randomMusic.subtitle}</span>
            </div>
            <div className={styles.musicUrls}>
              <Button
                onClick={() => window.open(randomMusic.apple_music_url)}
                bgColor="FA576A"
                value="Apple Music"
              />
              <Button
                onClick={() => window.open(randomMusic.url)}
                bgColor="0088FF"
                value="Shazam"
              />
            </div>
          </>
        </div>
      )}

      <div className={styles.selectBox}>
        {/* setCountryCode */}
        <SelectBox
          query={query}
          setQuery={setQuery}
          options={countryCodeList}
        />
        {/* setLimit */}
        <SelectBox query={query} setQuery={setQuery} options={topLimit} />
      </div>
      <button className={styles.rouletteButton} onClick={getRandomMusic}>
        Shake it!
      </button>
    </div>
  )
}

export default Music
