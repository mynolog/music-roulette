import ChartItem from './ChartItem'
import styles from './Chart.module.css'

function Chart({ charts }) {
  return (
    <div className={styles.chartContainer}>
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
