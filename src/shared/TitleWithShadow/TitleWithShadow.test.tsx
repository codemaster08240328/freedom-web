/* eslint-env jest */
import * as React from 'react';
import { shallow } from 'enzyme';

import TitleWithShadow from './';

it('renders correctly', () => {
  const component = shallow(<TitleWithShadow>Title</TitleWithShadow>);

  expect(component).toMatchSnapshot();
});