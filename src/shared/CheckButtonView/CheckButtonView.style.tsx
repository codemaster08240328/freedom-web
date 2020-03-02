import styled from "styled-components";

export const CheckBtn = styled.div`
    font-size: 1em;
    display: inline-block;
    margin: 0.5em 1em 0 0;
    line-height: 1.5em;
    border-radius: 2px;
    letter-spacing: 0.03em;
    font-family: 'Eina03', sans-serif;
    font-weight: normal;
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
    .btn {
        display: inline-block;
        font-size: 1em;
        padding: 0.5em 1em;
        line-height: 1.5em;
        border-radius: 2px;
        letter-spacing: 0.03em;
        font-family: 'Eina03', sans-serif;
        font-weight: 300;
        border-color: #FD2500;
        transition: all 0.8s ease-in-out;
        background: #FD2500 center;
       
          &:not(:disabled) {
              outline: none;
              box-shadow: none;
          }
          &:focus {
            outline: none !important;
            box-shadow: none;
          }
          &:active:focus {
              outline: none;
              box-shadow: none;
          }
      }
`;