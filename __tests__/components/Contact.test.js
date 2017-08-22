import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../../src/components/Contact';

describe('<Contact />', () => {
  const testData = {
    lead: 'test lead',
    quoteBy: 'test quote',
    text: 'jkvsdhf kjh kjfhkjfjk j jhk',
    phone: '773-551-3085',
    email: 'example@example.com',
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <Contact {...testData} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
