/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContactusCreateFormInputValues = {
    name?: string;
    lname?: string;
    email?: string;
    message?: string;
};
export declare type ContactusCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    lname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactusCreateFormOverridesProps = {
    ContactusCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    lname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactusCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactusCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactusCreateFormInputValues) => ContactusCreateFormInputValues;
    onSuccess?: (fields: ContactusCreateFormInputValues) => void;
    onError?: (fields: ContactusCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactusCreateFormInputValues) => ContactusCreateFormInputValues;
    onValidate?: ContactusCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactusCreateForm(props: ContactusCreateFormProps): React.ReactElement;
