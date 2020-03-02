import 'bootstrap/dist/css/bootstrap.min.css';
import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faHome, faBell, faUser, faCopy, faUsers, faComments, faLayerGroup, faSignature, faQuestionCircle, faInfoCircle, faCheck, faCheckCircle, faMobileAlt, faPencilAlt, faCalendarAlt, faClipboard, faUserFriends, faUserCheck, faEye } from '@fortawesome/free-solid-svg-icons';

import { Store, NotificationContainer } from '../src/shared/notification';

import HeaderUI from '../src/shared/Header';

import routes, { Router } from '../routes';
import ReactGA from 'react-ga';
import '../static/App.css';
import '../static/preloader.css';
const Logo = '/static/img/logos/FlIcon-red.svg';

library.add(far, faBell, faUser, faHome, faCopy, faUsers, faComments, faLayerGroup, faSignature, faQuestionCircle, faInfoCircle, faCheck, faBell, faCheckCircle, faMobileAlt, faPencilAlt, faCalendarAlt, faClipboard, faUserFriends, faUserCheck, faEye);

export interface IProps {
  currentRoute: { name: string, path: string; };
  router: { asPath: string };
}

export default class Quasi extends App<IProps> {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const currentRoute = routes.routes.find(r => router.asPath.match(r.regex)) || { name: router.asPath };

    return { pageProps, currentRoute };
  }

  componentDidMount() {
    initGA();
    Router.events.on('routeChangeComplete', logPageView);

    window.addEventListener('beforeunload', () => {
      Router.events.off('routeChangeComplete', logPageView);
    });

    logPageView(this.props.router.asPath);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={{ theme: 'mainCallCenterTheme' }}>
        <Container>
          <HeaderUI logo={Logo} />
          <Component {...pageProps} />
          <NotificationContainer store={ Store }/>
        </Container>
      </ThemeProvider>
    );
  }
}

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-120735413-1');
};
export const logPageView = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};
