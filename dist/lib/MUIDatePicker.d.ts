import { TypographyProps } from "@material-ui/core";
import { KeyboardDatePickerProps } from "@material-ui/pickers";
import React from "react";
import { IFieldProps } from "react-forms";
export interface MUIDatePickerFieldProps extends KeyboardDatePickerProps {
    outputFormat?: string;
    header?: string;
    headerProps: TypographyProps;
}
export interface IMUIDatePickerProps extends IFieldProps {
    fieldProps?: MUIDatePickerFieldProps;
}
export declare const MUIDatePicker: React.FC<IMUIDatePickerProps>;
