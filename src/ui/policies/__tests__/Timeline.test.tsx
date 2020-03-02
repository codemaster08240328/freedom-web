import { shallow, mount } from 'enzyme';
import Timeline from '../Timeline';

describe('Timeline overview', () => {
  let component;
  const props = {
  }

  beforeAll(() => {
    component = shallow(<Timeline {...props} />);
  });

  it('renders FilterHeaderWrapper', () => {
    expect(component.find('FilterHeaderWrapper')).toBeTruthy();
  });

  it('renders FilterHeaderWrapper', () => {
    expect(component.find('FilterHeaderWrapper')).toBeTruthy();
  });

  it('renders Table', () => {
    expect(component.find('Table')).toBeTruthy();
  });
});
