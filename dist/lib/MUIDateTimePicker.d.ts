import * as React from "react";
import { DatePickerProps } from "@material-ui/pickers/DatePicker";
import { TimePickerProps } from "@material-ui/pickers/TimePicker";
import { IFieldProps } from "react-forms";
import { TypographyProps } from "@material-ui/core";
export interface MUIDatePickerFieldProps extends DatePickerProps {
    outputFormat?: string;
    header?: string;
    headerProps: TypographyProps;
}
export interface IMUIDatePickerProps extends IFieldProps {
    fieldProps?: MUIDatePickerFieldProps;
}
export declare const MUIDatePicker: React.FC<IMUIDatePickerProps>;
export declare const MUITimePicker: React.FC<IFieldProps & {
    fieldProps?: TimePickerProps;
}>;
