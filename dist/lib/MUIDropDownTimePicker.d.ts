import { FormControlProps, SelectProps, FormHelperTextProps } from '@material-ui/core';
import { FC } from 'react';
import { IFieldProps } from 'react-forms';
export interface DropDownTimePickerFieldProps extends SelectProps {
    label?: string;
    emptyItem?: string | boolean;
    helperText?: string;
    formControlProps?: FormControlProps;
    formHelperTextProps?: FormHelperTextProps;
    startTime?: string | Date;
    endTime?: string | Date;
    interval?: number;
    amPm?: boolean;
    emptyMenuItemProps?: object;
    menuItemProps?: object;
    inputLabelProps?: object;
}
export interface DropDownTimePickerProps extends IFieldProps {
    fieldProps?: DropDownTimePickerFieldProps;
}
export declare const MUIDropDownTimePicker: FC<DropDownTimePickerProps>;
