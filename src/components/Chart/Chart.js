import ChartItem from './ChartItem'
import styles from './Chart.module.css'

function Chart({ charts, query }) {
  return (
    <div className={styles.chartContainer}>
      <h2
        className={styles.chartTitle}
      >{`${query.label}'s Top ${query.limit}`}</h2>
      <ul>
        {charts.map((musicInfo, index) => (
          <li key={musicInfo.id} className={styles.chartListItem}>
            <ChartItem musicInfo={musicInfo} index={index} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Chart
