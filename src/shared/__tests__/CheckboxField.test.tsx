import { shallow, mount } from 'enzyme';
import CheckboxField from '../CheckboxField';

describe('CheckboxField overview', () => {
  let component;
  const props = {
    btnText: 'button',
    checked: true,
    id: '1',
  }

  beforeAll(() => {
    component = shallow(<CheckboxField {...props} />);
  });

  it('renders FormGroupWrapper', () => {
    expect(component.find('FormGroupWrapper')).toBeTruthy();
  });

  it('renders CustomInput', () => {
    expect(component.find('CustomInput')).toBeTruthy();
  });

  it('renders MenuText', () => {
    expect(component.find('MenuText')).toBeTruthy();
  });
});
