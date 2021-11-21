import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/top_logo.png'
import Searchbox from '../../searchbox'
import styles from './styles.module.css'

export default function Topbar(): ReactElement {
  const d = useDispatch()

  const handleFilter = (text: string) => {
    // d(GLOBALACTIONS.FILTER(text))
  }

  return (
    <nav className={styles.topbar_wrapper}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Brastlewark Logo" />
      </Link>

      <div className={styles.searchbox_container}>
        <Searchbox placeholder="Filtrar" onSearch={handleFilter} />
      </div>
    </nav>
  )
}
