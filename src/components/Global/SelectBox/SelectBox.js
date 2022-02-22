import { useLocation } from 'react-router-dom'
import styles from './SelectBox.module.css'

function SelectBox({ query, setQuery, options, type }) {
  const { pathname } = useLocation()
  const onSelect = (event) => {
    const {
      target: { value, options, selectedIndex },
    } = event

    switch (type) {
      case 'country':
        const country = options[selectedIndex].getAttribute('data-country')
        setQuery({ ...query, currentCountryCode: value, label: country })
        break
      case 'limit':
        setQuery({ ...query, limit: value })
        break
      default:
    }
  }

  return (
    <div className={styles.selectBoxContainer}>
      <select
        key={type === 'country' ? query.currentCountryCode : query.limit}
        defaultValue={
          type === 'country' ? query.currentCountryCode : query.limit
        }
        onChange={onSelect}
        className={styles.selectBox}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            data-country={option.label}
          >
            {option.label}
          </option>
        ))}
      </select>
      <div
        className={`${styles.arrowButton} ${
          pathname === '/' && styles.mainPage
        } ${pathname === '/chart' && styles.chartPage} `}
      ></div>
    </div>
  )
}

export default SelectBox
