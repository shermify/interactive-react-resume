import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../../src/components/Loader';

describe('<Loader />', () => {
  it('style changes to display: none on visible = false', () => {
    const component = renderer.create(
      <Loader visible={false} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('style changes to display: block on visible = true', () => {
    const component = renderer.create(
      <Loader visible />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
