/* eslint-env jest */
import * as React from 'react';
import { shallow} from 'enzyme';
import SubHeroUI from './';

describe('SubHeroUI Component Test', () => {
  it('renders RedWave', () => {
      const subHeroUI = shallow(<SubHeroUI />);
      expect(subHeroUI.find('RedWave')).toHaveLength(1);
  });
 });