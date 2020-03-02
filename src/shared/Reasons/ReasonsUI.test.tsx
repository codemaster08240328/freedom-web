import * as React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ReasonsUI from './';

describe('ReasonsUI Component Test', () => {
  let snapshot;

  it('renders Container', () => {
    const reasonUI = shallow(<ReasonsUI />);
    expect(reasonUI.find('Container')).toHaveLength(1);
  });

  it('renders CardComponents', () => {
    const reasonUI = shallow(<ReasonsUI />);
    expect(reasonUI.find('CardComponent')).toHaveLength(3);
  });

  it('renders 3 Column', () => {
    const reasonUI = shallow(<ReasonsUI />);
    expect(reasonUI.find('Col')).toHaveLength(3);
  });

  it('renders IntroBlurb', () => {
    const reasonUI = shallow(<ReasonsUI />);
    expect(reasonUI.find('IntroBlurb')).toHaveLength(1);
  });

  it('renders correctly', () => {
    snapshot = renderer.create(<ReasonsUI />);
  });

  it('matches snapshot', () => {
    const tree = snapshot.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
