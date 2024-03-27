import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerContactus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contactus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly lname: string;
  readonly email: string;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contactus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly lname: string;
  readonly email: string;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Contactus = LazyLoading extends LazyLoadingDisabled ? EagerContactus : LazyContactus

export declare const Contactus: (new (init: ModelInit<Contactus>) => Contactus) & {
  copyOf(source: Contactus, mutator: (draft: MutableModel<Contactus>) => MutableModel<Contactus> | void): Contactus;
}