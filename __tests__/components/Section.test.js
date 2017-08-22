import React from 'react';
import renderer from 'react-test-renderer';
import Section from '../../src/components/Section';

describe('<Section />', () => {
  const testProps = {
    id: 'Test',
    title: 'Section Test',
    lead: 'test lead',
    quoteBy: 'Daniel Sherman',
  };
  it('renders correctly', () => {
    const tree = renderer.create(
      <Section {...testProps}>Test text</Section>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
