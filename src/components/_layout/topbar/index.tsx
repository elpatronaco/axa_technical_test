import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import { GLOBALACTIONS } from '../../../store/global/actions'
import Searchbox from '../../searchbox'
import styles from './styles.module.css'

export default function Topbar(): ReactElement {
  const d = useDispatch()
  const navigate = useNavigate()

  const handleFilter = (text: string) => {
    d(GLOBALACTIONS.FETCHGNOMES.request({ navigate, value: text }))
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
