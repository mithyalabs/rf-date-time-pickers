import { KeyboardTimePicker, TimePickerProps } from "@material-ui/pickers";
import { FormikValues } from "formik";
import { get } from "lodash";
import React from "react";
import { IFieldProps } from "react-forms";

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
