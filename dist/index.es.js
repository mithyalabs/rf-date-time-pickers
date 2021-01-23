import { MUISelectField, attachField } from 'react-forms';
import React__default, { createElement } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers/DatePicker';
import { KeyboardTimePicker } from '@material-ui/pickers/TimePicker';
import { get } from 'lodash';
import moment from 'moment';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var getFieldError = function (fieldName, formikProps) {
    var fieldError = get(formikProps, "errors." + fieldName);
    var isTouched = get(formikProps, "touched." + fieldName);
    if (!isTouched && formikProps.submitCount < 1)
        return '';
    return fieldError;
};

var MUIDatePicker = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b, fieldConfig = props.fieldConfig;
    var value = get(formikProps, "values." + fieldProps.name);
    var fieldError = getFieldError((fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.valueKey) || '', formikProps);
    var outputFormat = fieldProps.outputFormat, datePickerProps = __rest(fieldProps, ["outputFormat"]);
    var handleDateChange = function (date) {
        if (date === null) {
            formikProps.setFieldValue(fieldProps.name, date, false);
        }
        else {
            var dateObject = new Date(date);
            var data = dateObject.toISOString();
            // (outputFormat === 'date') ? date :moment(date).format(outputFormat || fieldProps.format || 'MM/DD/YYYY')
            formikProps.setFieldValue(fieldProps.name, data, false);
        }
    };
    var updatedProps = __assign(__assign({}, datePickerProps), { error: !!fieldError, helperText: (fieldError || ''), onChange: handleDateChange, value: (!value) ? null : undefined, inputValue: (!value) ? '' : value, format: fieldProps.format || 'mm/dd/yyyy' });
    return (createElement(KeyboardDatePicker, __assign({}, updatedProps)));
};
var MUITimePicker = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var fieldError = get(formikProps, "errors." + fieldProps.name);
    var value = get(formikProps, "values." + fieldProps.name);
    var handleTimeChange = function (time) {
        if (time === null)
            formikProps.setFieldValue(fieldProps.name, time, false);
        else
            formikProps.setFieldValue(fieldProps.name, new Date(time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }), false);
    };
    var updatedProps = __assign(__assign({}, fieldProps), { error: !!fieldError, helperText: (fieldError || ''), onChange: handleTimeChange, value: (!value) ? null : undefined, inputValue: (!value) ? '' : value });
    return (createElement(KeyboardTimePicker, __assign({}, updatedProps)));
};

var getOptions = function (startTime, endTime, interval, amPm) {
    var start = amPm
        ? moment(startTime, "hh:mm a").toDate()
        : moment(startTime, "HH:mm").toDate();
    var end = amPm
        ? moment(endTime, "hh:mm a").toDate()
        : moment(endTime, "HH:mm").toDate();
    var list = [];
    while (start.getTime() <= end.getTime()) {
        var item = amPm
            ? moment(start).format("hh:mm a")
            : moment(start).format("HH:mm");
        list.push({ name: item, value: item });
        start = new Date(start.getTime() + interval * 60000);
    }
    return list;
};
var MUIDropDownTimePicker = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.fieldConfig, fieldConfig = _b === void 0 ? {} : _b, _c = props.formikProps, formikProps = _c === void 0 ? {} : _c;
    var fieldError = getFieldError(fieldProps.name || "", formikProps);
    var _d = fieldProps.startTime, startTime = _d === void 0 ? "00:00" : _d, _e = fieldProps.endTime, endTime = _e === void 0 ? "23:45" : _e, _f = fieldProps.interval, interval = _f === void 0 ? 15 : _f, _g = fieldProps.amPm, amPm = _g === void 0 ? false : _g, label = fieldProps.label, emptyItem = fieldProps.emptyItem, helperText = fieldProps.helperText, _h = fieldProps.inputLabelProps, inputLabelProps = _h === void 0 ? {} : _h, formHelperTextProps = fieldProps.formHelperTextProps, _j = fieldProps.emptyMenuItemProps, emptyMenuItemProps = _j === void 0 ? {} : _j, _k = fieldProps.error, error = _k === void 0 ? !!fieldError : _k, selectProps = __rest(fieldProps, ["startTime", "endTime", "interval", "amPm", "label", "emptyItem", "helperText", "inputLabelProps", "formHelperTextProps", "emptyMenuItemProps", "error"]);
    var list = getOptions(startTime, endTime, interval, amPm);
    var selectFieldProps = __assign({ label: label, options: list, emptyItem: emptyItem,
        helperText: helperText,
        inputLabelProps: inputLabelProps,
        emptyMenuItemProps: emptyMenuItemProps,
        error: error }, selectProps);
    return (React__default.createElement(MUISelectField, { formikProps: formikProps, fieldConfig: fieldConfig, fieldProps: selectFieldProps }));
};

attachField('mui-date-picker', React__default.createElement(MUIDatePicker, null));
attachField('mui-time-picker', React__default.createElement(MUITimePicker, null));
attachField('mui-time-picker-select', React__default.createElement(MUIDropDownTimePicker, null));

var index = './lib';

export default index;
export { MUIDatePicker, MUIDropDownTimePicker, MUITimePicker };
//# sourceMappingURL=index.es.js.map
