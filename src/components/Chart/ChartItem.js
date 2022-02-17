import styles from './ChartItem.module.css'

function ChartItem({ musicInfo, index }) {
  const {
    title,
    subtitle,
    images: { coverart },
  } = musicInfo
  const rank = index + 1
  return (
    <div className={styles.chartItemContainer}>
      <span className={styles.chartItemRank}>{rank}</span>
      <img className={styles.chartItemCover} src={coverart} alt={title} />
      <div className={styles.chartItemContents}>
        <span className={styles.chartItemTitle}>{title}</span>
        <span className={styles.chartItemSubtitle}>{subtitle}</span>
      </div>
    </div>
  )
}

export default ChartItem
