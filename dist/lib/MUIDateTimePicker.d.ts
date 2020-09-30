import * as React from 'react';
import { TimePickerProps } from '@material-ui/pickers/TimePicker';
import { IFieldProps } from 'react-forms';
import { IMUIDatePickerProps } from 'react-forms/dist/lib/ml-form-builder/lib/MUIDateTimePicker';
export declare const MUIDatePicker: React.FC<IFieldProps & {
    fieldProps?: IMUIDatePickerProps;
}>;
export declare const MUITimePicker: React.FC<IFieldProps & {
    fieldProps?: TimePickerProps;
}>;
