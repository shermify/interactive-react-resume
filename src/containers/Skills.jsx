import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import SkillArea from '../components/SkillArea';
import Section from '../components/Section';
import Loader from '../components/Loader';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstAreaLoaded: false };
  }

  render() {
    const { firstAreaLoaded } = this.state;
    const { skillList, lead, quoteBy } = this.props;
    const importAll = r => r.keys().reduce((memo, item) => ({ ...memo, [item.replace('./', '')]: r(item) }), []);
    const images = importAll(require.context('../images/logos', true));
    return (
      <Section id="skills" title="Core Skills" lead={lead} quoteBy={quoteBy}>
        <Loader visible={!firstAreaLoaded} />
        <LazyLoad
          offsetBottom={250}
          onContentVisible={() => {
            this.setState({ firstAreaLoaded: true });
          }}>
          <SkillArea title="Programming" skills={skillList.programming} images={images} />
        </LazyLoad>
      </Section>
    );
  }
}

Skills.propTypes = {
  lead: PropTypes.string,
  quoteBy: PropTypes.string,
  skillList: PropTypes.shape({
    programming: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        percent: PropTypes.number,
        img: PropTypes.string,
      }),
    ),
    devops: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        percent: PropTypes.number,
        img: PropTypes.string,
      }),
    ),
  }).isRequired,
};

Skills.defaultProps = {
  lead: '',
  quoteBy: '',
};

export default Skills;
