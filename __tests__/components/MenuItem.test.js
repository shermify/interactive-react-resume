import React from 'react';
import renderer from 'react-test-renderer';
import MenuItem from '../../src/components/MenuItem';

describe('<MenuItem />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MenuItem to="test">Test Link</MenuItem>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
