import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { create } from 'mistate'

const { get, set } = create({ text: 'foo' })

const App = () => (
  <div>
    <span>{get(s => s.text)}</span>
    <button onClick={() => set({ text: 'bar' })}>set</button>
    <button onClick={() => set({ text: 'foo' })}>reset</button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
