import styled from 'styled-components';

export interface IProps {
  primary?: boolean;
}

export const PageDesc =styled.section<IProps>`
    padding: 60px 0;
    margin-bottom: ${props => (props.primary ? '0' : '60px')};
    text-align: center;
    h2.title {
    font-size: calc(30px + (30 - 22) * ((50% - 300px) / (1600 - 300)));
    color: #4A4A4A;
    }
    @media (min-width: 700px) {
      padding: 100px 0 0;
    }
`;
