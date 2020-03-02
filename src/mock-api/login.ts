import { mockRequestHelper } from './mock-request.helper';
import { ILoginCredentials } from '../ui/login/types'

export const postLogin = (credentials: ILoginCredentials): Promise<string> => (
  mockRequestHelper('someJwtString')
);