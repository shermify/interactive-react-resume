import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import Menu from '../../src/components/Menu';

describe('<Menu />', () => {
  test('Toggle called when button is pressed', () => {
    const toggle = sinon.spy();
    const wrapper = mount(
      <Menu toggle={toggle} collapsed offset={50} />,
    );
    wrapper.find('button').simulate('click');
    expect(toggle.calledOnce).toEqual(true);
  });

  test('maxHeight = 55px when collapsed is true', () => {
    const toggle = sinon.spy();
    const component = renderer.create(
      <Menu toggle={toggle} collapsed offset={50} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('maxHeight = 300px when collapsed is true', () => {
    const toggle = sinon.spy();
    const component = renderer.create(
      <Menu toggle={toggle} collapsed={false} offset={50} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
