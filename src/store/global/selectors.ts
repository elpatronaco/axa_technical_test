import { createSelector } from 'reselect'
import { getReducer } from '../../helpers/common'
import { CONSTANTS, REDUCERS } from '../../helpers/enum'
import { IGlobalReducer } from './reducer'

const selectReducer = getReducer<IGlobalReducer>(REDUCERS.GLOBAL)

export const globalSelectors = {
  loading: createSelector(selectReducer, state => state.loading),
  allGnomes: createSelector(selectReducer, state => state.gnomes),
  currGnomes: createSelector(selectReducer, ({ gnomes, page }) =>
    gnomes.slice(
      (page - 1) * CONSTANTS.ITEMSXPAGE,
      (page - 1) * CONSTANTS.ITEMSXPAGE + CONSTANTS.ITEMSXPAGE
    )
  ),
  selGnome: createSelector(selectReducer, state => state.selGnome),
  currPage: createSelector(selectReducer, state => state.page),
  totalItems: createSelector(selectReducer, state => state.gnomes.length),
  maxPages: createSelector(selectReducer, state =>
    Math.ceil(state.gnomes.length / CONSTANTS.ITEMSXPAGE)
  ),
  itemsPerPage: createSelector(selectReducer, state => state.itemsPerPage)
}
