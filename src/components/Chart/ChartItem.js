import { Link } from 'react-router-dom'
import styles from './ChartItem.module.css'

function ChartItem({ musicInfo, index }) {
  const { REACT_APP_BASE_URL: BASE_URL } = process.env
  const {
    id,
    title,
    subtitle,
    images: { coverart },
  } = musicInfo
  const rank = index + 1
  return (
    <div className={styles.chartItemContainer}>
      <span className={styles.chartItemRank}>{rank}</span>
      <Link to={`/${BASE_URL}/music/${id}`}>
        <img className={styles.chartItemCover} src={coverart} alt={title} />
      </Link>
      <div className={styles.chartItemContents}>
        <span className={styles.chartItemTitle}>{title}</span>
        <span className={styles.chartItemSubtitle}>{subtitle}</span>
      </div>
    </div>
  )
}

export default ChartItem
