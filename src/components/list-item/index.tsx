import { Link } from 'react-router-dom'
import { IGnome } from '../../models/gnome'
import styles from './styles.module.css'

interface IListItemProps {
  gnome: IGnome
}

export default function ListItem({ gnome }: IListItemProps) {
  return (
    <Link to={`/${gnome.id}`}>
      <div className={styles.listitem_container}>
        <img
          className={styles.thumbnail}
          src={gnome.thumbnail}
          alt="Gnome thumbnail"
        />
        <span className={styles.name}>{gnome.name}</span>
      </div>
    </Link>
  )
}
