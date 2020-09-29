import React from 'react';
import { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker';
export { MUIDatePicker, MUITimePicker } from './MUIDateTimePicker';
import { MUIDropDownTimePicker } from './MUIDropDownTimePicker';
export { MUIDropDownTimePicker } from './MUIDropDownTimePicker';
// import {attachField} from 'react-forms'
import '@date-io/date-fns';
import { isArray, map } from 'lodash';
var ComponentMapConfig = {};
var attachField = function (type, component, props) {
    if (isArray(type)) {
        map(type, function (item) { return ComponentMapConfig[item] = { component: component, props: props }; });
    }
    else
        ComponentMapConfig[type] = { component: component, props: props };
};
attachField('xyz', React.createElement(MUIDatePicker, null), { variant: 'inline', label: 'Select Date' });
attachField('abc', React.createElement(MUITimePicker, null), { variant: 'inline', label: 'Select Time' });
attachField('qwe', React.createElement(MUIDropDownTimePicker, null));
//# sourceMappingURL=index.js.map