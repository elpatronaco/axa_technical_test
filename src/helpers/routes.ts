import { IRoute } from '../models/common'
import Carousel from '../app/carousel/index'
import Detail from '../app/detail'

export const routes: IRoute[] = [
  {
    path: '/',
    Component: Carousel
  },
  {
    path: '/:id',
    Component: Detail
  }
]
