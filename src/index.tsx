import * as React from 'react'
import equal from 'fast-deep-equal'
import { Props, Set, Updater, RenderFn } from './typings'
export { create, Props }

function create<S>(init: S) {
  let state: S = init
  const updaters: Array<Updater<S>> = []
  const Box = class extends React.Component<Props<S>> {
    state: S = state
    update = (fn: Set<S>) => this.setState((prev: S) => fn(prev), () => void (state = this.state))
    shouldComponentUpdate = (_: Props<S>, nextState: S) => {
      const selector = this.props.selector ? this.props.selector : (s: S) => s
      return !equal(selector(this.state), selector(nextState))
    }
    componentDidMount = () => updaters.push(this.update)
    componentWillUnmount = () => updaters.splice(updaters.indexOf(this.update), 1)
    render = () => this.props.children(this.state)
  }
  return {
    get<P>(selector: (state: S) => P, renderFn?: RenderFn<P>) {
      if (!renderFn) return <Box>{selector}</Box>
      return <Box selector={selector}>{(currentState: S) => renderFn(selector(currentState))}</Box>
    },
    set: (next: Set<S> | Partial<S>): void => {
      updaters.length
        ? updaters.forEach((update: Updater<S>) =>
            update(typeof next === 'function' ? next : () => next),
          )
        : (state = Object.assign({}, state, typeof next === 'function' ? next(state) : next))
    },
    getState: (): S => state,
  }
}
