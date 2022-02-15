import styles from './Button.module.css'

function Button({ value, bgColor, onClick }) {
  return (
    <button
      className={styles.globalButton}
      style={{ backgroundColor: `#${bgColor}`, color: '#fff' }}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Button
