import React from 'react';
import Menu from '../components/Menu';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true, offset: -50 };
  }
  handleToggle = (e) => {
    const sender = e.target.className;

    if (sender !== 'nav-link' || !this.state.collapsed) {
      const collapsed = !this.state.collapsed;
      const offset = collapsed ? -50 : -300;
      this.setState({ collapsed, offset });
    }
  }
  render() {
    return (<Menu
      toggle={this.handleToggle}
      collapsed={this.state.collapsed}
      offset={this.state.offset}
    />);
  }
}

export default Navbar;
