import { shallow, mount } from 'enzyme';
import DropDownField from '../DropDownField';
import { showFieldData } from '@src/ui/policies/PolicyConfig';

describe('DropDownField overview', () => {
  let component;
  const props = {
    btnText: 'button',
    fields: showFieldData,
    changeFields: jest.fn(),
  };

  beforeAll(() => {
    component = shallow(<DropDownField {...props} />);
  });

  it('renders ButtonDropdown', () => {
    expect(component.find('ButtonDropdown')).toBeTruthy();
  });

  it('renders DropDownBtn', () => {
    expect(component.find('DropDownBtn')).toBeTruthy();
  });

  it('renders DropdownMenu', () => {
    expect(component.find('DropdownMenu')).toBeTruthy();
  });

  it('renders MenuItem', () => {
    expect(component.find('MenuItem')).toBeTruthy();
  });
});
