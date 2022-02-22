import styles from './LoaderBar.module.css'

function LoaderBar() {
  return (
    <div className={styles.loaderBarContainer}>
      <div className={styles.loaderBar}>
        <div className={styles.loaderStatus}></div>
      </div>
    </div>
  )
}

export default LoaderBar
