import React from 'react';
import App from '../src/app';
import renderer from 'react-test-renderer';

test('App changes the class when hovered', () => {
  const component = renderer.create(
    <App text="Hello world" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
