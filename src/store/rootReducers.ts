import { Reducer } from 'react'
import { AnyAction } from 'redux'
import { REDUCERS } from '../helpers/enum'
import { globalReducer, IGlobalReducer } from './global/reducer'

export interface IRootReducer {
  [REDUCERS.GLOBAL]: Reducer<IGlobalReducer, AnyAction>
}

export const rootReducer = {
  [REDUCERS.GLOBAL]: globalReducer
}
