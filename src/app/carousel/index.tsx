import { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import List from '../../components/list'
import Spinner from '../../components/_shared/loader'
import { globalSelectors } from '../../store/global/selectors'
import styles from './styles.module.css'

export default function Carousel(): ReactElement {
  const isLoading = useSelector(globalSelectors.loading)
  const currGnomes = useSelector(globalSelectors.currGnomes)

  return (
    <section className={styles.carousel_wrapper}>
      <div className={styles.carousel_card}>
        {isLoading ? <Spinner /> : <List gnomes={currGnomes} />}
      </div>
    </section>
  )
}
