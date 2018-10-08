import * as React from 'react'
import { get, actions } from '@stores/counterStore'

const Counter = () => (
  <div className="box">
    <div style={{ textAlign: 'center' }}>
      <div>{get(s => s.count)}</div>
      <button onClick={actions.decrement}>-</button>
      <button onClick={actions.increment}>+</button>
      <br />
      <button onClick={actions.asyncDecrement}>async-</button>
      <button onClick={actions.asyncIncrement}>async+</button>
    </div>
  </div>
)

export default Counter
