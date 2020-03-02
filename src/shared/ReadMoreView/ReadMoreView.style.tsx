import styled from "styled-components";

export const ReadMore = styled.div`
  h3.title {
    text-align: center;
    font-weight: 300;
    color: #4A4A4A;
  }
  @media (min-width: 700px) {
     h3.title {
      text-align: left;
    }
  }
  .read-more-state {
    display: none;
  }
  .read-more-target {
  opacity: 0;
  max-height: 0;
  font-size: 0;
  transition: .3s ease-in-out;
}
.read-more-state:checked ~ .read-more-wrap .read-more-target {
  opacity: 1;
  font-size: inherit;
  max-height: 999em;
  text-wrap: inherit;
}

.read-more-state ~ .read-more-trigger:before {
  content: 'Read more';
}

.read-more-state:checked ~ .read-more-trigger:before {
  content: 'Read less';
}

.read-more-trigger {
  font-weight: normal;
  cursor: pointer;
  display: block;
  padding: 0 .5em;
  position: relative;
  margin: 0 auto 40px;
  text-align: center;
  color: #FF0000;
  font-size: 1rem;
  line-height: 2;
}
`;