import { Formik } from 'formik';
import * as React from 'react';
import { observer } from 'mobx-react';

import { validationSchema } from './validationSchema';
import AgentLoginView from './AgentLogin.view';
import { IAuthStore } from './store'
import { ILoginCredentials } from './types';

export interface IAgentLoginProps {
  store: IAuthStore;
}

@observer
export default class AgentLogin extends React.Component<IAgentLoginProps> {
  onSubmit = (params: ILoginCredentials) => {
    this.props.store.login(params)
  };
  render() {
    let state;
    if (this.props.store.jwtSessionKey) {
      state = this.props.store.jwtSessionKey.state;
    }
    return <Formik
      validationSchema={validationSchema}
      initialValues={this.props.store.credentials}
      onSubmit={this.onSubmit}
    >{props => (<AgentLoginView {...props} state={state}/>)}</Formik>;
  }
}