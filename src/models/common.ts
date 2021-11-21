import { PayloadActionCreator } from '@reduxjs/toolkit'
import { FunctionComponent } from 'react'
import { NavigateFunction } from 'react-router'

export interface IAsyncAction<A, B, C> {
  request: PayloadActionCreator<A>
  success: PayloadActionCreator<B>
  failure: PayloadActionCreator<C>
}

export interface IRoute {
  path: string
  Component: FunctionComponent
}

export interface IRedirect<T> {
  value: T
  navigate: NavigateFunction
}
