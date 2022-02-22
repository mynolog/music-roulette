import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchArtistDetail, fetchRelatedTracks } from '../../api'
import { LoaderBar, Button, RelatedTracks } from '../index'
import styles from './ArtistDetail.module.css'

function ArtistDetail() {
  const [detail, setDetail] = useState({})
  const [relatedTracks, setRelatedTracks] = useState([])
  const [loadingDetails, setLoadingDetails] = useState(true)
  const [loadingTrack, setLoadingTracks] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const getDetails = async () => {
      setLoadingDetails(true)
      const fetchedArtistDetail = await fetchArtistDetail(id)
      setDetail(fetchedArtistDetail)
      setLoadingDetails(false)
    }

    const getTracks = async () => {
      setLoadingTracks(true)
      const fetchedRelatedTracks = await fetchRelatedTracks(id)
      setRelatedTracks(fetchedRelatedTracks)
      setLoadingTracks(false)
    }
    getDetails()
    getTracks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <>
      {loadingDetails && <LoaderBar />}
      {loadingTrack && <LoaderBar />}
      <div className={styles.artistDetailContainer}>
        <>
          <div className={styles.artistDetailBox}>
            {detail.avatar && (
              <img
                className={styles.artistDetailCover}
                src={detail.avatar}
                alt={detail.name}
              />
            )}
            <div className={styles.artistName}>
              <span>{detail.name}</span>
            </div>
            <div className={styles.artistGenres}>
              {detail.genres && (
                <ul className={styles.artistGenresList}>
                  <li className={styles.artistGenresItem}>
                    {detail.genres.primary}
                  </li>
                  {detail.genres.hasOwnProperty('secondaries') &&
                    detail.genres.secondaries
                      .filter((_, index) => index < 2)
                      .map((genre, index) => (
                        <li key={index} className={styles.artistGenresItem}>
                          {genre}
                        </li>
                      ))}
                </ul>
              )}
            </div>
            <Button
              onClick={() => window.open(detail.apple_music_url)}
              bgColor="FA576A"
              value="Apple Music"
            />
            <Button
              bgColor="0088FF"
              onClick={() => window.open(detail.url)}
              value="Shazam"
            />
          </div>

          <div className={styles.artistRelatedTrackBox}>
            <RelatedTracks relatedTracks={relatedTracks} />
          </div>
        </>
      </div>
    </>
  )
}

export default ArtistDetail
