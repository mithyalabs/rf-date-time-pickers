import * as React from 'react';
import { KeyboardDatePicker, KeyboardDatePickerProps} from '@material-ui/pickers/DatePicker';
import { TimePickerProps} from '@material-ui/pickers/TimePicker';
import { KeyboardTimePicker} from '@material-ui/pickers/TimePicker';
import { FormikValues } from 'formik';
import { get } from 'lodash';
import {IFieldProps} from 'react-forms'
// import { IMUIDatePickerProps } from 'react-forms/dist/lib/ml-form-builder/lib/MUIDateTimePicker';

export interface IMUIDatePickerProps extends KeyboardDatePickerProps {
    outputFormat?: string
}

export const MUIDatePicker: React.FC<IFieldProps & { fieldProps?: IMUIDatePickerProps }> = (props) => {
    const { fieldProps = {} as IMUIDatePickerProps, formikProps = {} as FormikValues } = props;
    const value = get(formikProps, `values.${fieldProps.name}`);
    const fieldError = get(formikProps, `errors.${fieldProps.name}`);
    const { outputFormat, ...datePickerProps } = fieldProps;
    const handleDateChange = (date: any | null) => {
        if (date  === null) {
            formikProps.setFieldValue(fieldProps.name, date, false);
        }
        else{
            let data = new Date(date).toISOString();
            // (outputFormat === 'date') ? date :moment(date).format(outputFormat || fieldProps.format || 'MM/DD/YYYY')
            formikProps.setFieldValue(fieldProps.name, data , false);
        }    
    };
    const updatedProps = {
        ...datePickerProps,
        error: !!fieldError,
        helperText: (fieldError || ''),
        onChange: handleDateChange,
        value: (!value) ? null : undefined,
        inputValue: (!value) ? '' : value,
        format: fieldProps.format || 'mm/dd/yyyy',

        // onError: (error: React.ReactNode) => {
        //     // handle as a side effect
        //     if (error !== fieldError) {
        //         formikProps.setFieldError(fieldProps.name, error);
        //     }
        // }
    };

    return (
        <KeyboardDatePicker
            {...updatedProps}
        />
    )
}

export const MUITimePicker: React.FC<IFieldProps & { fieldProps?: TimePickerProps }> = props => {
    const { fieldProps = {} as TimePickerProps, formikProps = {} as FormikValues } = props;
    const fieldError = get(formikProps, `errors.${fieldProps.name}`);
    const value = get(formikProps, `values.${fieldProps.name}`);
    const handleTimeChange = (time: any | null) => {
        if (time === null)
            formikProps.setFieldValue(fieldProps.name, time, false);
        else
            formikProps.setFieldValue(fieldProps.name, new Date(time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',hour12: false }), false)
    }
    const updatedProps = {
        ...fieldProps,
        error: !!fieldError,
        helperText: (fieldError || ''),
        onChange: handleTimeChange,
        value: (!value) ? null : undefined,
        inputValue: (!value) ? '' : value,
        // onError: (error: React.ReactNode) => {
        //     if (error !== fieldError) {
        //         formikProps.setFieldError(fieldProps.name, error);
        //     }
        // },
    };
    return (
        <KeyboardTimePicker  {...updatedProps} />
    )
}

