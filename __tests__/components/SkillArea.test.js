import React from 'react';
import { shallow } from 'enzyme';
import SkillArea from '../../src/components/SkillArea';
import Skill from '../../src/components/Skill';

describe('<SkillArea />', () => {
  const testSkills = [
    {
      name: 'Test Skill 1',
      percent: 100,
      image: 'test1.png',
    }, {
      name: 'Test Skill 2',
      percent: 100,
      image: 'test2.png',
    },
  ];

  it('should render two <Skill /> components', () => {
    const wrapper = shallow(<SkillArea skills={testSkills} />);
    expect(wrapper.find(Skill)).toHaveLength(2);
  });
});
