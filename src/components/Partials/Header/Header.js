import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HeaderContent } from './HeaderContent'
import styles from './Header.module.css'

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const onChangeTab = (index) => {
    setCurrentIndex(index)
  }

  const onGoHome = () => navigate(`/`)
  const onGoBack = () => navigate(-1)

  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle} onClick={onGoHome}>
        Music Roulette
      </h1>
      <div className={styles.arrowButton} onClick={onGoBack}></div>
      <nav>
        <ul>
          {HeaderContent.map((navList, index) => (
            <NavLink
              to={navList.to}
              className={`${styles.navListItem} ${
                currentIndex === index ? styles.activeTab : ''
              }`}
              onClick={() => onChangeTab(index)}
              key={navList.id}
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
