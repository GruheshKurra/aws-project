/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getContactus = /* GraphQL */ `query GetContactus($id: ID!) {
  getContactus(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContactusQueryVariables,
  APITypes.GetContactusQuery
>;
export const listContactuses = /* GraphQL */ `query ListContactuses(
  $filter: ModelContactusFilterInput
  $limit: Int
  $nextToken: String
) {
  listContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      lname
      email
      message
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContactusesQueryVariables,
  APITypes.ListContactusesQuery
>;
