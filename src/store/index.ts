import createSagaMiddleware from '@redux-saga/core'
import { configureStore, Store } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducers'
import rootSaga from './rootSagas'

export function createStore(): Store {
  const sagaMiddleware = createSagaMiddleware({
    onError: err => console.error(`Unexpected error on saga: ${err}`)
  })

  const initialStore = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [sagaMiddleware]
  })

  sagaMiddleware.run(rootSaga)

  return initialStore
}

const store = createStore()

export default store
