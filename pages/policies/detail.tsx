import { Router } from 'next-routes';
import { withRouter } from 'next/router';
import * as React from 'react';

import PolicyDetail from '../../src/ui/policies/PolicyDetail';
import PolicyStore from '../../src/ui/policies/store';
import { IPolicy } from '../../src/ui/policies/types';

interface IProps {
  router: Router;
  policy?: IPolicy;
}

class PolicyDetailPage extends React.Component<IProps> {
  static async getInitialProps(ctx) {
    const policy: IPolicy = { ...(ctx.query as any) };

    await PolicyStore.selectPolicy(policy.id);
    return { policy: PolicyStore.selectedPolicy };
  }

  componentDidMount() {
    PolicyStore.selectedPolicy = this.props.policy;
  }

  updatePolicy = async (policy: IPolicy) => {
    await PolicyStore.updatePolicy(policy);
  };

  render() {
    const { policy } = this.props;

    return (
      <div>
        <PolicyDetail
          policy={policy}
          updatePolicy={this.updatePolicy}
          />
      </div>
    );
  }
}

export default withRouter(PolicyDetailPage);
