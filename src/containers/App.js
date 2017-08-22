import React from 'react';
import Navbar from './Navbar';
import Experience from './Experience';
import Skills from './Skills';
import Profile from './Profile';
import Landing from '../components/Home';
import Contact from '../components/Contact';
import mypic from '../images/me2.jpg';
import resume from '../../config/resume.json';
import '../images/favicon.ico';
import '../styles/global.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js');
    }
  }

  render() {
    return (
      <div>
        <Landing name={resume.name} title={resume.title} />
        <Navbar />
        <Profile profile={resume.profile} headshot={mypic} />
        <Experience {...resume.experience} />
        <Skills {...resume.skills} />
        <Contact {...resume.contact} />
      </div>
    );
  }
}

export default App;
