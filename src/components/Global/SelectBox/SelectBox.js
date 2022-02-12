import styles from './SelectBox.module.css'

function SelectBox({ setCurrentCountryCode, countryCode }) {
  const onSelect = (event) => {
    const {
      target: { value },
    } = event
    setCurrentCountryCode(value)
  }

  return (
    <div className={styles.selectBoxContainer}>
      <select onChange={onSelect} className={styles.selectBox}>
        {countryCode.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectBox
