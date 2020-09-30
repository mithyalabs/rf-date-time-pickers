import {attachField} from 'react-forms'
// "react-places-autocomplete": "^7.2.1",
import React from 'react';
import { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker'
export { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker'
import { MUIDropDownTimePicker } from './MUIDropDownTimePicker'
export { MUIDropDownTimePicker } from './MUIDropDownTimePicker'
import '@date-io/date-fns'
// import { isArray, map } from 'lodash';

// let ComponentMapConfig: { [key: string]: { component: JSX.Element, props?: object } } = {}; 

// export const attachField = (type: Array<string> | string, component: JSX.Element, props?: object) => { 
//     if (isArray(type)) {
//         map(type, item => ComponentMapConfig[item] = { component, props })
//     } else
//         ComponentMapConfig[type] = { component, props };
// }

attachField('date-picker-new', <MUIDatePicker />, { variant: 'inline', label: 'Select Date' });
attachField('time-picker-new', <MUITimePicker />, { variant: 'inline', label: 'Select Time' });
attachField('time-picker-select-new', <MUIDropDownTimePicker />)

