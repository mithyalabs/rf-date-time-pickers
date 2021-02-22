import { attachField } from "react-forms";
import React from "react";
import { MUIDatePicker } from "./MUIDatePicker";
export * from "./MUIDatePicker";
import { MUIDropDownTimePicker } from "./MUIDropDownTimePicker";
export * from "./MUIDropDownTimePicker";
import { MUITimePicker } from "./MUITimePicker";
export * from "./MUITimePicker";
import "@date-io/moment";

attachField("mui-date-picker", <MUIDatePicker />);
attachField("mui-time-picker", <MUITimePicker />);
attachField("mui-time-picker-select", <MUIDropDownTimePicker />);
