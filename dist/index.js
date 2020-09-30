import React from 'react';
import { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker';
export { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker';
import { MUIDropDownTimePicker } from './MUIDropDownTimePicker';
export { MUIDropDownTimePicker } from './MUIDropDownTimePicker';
// import {attachField} from 'react-forms'
import '@date-io/date-fns';
import { isArray, map } from 'lodash';
// "react-places-autocomplete": "^7.2.1",
var ComponentMapConfig = {};
export var attachField = function (type, component, props) {
    if (isArray(type)) {
        map(type, function (item) { return ComponentMapConfig[item] = { component: component, props: props }; });
    }
    else
        ComponentMapConfig[type] = { component: component, props: props };
};
attachField('date-picker-new', React.createElement(MUIDatePicker, null), { variant: 'inline', label: 'Select Date' });
attachField('time-picker-new', React.createElement(MUITimePicker, null), { variant: 'inline', label: 'Select Time' });
attachField('time-picker-select-new', React.createElement(MUIDropDownTimePicker, null));
//# sourceMappingURL=index.js.map