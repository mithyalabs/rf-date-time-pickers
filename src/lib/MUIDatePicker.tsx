import { Box, Typography, TypographyProps } from "@material-ui/core";
import { KeyboardDatePicker, KeyboardDatePickerProps } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { FormikValues } from "formik";
import { get } from "lodash";
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
        <KeyboardDatePicker {...updatedProps} />
      </Box>
    );
  };