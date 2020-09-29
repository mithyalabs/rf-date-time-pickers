import React from 'react';
import { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker'
export { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker'
import { MUIDropDownTimePicker } from './MUIDropDownTimePicker'
export { MUIDropDownTimePicker } from './MUIDropDownTimePicker'
// import {attachField} from 'react-forms'
import '@date-io/date-fns'
import { isArray, map } from 'lodash';


let ComponentMapConfig: { [key: string]: { component: JSX.Element, props?: object } } = {}; 

const attachField = (type: Array<string> | string, component: JSX.Element, props?: object) => { 
    if (isArray(type)) {
        map(type, item => ComponentMapConfig[item] = { component, props })
    } else
        ComponentMapConfig[type] = { component, props };

}
attachField('xyz', <MUIDatePicker />, { variant: 'inline', label: 'Select Date' });
attachField('abc', <MUITimePicker />, { variant: 'inline', label: 'Select Time' });
attachField('qwe', <MUIDropDownTimePicker />)

