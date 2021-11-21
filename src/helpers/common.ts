import { createAction, Store } from '@reduxjs/toolkit'
import { IAsyncAction } from '../models/common'
import { REDUCERS } from './enum'

export const createAsyncAction = <A, B, C>(
  actionType: string
): IAsyncAction<A, B, C> => ({
  request: createAction<A>(`${actionType} Request`),
  success: createAction<B>(`${actionType} Success`),
  failure: createAction<C>(`${actionType} Failure`)
})

export const getReducer =
  <T = unknown>(reducerKey: REDUCERS): ((state: Store) => T) =>
  state =>
    state[reducerKey]
