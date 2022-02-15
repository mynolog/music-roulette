import styles from './SelectBox.module.css'

function SelectBox({ query, setQuery, options }) {
  const onSelect = (event) => {
    const {
      target: { value },
    } = event
    typeof options[0].value === 'string'
      ? setQuery({ ...query, currentCountryCode: value })
      : setQuery({ ...query, limit: Number(value) })
  }

  return (
    <div className={styles.selectBoxContainer}>
      <select onChange={onSelect} className={styles.selectBox}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectBox
