import { IGnome } from '../../models/gnome'
import ListItem from '../list-item'
import styles from './styles.module.css'

interface IListProps {
  gnomes: IGnome[]
}

export default function List({ gnomes }: IListProps) {
  if (!gnomes.length)
    return (
      <div className={styles.notfound_wrapper}>
        <h3 className={styles.notfound}>No hay ningún resultado</h3>
      </div>
    )

  return (
    <div className={styles.list_container}>
      {gnomes.map(item => (
        <ListItem gnome={item} key={`list-item-${item.id}`} />
      ))}
    </div>
  )
}
