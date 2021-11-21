import { PayloadActionCreator } from '@reduxjs/toolkit'
import { FunctionComponent } from 'react'

export interface IAsyncAction<A, B, C> {
  request: PayloadActionCreator<A>
  success: PayloadActionCreator<B>
  failure: PayloadActionCreator<C>
}

export interface IRoute {
  path: string
  Component: FunctionComponent
}
