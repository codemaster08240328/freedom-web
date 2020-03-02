import { shallow, mount } from 'enzyme';
import SearchFilter from '../SearchFilter';
import { showFieldData, sortFieldData } from '../PolicyConfig';

describe('Policies overview', () => {
  let component;
  const props = {
    btnText: 'button',
    showFields: showFieldData,
    sortFields: sortFieldData,
    changeFields: jest.fn(),
    searchPolicy: jest.fn(),
  };

  beforeAll(() => {
    component = shallow(<SearchFilter {...props} />);
  });

  it('renders SearchWrapper', () => {
    expect(component.find('SearchWrapper')).toBeTruthy();
  });

  it('renders SearchHeader', () => {
    expect(component.find('SearchHeader')).toBeTruthy();
  });

  it('renders HeaderTitle', () => {
    expect(component.find('HeaderTitle')).toBeTruthy();
  });

  it('renders SearchButton', () => {
    expect(component.find('HeaderTitle')).toBeTruthy();
  });

  it('renders SearchDropdown', () => {
    const mockChangeFields = jest.fn();
    const mockSearchFields = jest.fn();
    const mockProps = {
      btnText: 'button',
      showFields: showFieldData,
      sortFields: sortFieldData,
      changeFields: mockChangeFields,
      searchPolicy: mockSearchFields,
    };

    const mockComponent = mount(<SearchFilter {...mockProps} />);

    const buttonText = 'Show only';
    expect((mockComponent.find('#showField_dropdown').at(1).props() as any).btnText).toEqual(buttonText);
  });
});
