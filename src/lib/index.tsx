import {attachField} from 'react-forms'
import React from 'react';
import { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker'
export { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker'
import { MUIDropDownTimePicker } from './MUIDropDownTimePicker'
export { MUIDropDownTimePicker } from './MUIDropDownTimePicker'
import '@date-io/date-fns'

attachField('date-picker-new', <MUIDatePicker />, { variant: 'inline', label: 'Select Date' });
attachField('time-picker-new', <MUITimePicker />, { variant: 'inline', label: 'Select Time' });
attachField('time-picker-select-new', <MUIDropDownTimePicker />)

