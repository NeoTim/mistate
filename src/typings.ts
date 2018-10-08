import * as React from 'react'

export interface Props<S> {
  children: (state: S) => React.ReactNode
  selector?: (state: S) => any
}
export type Set = (state: any) => any
export type Updater = (fn: Set) => void
export type RenderFn<P> = (partialState: P) => React.ReactNode
