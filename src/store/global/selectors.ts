import { createSelector } from 'reselect'
import { getReducer } from '../../helpers/common'
import { REDUCERS } from '../../helpers/enum'
import { IGlobalReducer } from './reducer'

const perPage = 50

const selectReducer = getReducer<IGlobalReducer>(REDUCERS.GLOBAL)

export const globalSelectors = {
  loading: createSelector(selectReducer, state => state.loading),
  allGnomes: createSelector(selectReducer, state => state.gnomes),
  currGnomes: createSelector(selectReducer, ({ gnomes, page }) =>
    gnomes.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
  ),
  selGnome: createSelector(selectReducer, state => state.selGnome),
  currPage: createSelector(selectReducer, state => state.page),
  maxPages: createSelector(selectReducer, state =>
    Math.ceil(state.gnomes.length / perPage)
  )
}
