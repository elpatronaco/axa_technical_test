import { IRedirect } from '../../models/common'
import { IGnome } from '../../models/gnome'
import { GLOBALACTIONS } from './actions'
import { globalReducer } from './reducer'

function randomNumber(min: number, max: number): number {
  if (min % 1 !== 0 || max % 1 !== 0) return Math.random() * (max - min) + min

  return min + Math.round(Math.random() * max)
}

function generateFakeItems(num: number): IGnome[] {
  return Array.from({ length: num }).map((_, index) => ({
    id: index,
    age: randomNumber(0, 100),
    friends: ['Antonio', 'Xavi'],
    professions: ['Fontanero'],
    hair_color: 'Verde',
    height: randomNumber(1.2, 2),
    name: 'Pablo',
    thumbnail: '',
    weight: randomNumber(40, 100)
  }))
}

const initState = globalReducer(undefined, { type: 'TEST' })

describe('Global reducer', () => {
  it('Should change page correctly', () => {
    const newPage = 4

    const newState = globalReducer(initState, GLOBALACTIONS.SETPAGE(newPage))

    expect(newState.page).toBe(newPage)
  })

  it('Should be loading and cleared items on fetch', () => {
    const newState = globalReducer(
      initState,
      GLOBALACTIONS.FETCHGNOMES.request(null as unknown as IRedirect<null>)
    )

    expect(newState.loading).toBeTruthy()
    expect(newState.gnomes.length).toBe(0)
  })

  it('Should pick new items correctly, loading be false and page on 1', () => {
    const items = generateFakeItems(50)

    globalReducer(
      initState,
      GLOBALACTIONS.FETCHGNOMES.request(null as unknown as IRedirect<null>)
    )
    const newState = globalReducer(
      initState,
      GLOBALACTIONS.FETCHGNOMES.success(items)
    )

    expect(newState.gnomes).toEqual(items)
    expect(newState.loading).toBeFalsy()
    expect(newState.page).toBe(1)
  })
})
