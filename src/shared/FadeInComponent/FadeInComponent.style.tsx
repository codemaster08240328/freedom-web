import styled from 'styled-components';

export const FadeInBtn = styled.button`
    font-size: 1em;
    line-height: 1.5em;
    border-radius: 2px;
    letter-spacing: 0.03em;
    font-family: 'Eina03', sans-serif;
    font-weight: 300;
    color: #ffffff;
    margin: 0.5em 0;
    padding: 0.5em 1em;
    border-color: #FD2500;
    background:#FD2500 center;
    transition: background 0.8s;
      &:not(:disabled) {
          outline: none; 
          box-shadow: none;
      }
       &:hover {
       color: #ffffff;
       border-color: #90000C;
       background: #90000C radial-gradient(circle, transparent 1%, #90000C 1%) center/15000%;
      }
      &:active {
        background-color: #FF7760;
        background-size: 100%;
        transition: background 0s;
      }
      &:focus {
            outline: none !important; 
            box-shadow: none;
        }
      &:active:focus {
        outline: none; 
        box-shadow: none;
        }
`;
