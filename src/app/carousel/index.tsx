import { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '../../components/list'
import Pagination, { IPaginationInfo } from '../../components/pagination'
import Spinner from '../../components/_shared/loader'
import { GLOBALACTIONS } from '../../store/global/actions'
import { globalSelectors } from '../../store/global/selectors'
import styles from './styles.module.css'

export default function Carousel(): ReactElement {
  const d = useDispatch()

  const isLoading = useSelector(globalSelectors.loading)
  const totalItems = useSelector(globalSelectors.totalItems)
  const currGnomes = useSelector(globalSelectors.currGnomes)
  const itemsPerPage = useSelector(globalSelectors.itemsPerPage)
  const currPage = useSelector(globalSelectors.currPage)

  const handlePageChange = (newPage: IPaginationInfo) => {
    d(GLOBALACTIONS.SETPAGE(newPage.page))
  }

  return (
    <section className={styles.carousel_wrapper}>
      <div className={styles.filters_container}>
        <Pagination
          itemsPerPage={itemsPerPage}
          total={totalItems}
          page={currPage}
          onPageChange={handlePageChange}
        />
      </div>
      <div className={styles.carousel_card}>
        {isLoading ? (
          <div className={styles.spinner_wrapper}>
            <Spinner />
          </div>
        ) : (
          <List gnomes={currGnomes} />
        )}
      </div>
    </section>
  )
}
