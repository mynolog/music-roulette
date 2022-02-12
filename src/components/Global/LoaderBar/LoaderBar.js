import styles from './Loading.module.css'

function LoaderBar() {
  return (
    <div className={styles.loaderBarContainer}>
      <div className={styles.loaderBar}>
        <div className={styles.loaderStatus}></div>
      </div>
      <span className={styles.loaderContent}>음악 리스트 불러오는 중...</span>
    </div>
  )
}

export default LoaderBar
