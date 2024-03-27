/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createContactus = /* GraphQL */ `mutation CreateContactus(
  $input: CreateContactusInput!
  $condition: ModelContactusConditionInput
) {
  createContactus(input: $input, condition: $condition) {
    id
    name
    lname
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContactusMutationVariables,
  APITypes.CreateContactusMutation
>;
export const updateContactus = /* GraphQL */ `mutation UpdateContactus(
  $input: UpdateContactusInput!
  $condition: ModelContactusConditionInput
) {
  updateContactus(input: $input, condition: $condition) {
    id
    name
    lname
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContactusMutationVariables,
  APITypes.UpdateContactusMutation
>;
export const deleteContactus = /* GraphQL */ `mutation DeleteContactus(
  $input: DeleteContactusInput!
  $condition: ModelContactusConditionInput
) {
  deleteContactus(input: $input, condition: $condition) {
    id
    name
    lname
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContactusMutationVariables,
  APITypes.DeleteContactusMutation
>;
