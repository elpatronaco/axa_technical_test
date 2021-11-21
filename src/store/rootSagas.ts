import { all } from '@redux-saga/core/effects'
import { globalSagas } from './global/sagas'

export default function* rootSaga() {
  yield all([globalSagas()])
}
