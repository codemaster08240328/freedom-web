import styled from 'styled-components';

export const ProgressBar = styled.ul`
      margin: 10px 0 10px;
      padding-left: 0;
      counter-reset: step;
      display: flex;
      justify-content: space-around;
      li {
        list-style-type: none;
        width: 100%;
        float: left;
        font-size: 12px;
        position: relative;
        text-align: center;
        text-transform: uppercase;
        color: #DCE0E8;
        &::before {
            width: 25px;
            height: 25px;
            content: '';
            line-height: 30px;
            border: 7px solid #FFFFFF;
            background-color: #FD2500;
            box-shadow: 0 4px 4px 0 #E2E2E2;
            display: block;
            text-align: center;
            margin: 0 auto 10px auto;
            border-radius: 50%;
            transition: all .8s;
            position: relative;
            z-index: 10;
        }
        &:after {
          width: 100%;
          height: 2px;
          content: '';
          position: absolute;
          background-color: #DCE0E8;
          top: 0.99rem;
          left: -50%;
          z-index: 1;
          transition: all .8s;
      }
      &:first-child:after {
          content: none;
      }
        &.active:before {
        top: 0.06rem;
        border-color: #FD2500;
        background-color: #FFFFFF;
        transition: all .8s;
    }
     @media (max-width: 700px) {
          li::before {
            width: 20px;
            height: 20px;
             border: 5px solid #FFFFFF;
          }
        }
  }
`;