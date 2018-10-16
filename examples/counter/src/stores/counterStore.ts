import { create } from 'mistate'

const { get, set, getState } = create({ count: 1, name: 'Counter' })

const actions = {
  async increment() {
    await set(s => ({ count: s.count + 1 }))
  },
  decrement() {
    set(s => ({ count: s.count - 1 }))
  },
  async asyncIncrement() {
    await sleep(1000)
    set(s => ({ count: s.count + 1 }))
  },
  async asyncDecrement() {
    await sleep(1000)
    set(s => ({ count: s.count - 1 }))
  },
}

async function sleep(time: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export { get, set, getState, actions }
