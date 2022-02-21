import { useNavigate } from 'react-router-dom'
import { Button } from '..'
import styles from './PageNotFound.module.css'

function PageNotFound() {
  const navigate = useNavigate()
  const onGoBack = () => navigate(-1)
  return (
    <div className={styles.pageNotFoundContainer}>
      존재하지 않는 페이지입니다.
      <Button value="Go Back" bgColor={555} onClick={onGoBack} />
    </div>
  )
}

export default PageNotFound
