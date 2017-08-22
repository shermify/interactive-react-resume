import React from 'react';
import renderer from 'react-test-renderer';
import Skill from '../../src/components/Skill';

describe('<Skill />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Skill
        label="Test skill"
        percent={60}
        size={100}
        strokeWidth={20}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
