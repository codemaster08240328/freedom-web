import { IPolicy, PolicyList } from '../ui/policies/types';
import { graphQLClient } from './setup';

export const getPolicyQuery = async (id): Promise<IPolicy> => {
  // language=GraphQL
  const query = `
        query getPolicyById($id: ID!) {
          getPolicy(id: $id) {
              id
              policyNo
              openedAt
              installment
              due
              arrears
              paymentMethod
              status
              balance
          }
      }`;
  const { getPolicy } = await graphQLClient.request<{ getPolicy: IPolicy }>(query, {id});
  return getPolicy;
};

export const getAllPoliciesQuery = async (): Promise<PolicyList> => {
  // language=GraphQL
  const query = `
      query {
          getAllPolicies {
              id
              policyNo
              openedAt
              installment
              due
              arrears
              paymentMethod
              status
              balance
          }
      }`;
  const { getAllPolicies } = await graphQLClient.request<{ getAllPolicies: PolicyList }>(query);
  console.log(getAllPolicies);
  return getAllPolicies;
};

export const updatePolicyQuery = async (id: string, application): Promise<IPolicy> => {
  // language=GraphQL
  const query = `
      mutation updatePolicy($id: ID!, $application: ApplicationInput!)
      {updatePolicy (id: $id, application: $application) {
          id
      }`;
  const { updatePolicy } = await graphQLClient.request<{ updatePolicy: IPolicy }>(query, { id, application });
  return updatePolicy;
};

export const removePolicyQuery = async (id: string): Promise<IPolicy> => {
  // language=GraphQL
  const query = `
      mutation removePolicy($id: ID!) {
          removePolicy(id: $id) {
              id
          }
      }`;
  const { removePolicy } = await graphQLClient.request<{ removePolicy: IPolicy }>(query, { id });
  return removePolicy;
};