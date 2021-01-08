import {
  FormControlProps,
  InputLabelProps,
  MenuItemProps,
  SelectProps,
  FormHelperTextProps,
} from "@material-ui/core";
import { FormikProps } from "formik";
import React, { FC } from "react";
import moment from "moment";
import { FormConfig, IFieldProps, MUISelectField } from "react-forms";
import { getFieldError } from "./Utils";
import { IMUISelectProps } from "react-forms/dist/lib/ml-form-builder/lib/MUISelectField";

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

const getOptions = (
  startTime: string | Date,
  endTime: string | Date,
  interval: number,
  amPm: boolean
) => {
  let start = amPm
    ? moment(startTime, "hh:mm a").toDate()
    : moment(startTime, "HH:mm").toDate();
  let end = amPm
    ? moment(endTime, "hh:mm a").toDate()
    : moment(endTime, "HH:mm").toDate();
  let list: { name: string; value: string }[] = [];
  while (start.getTime() <= end.getTime()) {
    let item = amPm
      ? moment(start).format("hh:mm a")
      : moment(start).format("HH:mm");
    list.push({ name: item, value: item });
    start = new Date(start.getTime() + interval * 60000);
  }
  return list;
};

export const MUIDropDownTimePicker: FC<DropDownTimePickerProps> = (props) => {
  const {
    fieldProps = {} as DropDownTimePickerFieldProps,
    fieldConfig = {} as FormConfig,
    formikProps = {} as FormikProps<any>,
  } = props;
  const fieldError = getFieldError(fieldProps.name || "", formikProps);
  const {
    startTime = "00:00",
    endTime = "23:45",
    interval = 15,
    amPm = false,
    label,
    emptyItem,
    helperText,
    inputLabelProps = {} as InputLabelProps,
    formHelperTextProps,
    emptyMenuItemProps = {} as MenuItemProps,
    error = !!fieldError,
    ...selectProps
  } = fieldProps;
  const list = getOptions(startTime, endTime, interval, amPm);

  const selectFieldProps = {
    label,
    options: list,
    emptyItem,
    helperText,
    inputLabelProps,
    emptyMenuItemProps,
    error,
    ...selectProps,
  } as IMUISelectProps;

  return (
    <MUISelectField
      formikProps={formikProps}
      fieldConfig={fieldConfig}
      fieldProps={selectFieldProps}
    />
  );
};
