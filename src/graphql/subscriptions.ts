/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateContactus = /* GraphQL */ `subscription OnCreateContactus($filter: ModelSubscriptionContactusFilterInput) {
  onCreateContactus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContactusSubscriptionVariables,
  APITypes.OnCreateContactusSubscription
>;
export const onUpdateContactus = /* GraphQL */ `subscription OnUpdateContactus($filter: ModelSubscriptionContactusFilterInput) {
  onUpdateContactus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContactusSubscriptionVariables,
  APITypes.OnUpdateContactusSubscription
>;
export const onDeleteContactus = /* GraphQL */ `subscription OnDeleteContactus($filter: ModelSubscriptionContactusFilterInput) {
  onDeleteContactus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContactusSubscriptionVariables,
  APITypes.OnDeleteContactusSubscription
>;
