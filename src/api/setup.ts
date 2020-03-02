import { GraphQLClient } from 'graphql-request';
import config from '../config';

export const graphQLClient = new GraphQLClient(`${config.API_URL}/graphql`, {
  headers: {
    Authorization: 'Bearer my-jwt-token' // TODO: AUTH
  }
});