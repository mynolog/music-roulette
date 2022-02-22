import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { HeaderContent } from './HeaderContent'
import { SearchBar } from '../../'
import styles from './Header.module.css'

function Header({ search, setSearch }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onGoHome = () => navigate(`/`)
  const onGoBack = () => {
    navigate(-1)
  }

  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle} onClick={onGoHome}>
        Music Roulette
      </h1>
      <div className={styles.arrowButton} onClick={onGoBack}></div>
      <nav>
        <ul className={styles.navList}>
          <li className={`${styles.navListItem} ${styles.navSearchBar}`}>
            <SearchBar search={search} setSearch={setSearch} />
          </li>
          {HeaderContent.map((navList, index) => (
            <li
              className={`${styles.navListItem} ${
                pathname === navList.to ? styles.activeTab : ''
              }`}
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
