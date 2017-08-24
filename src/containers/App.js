import React from 'react';
import Navbar from '../containers/Navbar';
import Experience from '../containers/Experience';
import Skills from '../containers/Skills';
import Profile from '../components/Profile';
import Cover from '../components/Cover';
import Contact from '../components/Contact';
import mypic from '../images/me2.jpg';
import '../images/favicon.ico';
import '../styles/global.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { resume: {}, isLoading: true };

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js');
    }
  }

  componentDidMount() {
    fetch('https://shermify.com/data/resume.json')
      .then(response => response.json())
      .then((json) => {
        this.setState({ resume: json, isLoading: false });
      });
  }

  render() {
    const { resume } = this.state;

    if (!this.state.isLoading) {
      return (
        <div>
          <Cover name={resume.name} title={resume.title} />
          <Navbar />
          <Profile profile={resume.profile} headshot={mypic} />
          <Experience {...resume.experience} />
          <Skills {...resume.skills} />
          <Contact {...resume.contact} />
        </div>
      );
    }

    return (
      <div>
        <Cover />
      </div>
    );
  }
}

export default App;
