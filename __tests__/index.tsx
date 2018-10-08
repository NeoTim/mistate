import renderer from 'react-test-renderer'
import { create } from '../src'

test('No selector', () => {
  const { get, set, getState } = create({
    count: 1,
    name: 'Counter',
  })
  const component = renderer.create(get(state => state.count))

  expect(getState()).toEqual({ count: 1, name: 'Counter' })
  expect(component.toJSON()).toBe('1')

  set(state => ({ count: state.count + 1 }))

  expect(component.toJSON()).toBe('2')
  expect(getState()).toEqual({ count: 2, name: 'Counter' })

  component.unmount()
})

test('With selector', () => {
  const { get, set, getState } = create({
    count: 1,
    name: 'Counter',
  })
  const component = renderer.create(get(state => state.name, name => name))

  expect(getState()).toEqual({ count: 1, name: 'Counter' })

  expect(component.toJSON()).toBe('Counter')

  set(() => ({ name: 'New Counter' }))

  expect(component.toJSON()).toBe('New Counter')

  component.unmount()
})
