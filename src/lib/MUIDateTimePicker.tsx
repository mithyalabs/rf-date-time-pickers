import * as React from "react";
import { DatePicker, DatePickerProps } from "@material-ui/pickers/DatePicker";
import { TimePickerProps } from "@material-ui/pickers/TimePicker";
import { KeyboardTimePicker } from "@material-ui/pickers/TimePicker";
import { FormikValues } from "formik";
import { get } from "lodash";
import { IFieldProps } from "react-forms";
import { TypographyProps, Box, Typography } from "@material-ui/core";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
// import { IMUIDatePickerProps } from 'react-forms/dist/lib/ml-form-builder/lib/MUIDateTimePicker';

export interface MUIDatePickerFieldProps extends DatePickerProps {
  outputFormat?: string;
  header?: string;
  headerProps: TypographyProps;
}

export interface IMUIDatePickerProps extends IFieldProps {
  fieldProps?: MUIDatePickerFieldProps;
}

export const MUIDatePicker: React.FC<IMUIDatePickerProps> = (props) => {
  const {
    formikProps = {} as FormikValues,
    fieldProps = {} as MUIDatePickerFieldProps,
  } = props;
  const { name = "" } = fieldProps;
  const value = get(formikProps, `values.${name}`);
  const fieldError = get(formikProps, `errors.${fieldProps.name}`);
  const {
    outputFormat = "DD/MM/YYYY",
    header,
    headerProps,
    ...datePickerProps
  } = fieldProps;
  const handleDateChange = (date: MaterialUiPickersDate) => {
    if (date === null) {
      formikProps.setFieldValue(name, date, false);
    } else {
      const dateValue = date.format();
      formikProps.setFieldValue(name, dateValue, false);
    }
  };
  const updatedProps = {
    ...datePickerProps,
    error: !!fieldError,
    helperText: fieldError || "",
    onChange: handleDateChange,
    value: value || null,
    inputValue: value || null,
    format: outputFormat,
  };

  return (
    <Box>
      <Typography {...headerProps}>{header}</Typography>
      <DatePicker {...updatedProps} />
    </Box>
  );
};
export const MUITimePicker: React.FC<
  IFieldProps & { fieldProps?: TimePickerProps }
> = (props) => {
  const {
    fieldProps = {} as TimePickerProps,
    formikProps = {} as FormikValues,
  } = props;
  const fieldError = get(formikProps, `errors.${fieldProps.name}`);
  const value = get(formikProps, `values.${fieldProps.name}`);
  const handleTimeChange = (time: any | null) => {
    if (time === null) formikProps.setFieldValue(fieldProps.name, time, false);
    else
      formikProps.setFieldValue(
        fieldProps.name,
        new Date(time).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        }),
        false
      );
  };
  const updatedProps = {
    ...fieldProps,
    error: !!fieldError,
    helperText: fieldError || "",
    onChange: handleTimeChange,
    value: !value ? null : undefined,
    inputValue: !value ? "" : value,
    // onError: (error: React.ReactNode) => {
    //     if (error !== fieldError) {
    //         formikProps.setFieldError(fieldProps.name, error);
    //     }
    // },
  };
  return <KeyboardTimePicker {...updatedProps} />;
};
