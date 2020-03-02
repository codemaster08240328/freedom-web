import styled from 'styled-components';

export const PopperContainer = styled.div`
  font-family: 'Eina03', sans-serif;
  color: #cccccc;
`;

export const PopHeader = styled.h3`
    line-height: 1.5em;
    font-family: 'Eina03', sans-serif;
    letter-spacing: 0.03em;
    font-weight: normal;
    padding: .5em 1em !important;
    margin-bottom: 0;
   
    font-size: 1rem;
    color: #ffffff;
    background-color: red;
    border-bottom: 1px solid #ebebeb;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
  
`;

export const PopBody = styled.p`
  font-family: 'Eina03', sans-serif;
  padding: 0.5em;
  font-size: 1rem;
  color: #4A4A4A;
`;

export const PopperIcon = styled.button`
  font-size: 1em;
  display: inline-block;
  margin: 1em 0;
  line-height: 1.5em;
  padding: 0.5em 1em;
  border-radius: 2px;
  letter-spacing: 0.02em;
  font-family: 'Eina03', sans-serif;
  color: #ffffff;
  border: 1px solid #FD2500;
  transition: all 0.5s ease-in;
  background: center #FD2500;
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