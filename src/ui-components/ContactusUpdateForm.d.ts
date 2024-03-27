/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Contactus } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactusUpdateFormInputValues = {
    name?: string;
    lname?: string;
    email?: string;
    message?: string;
};
export declare type ContactusUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    lname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactusUpdateFormOverridesProps = {
    ContactusUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    lname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactusUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactusUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactus?: Contactus;
    onSubmit?: (fields: ContactusUpdateFormInputValues) => ContactusUpdateFormInputValues;
    onSuccess?: (fields: ContactusUpdateFormInputValues) => void;
    onError?: (fields: ContactusUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactusUpdateFormInputValues) => ContactusUpdateFormInputValues;
    onValidate?: ContactusUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactusUpdateForm(props: ContactusUpdateFormProps): React.ReactElement;