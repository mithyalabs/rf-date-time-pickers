import {attachField} from 'react-forms'
import React from 'react';
import { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker'
export * from './MUIDateTimePicker'
import { MUIDropDownTimePicker } from './MUIDropDownTimePicker'
export * from './MUIDropDownTimePicker'
import '@date-io/moment'
// "date-fns": "^2.16.1",^1.3.13

attachField('date-picker-new', <MUIDatePicker />);
attachField('time-picker-new', <MUITimePicker />);
attachField('time-picker-select-new', <MUIDropDownTimePicker />)

