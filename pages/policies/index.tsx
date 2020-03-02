import React from 'react';

import Overview from '../../src/ui/policies/Overview';

import store from '../../src/ui/policies/store';

class PoliciesOverview extends React.Component {
  componentDidMount() {
    store.selectPolicy();
  }

  render() {
    return (
      <Overview store={store}/>
    )
  }
}

export default PoliciesOverview;