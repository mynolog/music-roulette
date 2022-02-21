import { Link } from 'react-router-dom'
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
  getCharts,
}) {
  const onChangeOption = () => {
    getCharts()
  }

  return (
    <div className={styles.musicContainer}>
      {isStandBy && (
        <div className={styles.musicBox}>
          <>
            <div className={styles.musicContents}>
              <Link
                className={styles.musicLink}
                to={`/music/${randomMusic.id}`}
              >
                <img
                  className={styles.musicCover}
                  src={randomMusic.images.coverart}
                  alt={randomMusic.subtitle}
                />
              </Link>
              <Link
                className={styles.musicLink}
                to={`/music/${randomMusic.id}`}
              >
                <div className={styles.musicTitle}>{randomMusic.title}</div>
              </Link>
              {randomMusic.artists === null ? (
                <div className={styles.musicArtist}>{randomMusic.subtitle}</div>
              ) : (
                <Link
                  className={styles.artistLink}
                  to={`/artist/${randomMusic.artists[0].id}`}
                >
                  <div className={styles.musicArtist}>
                    {randomMusic.subtitle}
                  </div>
                </Link>
              )}
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
        <div className={styles.selectArea}>
          {/* setCountryCode */}
          <SelectBox
            query={query}
            setQuery={setQuery}
            options={countryCodeList}
            type="country"
          />
          {/* setLimit */}
          <SelectBox
            query={query}
            setQuery={setQuery}
            options={topLimit}
            type="limit"
          />
        </div>
        <Button onClick={onChangeOption} bgColor="EC407A" value="Apply" />
      </div>
      <button className={styles.rouletteButton} onClick={getRandomMusic}>
        Shake it!
      </button>
    </div>
  )
}

export default Music
