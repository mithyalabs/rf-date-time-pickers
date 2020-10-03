import * as React from 'react';
import { KeyboardDatePickerProps } from '@material-ui/pickers/DatePicker';
import { TimePickerProps } from '@material-ui/pickers/TimePicker';
import { IFieldProps } from 'react-forms';
export interface IMUIDatePickerProps extends KeyboardDatePickerProps {
    outputFormat?: string;
}
export declare const MUIDatePicker: React.FC<IFieldProps & {
    fieldProps?: IMUIDatePickerProps;
}>;
export declare const MUITimePicker: React.FC<IFieldProps & {
    fieldProps?: TimePickerProps;
}>;
