/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContactusInput = {
  id?: string | null,
  name: string,
  lname: string,
  email: string,
  message: string,
};

export type ModelContactusConditionInput = {
  name?: ModelStringInput | null,
  lname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactusConditionInput | null > | null,
  or?: Array< ModelContactusConditionInput | null > | null,
  not?: ModelContactusConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Contactus = {
  __typename: "Contactus",
  id: string,
  name: string,
  lname: string,
  email: string,
  message: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContactusInput = {
  id: string,
  name?: string | null,
  lname?: string | null,
  email?: string | null,
  message?: string | null,
};

export type DeleteContactusInput = {
  id: string,
};

export type ModelContactusFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactusFilterInput | null > | null,
  or?: Array< ModelContactusFilterInput | null > | null,
  not?: ModelContactusFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelContactusConnection = {
  __typename: "ModelContactusConnection",
  items:  Array<Contactus | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionContactusFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  lname?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContactusFilterInput | null > | null,
  or?: Array< ModelSubscriptionContactusFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateContactusMutationVariables = {
  input: CreateContactusInput,
  condition?: ModelContactusConditionInput | null,
};

export type CreateContactusMutation = {
  createContactus?:  {
    __typename: "Contactus",
    id: string,
    name: string,
    lname: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactusMutationVariables = {
  input: UpdateContactusInput,
  condition?: ModelContactusConditionInput | null,
};

export type UpdateContactusMutation = {
  updateContactus?:  {
    __typename: "Contactus",
    id: string,
    name: string,
    lname: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactusMutationVariables = {
  input: DeleteContactusInput,
  condition?: ModelContactusConditionInput | null,
};

export type DeleteContactusMutation = {
  deleteContactus?:  {
    __typename: "Contactus",
    id: string,
    name: string,
    lname: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContactusQueryVariables = {
  id: string,
};

export type GetContactusQuery = {
  getContactus?:  {
    __typename: "Contactus",
    id: string,
    name: string,
    lname: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactusesQueryVariables = {
  filter?: ModelContactusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactusesQuery = {
  listContactuses?:  {
    __typename: "ModelContactusConnection",
    items:  Array< {
      __typename: "Contactus",
      id: string,
      name: string,
      lname: string,
      email: string,
      message: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContactusSubscriptionVariables = {
  filter?: ModelSubscriptionContactusFilterInput | null,
};

export type OnCreateContactusSubscription = {
  onCreateContactus?:  {
    __typename: "Contactus",
    id: string,
    name: string,
    lname: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactusSubscriptionVariables = {
  filter?: ModelSubscriptionContactusFilterInput | null,
};

export type OnUpdateContactusSubscription = {
  onUpdateContactus?:  {
    __typename: "Contactus",
    id: string,
    name: string,
    lname: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactusSubscriptionVariables = {
  filter?: ModelSubscriptionContactusFilterInput | null,
};

export type OnDeleteContactusSubscription = {
  onDeleteContactus?:  {
    __typename: "Contactus",
    id: string,
    name: string,
    lname: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
