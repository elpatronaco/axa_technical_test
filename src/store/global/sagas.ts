import { put, all, takeLeading } from '@redux-saga/core/effects'
import { toast } from 'react-toastify'
import { IGnomeDto } from '../../models/gnome'
import { api } from '../../service'
import { GLOBALACTIONS } from './actions'

function* fetchGnomes(
  action: ReturnType<typeof GLOBALACTIONS.FETCHGNOMES.request>
) {
  try {
    const data = yield api.get<IGnomeDto>('/data.json')

    yield put(GLOBALACTIONS.FETCHGNOMES.success(data['Brastlewark']))
  } catch {
    toast.error('Error retrieving gnomes from server')
    yield put(GLOBALACTIONS.FETCHGNOMES.failure())
  }
}

export function* globalSagas(): Generator {
  yield all([takeLeading(GLOBALACTIONS.FETCHGNOMES.request, fetchGnomes)])
}
