import styled from 'styled-components';
import ButtonOutline from '../../../shared/buttons/ButtonOutline';
import InputField from '../../../shared/InputField';
import Card from '../../../shared/cards/Card';
import DropDownField from '../../../shared/DropDownField';

export const SearchWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 100px;
  box-shadow:0 1px 5px 0 #6f6f6f;
`;

export const SearchHeader = styled(Card)`
  min-height: 50px;
  width: 100%;
  margin-bottom: 0;
	border-bottom: 1px solid #ddd;
  display: block;
  padding: 18px 0;
  cursor: pointer;
`;

export const SearchFilterBody = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 50px;
  width: 100%;
  height: 164px;
	border: none;
  margin-bottom: 0;
`;

export const SearchBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem 1.25rem;
  align-content: end;
  position: relative;
`;

export const SearchInputField = styled(InputField)`
  height: 50px;
  width: 300px;
`;

export const SearchDropdown = styled(DropDownField)`
  width: 300px;
  height: 50px;
`;

export const SearchButton = styled(ButtonOutline)`
  width: 300px;
  height: 50px;
  margin-left: -7px;
`;

export const HeaderTitle = styled.div`
  display: block;
  float: left;
  width: 150px;
  margin-left: 20px;
  font-size: 18px;
  line-height: 0.94;
  text-align: center;
  color: #7c7c7c;
`;

export const ArrowIcon = styled.img`
  display: block;
  float: right;
  width: 16px;
  height: 16px;
  margin-right: 30px;
`;