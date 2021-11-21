import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './styles.module.css'

interface IPaginationProps {
  total: number
  onPageChange?: (newPage: IPaginationInfo) => unknown
  itemsPerPage?: number
  pageSizes?: Array<number>
  allowPageSizeChange?: boolean
  page?: number
}

export interface IPaginationInfo {
  page: number
  itemsPerPage: number
}

enum CHANGE {
  PREVIOUS,
  NEXT
}

export default function Pagination({
  total,
  itemsPerPage = 50,
  onPageChange,
  page = 1
}: IPaginationProps): ReactElement {
  const [currPage, setCurrPage] = useState<number>(page)

  const lastPage = useMemo(
    () => Math.ceil(total / itemsPerPage) - 1,
    [total, itemsPerPage]
  )

  const handlePageChange = useCallback(
    (change: CHANGE) => {
      const proposedPage = change === CHANGE.NEXT ? currPage + 1 : currPage - 1

      if (!(proposedPage >= 1 && proposedPage <= lastPage)) return

      setCurrPage(proposedPage)

      if (onPageChange) onPageChange({ page: proposedPage, itemsPerPage })
    },
    [currPage, itemsPerPage, lastPage, onPageChange]
  )

  useEffect(() => {
    if (page === undefined) return
    if (page < 0)
      throw Error(
        `El número de página proporcionado (${page}) no puede ser negativo`
      )

    setCurrPage(page)
  }, [page])

  useEffect(() => {
    if (onPageChange) onPageChange({ page: currPage, itemsPerPage })
  }, [])

  return (
    <div className={styles.pagination_wrapper}>
      <FaChevronLeft
        type="default"
        size={12}
        onClick={() => handlePageChange(CHANGE.PREVIOUS)}
        className={
          !(currPage === 1 || currPage < 1 || total === 0) ? styles.enabled : ''
        }
        data-testid="pagination-component-button-previous"
      />
      <div className={styles.label} data-testid="pagination-component-page">
        {currPage} / {lastPage}
      </div>
      <FaChevronRight
        type="default"
        size={12}
        onClick={() => handlePageChange(CHANGE.NEXT)}
        className={
          !(currPage === lastPage || total === 0) ? styles.enabled : ''
        }
        data-testid="pagination-component-button-next"
      />
    </div>
  )
}
