import { isArray, map } from 'lodash';
import React from 'react';
import { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker'
import { MUIDropDownTimePicker } from './MUIDropDownTimePicker'

export const MUIDateTime = () => {
    attachField('date-picker', <MUIDatePicker/>, { variant: 'inline', label: 'Select Date' });
    attachField('time-picker', <MUITimePicker />, { variant: 'inline', label: 'Select Time' });
    attachField('time-picker-select', <MUIDropDownTimePicker />)
}

let ComponentMapConfig: { [key: string]: { component: JSX.Element, props?: object } } = {}; 

const attachField = (type: Array<string> | string, component: JSX.Element, props?: object) => { 
    if (isArray(type)) {
        map(type, item => ComponentMapConfig[item] = { component, props })
    } else
        ComponentMapConfig[type] = { component, props };

}