import React from 'react'
import { Provider } from 'mobx-react'
import store from '../src/test.store'
import App from '../src/app'
import renderer from 'react-test-renderer'

test('App changes the content "<text> (mouse <0|1>)" when hovered', () => {
  const component = renderer.create(
    <Provider store={store} >
      <App text="Hello world" />
    </Provider>
  )
  let tree = component.toJSON()
  let h1_title = tree['children'].filter(_ => _['type']  == 'h1').pop()

  // manually trigger the callback
  h1_title.props.onMouseEnter()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  h1_title = tree['children'].filter(_ => _['type']  == 'h1').pop()
  h1_title.props.onMouseLeave()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
