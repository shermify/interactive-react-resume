import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Navbar from '../../src/containers/Navbar';

describe('<Navbar />', () => {
  const wrapper = mount(<Navbar />);

  it('renders correctly', () => {
    const tree = renderer.create(
      <Navbar />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should remain collapsed if already collapsed and sender is navlink', () => {
    const mockedEvent = { target: {
      className: 'nav-link',
    } };
    wrapper.instance().handleToggle(mockedEvent);
    expect(wrapper.state().collapsed).toEqual(true);
    expect(wrapper.state().offset).toEqual(-50);
  });

  it('should open if collapsed and sender is button', () => {
    const mockedEvent = { target: {
      className: 'button',
    } };
    wrapper.instance().handleToggle(mockedEvent);
    expect(wrapper.state().collapsed).toEqual(false);
    expect(wrapper.state().offset).toEqual(-300);
  });

  it('should close if open and sender is nav-link', () => {
    const mockedEvent = { target: {
      className: 'nav-link',
    } };
    wrapper.instance().handleToggle(mockedEvent);
    expect(wrapper.state().collapsed).toEqual(true);
    expect(wrapper.state().offset).toEqual(-50);
  });

  it('should close if open and sender is button', () => {
    const mockedEvent = { target: {
      className: 'button',
    } };
    wrapper.setState({ collapsed: false, offset: -300 });
    wrapper.instance().handleToggle(mockedEvent);
    expect(wrapper.state().collapsed).toEqual(true);
    expect(wrapper.state().offset).toEqual(-50);
  });
});
