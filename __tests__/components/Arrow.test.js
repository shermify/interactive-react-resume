import React from 'react';
import renderer from 'react-test-renderer';
import Arrow from '../../src/components/Arrow';

describe('<Arrow />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Arrow />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
