import { put, all, takeLeading } from '@redux-saga/core/effects'
import { toast } from 'react-toastify'
import { IGnome, IGnomeDto } from '../../models/gnome'
import { api } from '../../service'
import { GLOBALACTIONS } from './actions'

function* fetchGnomes({
  payload
}: ReturnType<typeof GLOBALACTIONS.FETCHGNOMES.request>) {
  try {
    const filter = payload.value

    const data = yield api.get<IGnomeDto>('/data.json')
    const arr = data['Brastlewark'] as IGnome[]

    const filteredArr =
      filter && typeof filter === 'string' && filter
        ? arr.filter(x => x.name.toLowerCase().includes(filter))
        : arr

    payload.navigate('/')

    yield put(GLOBALACTIONS.FETCHGNOMES.success(filteredArr))
  } catch {
    toast.error('Error retrieving gnomes from server')
    yield put(GLOBALACTIONS.FETCHGNOMES.failure())
  }
}

export function* globalSagas(): Generator {
  yield all([takeLeading(GLOBALACTIONS.FETCHGNOMES.request, fetchGnomes)])
}
