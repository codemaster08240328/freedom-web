import { keyBy } from 'lodash';

export interface IRoute {
  name: string;
  page: string;
  pattern: string;
}

export interface IRouteConfig {
  [key: string] : IRoute
}
const _routeConfig = [
  // Product landing pages
  {
    name: 'peopleOverview',
    page: 'people/index',
    pattern: '/people'
  },
  {
    name: 'personDetail',
    page: 'people/detail',
    pattern: '/people/:id'
  },
  {
    name: 'personNew',
    page: 'people/new',
    pattern: '/people/new'
  },
  {
    name: 'personEdit',
    page: 'people/edit',
    pattern: '/people/:id/edit'
  },
  {
    name: 'policyOverview',
    page: 'policies/index',
    pattern: '/policies/'
  },
  {
    name: 'policyApplication',
    page: 'policies/new',
    pattern: '/policies/new'
  },
  {
    name: 'policyDetail',
    page: 'policies/detail',
    pattern: '/policies/:id'
  },
  {
    name: 'productDetail',
    page: 'products/detail',
    pattern: '/products/:id'
  },
  {
    name: 'productOverview',
    page: 'products/index',
    pattern: '/products/'
  },
  {
    name: 'Benificiary form',
    page: 'benificiary',
    pattern: '/benificiary/'
  },
  {
    name: 'AgentLogin',
    page: 'agent/login',
    pattern: '/agent/login/'
  }
];

export const routeConfig: IRouteConfig = keyBy(_routeConfig, 'name');