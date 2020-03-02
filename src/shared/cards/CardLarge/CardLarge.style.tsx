import styled from 'styled-components';
import Card from "../Card";
import { Img } from '../../ImgView';

export const ProductCard = styled(Card)`
	border: none;
		box-shadow: 0 2px 2px 0 #E2E2E2;
`;

export const ImgStyle = styled(Img)`
    width: 100%;
    height: 100px;
    padding: 2em 1em 1em;
`;