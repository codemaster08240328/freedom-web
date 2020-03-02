import React from 'react';

import H1 from './__snapshots__/TitleWithShadow.style';

const TitleWithShadow = props => (
  <H1 {...props}>
    {props.children}
  </H1>
);

export default TitleWithShadow;