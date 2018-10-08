import * as React from 'react'

export interface Props<S> {
  children: (state: S) => React.ReactNode
  selector?: (state: S) => any
}
export type Set<S> = (state: S) => any
export type Updater<S> = (fn: Set<S>) => void
export type RenderFn<P> = (partialState: P) => React.ReactNode
