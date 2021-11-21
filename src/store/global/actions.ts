import { createAction } from '@reduxjs/toolkit'
import { createAsyncAction } from '../../helpers/common'
import { IGnome } from '../../models/gnome'

export const GLOBALACTIONS = {
  SETPAGE: createAction<number>('global/set-page'),
  FETCHGNOMES: createAsyncAction<undefined, Array<IGnome>, undefined>(
    'global/fetch-gnomes'
  ),
  SELECTGNOME: createAction<number | null>('global/select-gnome')
}
