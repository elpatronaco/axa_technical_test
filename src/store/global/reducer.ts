import { createReducer } from '@reduxjs/toolkit'
import { CONSTANTS } from '../../helpers/enum'
import { IGnome } from '../../models/gnome'
import { GLOBALACTIONS } from './actions'

export interface IGlobalReducer {
  gnomes: Array<IGnome>
  selGnome: IGnome | null
  loading: boolean
  page: number
  itemsPerPage: number
}

const initState: IGlobalReducer = {
  gnomes: [],
  selGnome: null,
  loading: false,
  page: 1,
  itemsPerPage: CONSTANTS.ITEMSXPAGE
}

export const globalReducer = createReducer(initState, builder =>
  builder
    .addCase(GLOBALACTIONS.SETPAGE, (state, { payload }) => ({
      ...state,
      page: payload
    }))
    .addCase(GLOBALACTIONS.FETCHGNOMES.request, state => ({
      ...state,
      loading: true,
      gnomes: []
    }))
    .addCase(GLOBALACTIONS.FETCHGNOMES.success, (state, { payload }) => ({
      ...state,
      loading: false,
      gnomes: payload,
      page: 1
    }))
    .addCase(GLOBALACTIONS.SELECTGNOME, (state, action) => {
      if (!state.gnomes.length) return state

      return {
        ...state,
        selGnome: state.gnomes.find(x => x.id === action.payload) ?? null
      }
    })
)
