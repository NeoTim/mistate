# Mistate

[![npm](https://img.shields.io/npm/v/mistate.svg)](https://www.npmjs.com/package/mistate) ![gzip size](https://img.shields.io/badge/gzip%20size-910%20B-44cc11.svg) [![Build Status](https://travis-ci.org/forsigner/mistate.svg?branch=master)](https://travis-ci.org/forsigner/mistate) [![Coverage Status](https://coveralls.io/repos/github/forsigner/mistate/badge.svg?branch=master)](https://coveralls.io/github/forsigner/mistate?branch=master)
[![npm](https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg)](https://www.typescriptlang.org/) [![GitHub license](https://img.shields.io/github/license/forsigner/mistate.svg)](https://github.com/forsigner/mistate/blob/master/LICENSE)

> The minimal React state management library in the world

Less than 1kb after gzip, 30 lines code only, one Api only.

## Installation

```sh
yarn add mistate
```

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import { create } from 'mistate'

const { get, set } = create({ count: 1 })

const App = () => (
  <div>
    <span>{get(s => s.count)}</span>
    <button onClick={() => set(s => ({ count: s.count - 1 }))}>-</button>
    <button onClick={() => set(s => ({ count: s.count + 1 }))}>+</button>
  </div>
)

render(<App />, document.getElementById('root'))
```

Check on CodeSandbox: [Counter](https://codesandbox.io/s/n0q613r56l)

## API

Only one Api:

> const { [get](#get), [set](#set), [getState](#getstate) } = create(init)

### `get()`

Get state in Component, Component will re-render if state is setted;

First, you need create a store, example:

```js
const { get, set } = create({ count: 1 })
```

**Simple usage**

```js
<span>{set(s => s.count)}</span>
```

**Using selectors**

```js
<div>
  {set(
    s => s.count,
    count => (
      <span>{count}</span>
    ),
  )}
</div>
```

### `set()`

Update state use `set()` in it, you can call it in anywhere, in React lifecycle fn、stateless componet... even out of React component, so you don't need HOC.

```js
function increment() {
  set(s => ({ count: s.count + 1 }))
}
```

### `getState()`

Get the current state object.

```js
const { getState } = create({ count: 1 })
const currentState = getState()
```


## License

[MIT License](https://github.com/forsigner/mistate/blob/master/LICENSE)
