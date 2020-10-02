import {attachField} from 'react-forms'
import React from 'react';
import { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker'
export * from './MUIDateTimePicker'
import { MUIDropDownTimePicker } from './MUIDropDownTimePicker'
export * from './MUIDropDownTimePicker'
import '@date-io/moment'

attachField('mui-date-picker', <MUIDatePicker />);
attachField('mui-time-picker', <MUITimePicker />);
attachField('mui-time-picker-select', <MUIDropDownTimePicker />)

