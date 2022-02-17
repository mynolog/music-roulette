import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContent } from './HeaderContent'
import styles from './Header.module.css'

const { REACT_APP_BASE_URL: BASE_URL } = process.env

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onChangeTab = (index) => {
    setCurrentIndex(index)
  }

  return (
    <header className={styles.headerContainer}>
      <h1>Music Roulette</h1>
      <nav>
        <ul>
          {HeaderContent.map((navList, index) => (
            <NavLink
              to={BASE_URL + navList.to}
              className={`${styles.navListItem} ${
                currentIndex === index ? styles.activeTab : ''
              }`}
              onClick={() => onChangeTab(index)}
            >
              {navList.title}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
