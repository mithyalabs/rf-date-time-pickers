import * as React from 'react';
import { TimePickerProps } from '@material-ui/pickers/TimePicker';
import { KeyboardDatePickerProps } from '@material-ui/pickers/DatePicker';
import { FormikValues } from 'formik';
import { TFieldConditions } from './ConditionalOperation';
export interface ReadOnlyProps {
    renderer: (props: IFieldProps) => React.ReactNode;
}
export interface FormConfig {
    type: string;
    name?: string;
    id?: string;
    valueKey: string;
    flex?: number | string;
    fieldProps?: object;
    styles?: object;
    classNames?: Array<string>;
    condition?: TFieldConditions;
    readOnlyProps?: ReadOnlyProps;
}
export interface IFieldProps {
    formikProps?: FormikValues;
    fieldConfig?: FormConfig;
    isReadOnly?: boolean;
}
export interface IMUIDatePickerProps extends KeyboardDatePickerProps {
    outputFormat?: string;
}
export declare const MUIDatePicker: React.FC<IFieldProps & {
    fieldProps?: IMUIDatePickerProps;
}>;
export declare const MUITimePicker: React.FC<IFieldProps & {
    fieldProps?: TimePickerProps;
}>;
