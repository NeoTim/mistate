import * as React from 'react'

export interface Props<S> {
  children: (state: S) => React.ReactNode
  selector?: (state: S) => any
}
export type Set<S> = (state: S) => any
export type Updater<S> = (fn: Set<S>, cb: CB<S>) => void
export type RenderFn<P> = (partialState: P) => React.ReactNode

export type CB<S> = (next: S) => void
