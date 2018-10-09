# Mistate

[![npm](https://img.shields.io/npm/v/mistate.svg)](https://www.npmjs.com/package/mistate) ![gzip size](https://img.shields.io/badge/gzip%20size-910%20B-44cc11.svg) [![Build Status](https://travis-ci.org/forsigner/mistate.svg?branch=master)](https://travis-ci.org/forsigner/mistate) [![Coverage Status](https://coveralls.io/repos/github/forsigner/mistate/badge.svg?branch=master)](https://coveralls.io/github/forsigner/mistate?branch=master)
[![npm](https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg)](https://www.typescriptlang.org/) [![GitHub license](https://img.shields.io/github/license/forsigner/mistate.svg)](https://github.com/forsigner/mistate/blob/master/LICENSE)

> The smallest state management library for React

Less than 1kb after gzip, 40 lines code only, one Api only.

## Installation

```sh
yarn add mistate
```

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import { create } from 'mistate'

const { get, set } = create({ text: 'foo' })

const App = () => (
  <div>
    <span>{get(s => s.text)}</span>
    <button onClick={() => set({ text: 'bar' })}>set</button>
    <button onClick={() => set({ text: 'foo' })}>reset</button>
  </div>
)

render(<App />, document.getElementById('root'))
```

Check on CodeSandbox: [example](https://codesandbox.io/s/n0q613r56l)

### Examples

- [Basic](https://github.com/forsigner/mistate/tree/master/examples/basic)
- [Counter](https://github.com/forsigner/mistate/tree/master/examples/counter)

## API

Only one Api:

> const { [get](#get), [set](#set), [getState](#getstate) } = create(init)

### `get()`

Get state in Component, Component will re-render if state is setted;

First, you need create a store, example:

```js
const { get, set } = create({ text: 'foo' })
```

**Simple usage**

```js
<span>{get(s => s.text)}</span>
```

**Using selectors**

```js
<div>
  {get(
    s => s.text,
    text => (
      <span>{text}</span>
    ),
  )}
</div>
```

### `set()`

Update state use `set()` in it, you can call it in anywhere, in React lifecycle fn、stateless componet... even out of React component, so you don't need HOC.

**Set with object**

```js
set({ text: 'bar' })
```

**Set with function**

```js
set(s => ({ text: s.text + 'bar' }))
```

**Return a Promise**

```js
async function setText() {
  const newState = await set({ text: 'bar' })
  // { text: 'bar' }
}
```

### `getState()`

Get the current state object.

```js
const { getState } = create({ text: 'foo' })
const currentState = getState()
```

## License

[MIT License](https://github.com/forsigner/mistate/blob/master/LICENSE)
