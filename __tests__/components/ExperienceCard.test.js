import React from 'react';
import renderer from 'react-test-renderer';
import ExperienceCard from '../../src/components/ExperienceCard';

describe('ExperienceCard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ExperienceCard
        company="test company"
        date="1/1/2017"
        description={{ paragraphs: ['description 1', 'description 2'] }}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
