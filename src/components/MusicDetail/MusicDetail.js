import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMusicDetail } from '../../api'
import { LoaderBar, Button } from '../index'
import styles from './MusicDetail.module.css'

function MusicDetail() {
  const [detail, setDetail] = useState({})
  const [toggleLyrics, setToggleLyrics] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    const getDetails = async () => {
      const fetchedMusicDetail = await fetchMusicDetail(id)
      setDetail(fetchedMusicDetail)
    }
    getDetails()
  }, [id])

  const onToggleLyrics = () => {
    setToggleLyrics(!toggleLyrics)
  }

  return (
    <div className={styles.musicDetailContainer}>
      {typeof detail.images === 'undefined' ? (
        <LoaderBar />
      ) : (
        <div className={styles.musicDetailBox}>
          <img
            className={styles.musicDetailCover}
            src={detail.images.coverart}
            alt={detail.title}
          />
          <div className={styles.musicDetailContents}>
            <h2 className={styles.musicDetailTitle}>{detail.title}</h2>
            <div className={styles.musicDetailArtist}>
              {typeof detail.sections !== 'undefined' && (
                <>
                  {detail.sections[2].avatar ? (
                    <img
                      src={detail.sections[2].avatar}
                      alt={detail.sections[2].name}
                      className={styles.musicDetailArtistImg}
                    />
                  ) : (
                    <div className={styles.musicDetailArtistEmptyImg}>
                      {detail.subtitle.substr(0, 2)}
                    </div>
                  )}
                  {detail.sections[2].name ? (
                    <span>{detail.sections[2].name}</span>
                  ) : (
                    <span>{detail.subtitle}</span>
                  )}
                </>
              )}
            </div>
            <span className={styles.musicDetailGenres}>
              {detail.genres.primary}
            </span>

            {typeof detail.sections !== 'undefined' && (
              <>
                {detail.sections[1].text ? (
                  <>
                    <Button
                      value={!toggleLyrics ? '가사 보기' : '가사 숨기기'}
                      bgColor="6b54bf"
                      onClick={() => onToggleLyrics()}
                    />
                    <ul
                      className={`${styles.musicDetailLylics} ${
                        toggleLyrics ? styles.show : ''
                      }`}
                    >
                      {detail.sections[1].text.map((lyrics, index) => (
                        <li
                          key={index}
                          className={styles.musicDetailLylicsItem}
                        >
                          {lyrics}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Button
                    className={styles.musicDetailNoLylics}
                    value="가사 정보 없음"
                    bgColor="6b54bf"
                  />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MusicDetail
