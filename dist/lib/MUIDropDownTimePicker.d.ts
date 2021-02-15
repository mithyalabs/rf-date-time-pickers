import { BoxProps, IconButtonProps, SelectProps, TypographyProps } from '@material-ui/core';
import moment from 'moment';
import React, { FC } from 'react';
import { IFieldProps } from 'react-forms';
export interface TTime {
    hours?: string;
    minutes?: string;
}
declare type TDate = null | string | Date | moment.Moment;
export interface MUIDropDownTimePickerProps {
    interval?: number;
    saveAsDate?: boolean;
    clearable?: boolean;
    parseFormat?: string;
    iconButtonProps?: IconButtonProps;
    clearIcon?: React.ReactNode;
    clearButton?: React.ReactNode;
    hourLabel?: string;
    minutesLabel?: string;
    containerProps?: BoxProps;
    onTimeChange?: (time: string | null) => any;
    value?: TDate;
    selectProps?: Omit<SelectProps, 'value'>;
    startTime?: TDate;
    endTime?: TDate;
    header?: string;
    headerProps?: TypographyProps;
}
export interface IProps extends IFieldProps {
    fieldProps?: MUIDropDownTimePickerProps;
}
export declare const MUIDropDownTimePicker: FC<IProps>;
export {};
