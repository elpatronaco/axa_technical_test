import { IGnome } from '../../models/gnome'
import ListItem from '../list-item'
import styles from './styles.module.css'

interface IListProps {
  gnomes: IGnome[]
}

export default function List({ gnomes }: IListProps) {
  return (
    <div className={styles.list_container}>
      {gnomes.map(item => (
        <ListItem gnome={item} key={`list-item-${item.id}`} />
      ))}
    </div>
  )
}
