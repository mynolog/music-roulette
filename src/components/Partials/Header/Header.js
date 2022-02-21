import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HeaderContent } from './HeaderContent'
import { SearchBar } from '../../'
import styles from './Header.module.css'

function Header({ search, setSearch, setSearchResult }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  // const [toggleSearch, setToggleSearch] = useState(false)
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
        <ul className={styles.navList}>
          <li className={`${styles.navListItem} ${styles.navSearchBar}`}>
            <SearchBar
              search={search}
              setSearch={setSearch}
              setSearchResult={setSearchResult}
            />
          </li>
          {HeaderContent.map((navList, index) => (
            <li
              className={`${styles.navListItem} ${
                currentIndex === index ? styles.activeTab : ''
              }`}
              onClick={() => onChangeTab(index)}
              key={navList.id}
            >
              <NavLink to={navList.to}>{navList.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
