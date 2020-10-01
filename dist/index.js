'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactForms = require('react-forms');
var React = require('react');
var React__default = _interopDefault(React);
var DatePicker = require('@material-ui/pickers/DatePicker');
var TimePicker = require('@material-ui/pickers/TimePicker');
var lodash = require('lodash');
var core = require('@material-ui/core');
var moment = _interopDefault(require('moment'));

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

var MUIDatePicker = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var value = lodash.get(formikProps, "values." + fieldProps.name);
    var fieldError = lodash.get(formikProps, "errors." + fieldProps.name);
    var outputFormat = fieldProps.outputFormat, datePickerProps = __rest(fieldProps, ["outputFormat"]);
    var handleDateChange = function (date) {
        if (date === null) {
            formikProps.setFieldValue(fieldProps.name, date, false);
        }
        else {
            var data = new Date(date);
            // (outputFormat === 'date') ? date :moment(date).format(outputFormat || fieldProps.format || 'MM/DD/YYYY')
            formikProps.setFieldValue(fieldProps.name, data, false);
        }
    };
    var updatedProps = __assign(__assign({}, datePickerProps), { error: !!fieldError, helperText: (fieldError || ''), onChange: handleDateChange, value: (!value) ? null : undefined, inputValue: (!value) ? '' : value, format: fieldProps.format || 'mm/dd/yyyy' });
    return (React.createElement(DatePicker.KeyboardDatePicker, __assign({}, updatedProps)));
};
var MUITimePicker = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var fieldError = lodash.get(formikProps, "errors." + fieldProps.name);
    var value = lodash.get(formikProps, "values." + fieldProps.name);
    var handleTimeChange = function (time) {
        if (time === null)
            formikProps.setFieldValue(fieldProps.name, time, false);
        else
            formikProps.setFieldValue(fieldProps.name, new Date(time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }), false);
    };
    var updatedProps = __assign(__assign({}, fieldProps), { error: !!fieldError, helperText: (fieldError || ''), onChange: handleTimeChange, value: (!value) ? null : undefined, inputValue: (!value) ? '' : value });
    return (React.createElement(TimePicker.KeyboardTimePicker, __assign({}, updatedProps)));
};

var getFieldError = function (fieldName, formikProps) {
    var fieldError = lodash.get(formikProps, "errors." + fieldName);
    var isTouched = lodash.get(formikProps, "touched." + fieldName);
    if (!isTouched && formikProps.submitCount < 1)
        return '';
    return fieldError;
};

var getOptions = function (startTime, endTime, interval, amPm) {
    var start = amPm ? moment(startTime, 'hh:mm a').toDate() : moment(startTime, 'HH:mm').toDate();
    var end = amPm ? moment(endTime, 'hh:mm a').toDate() : moment(endTime, 'HH:mm').toDate();
    var list = [];
    while (start.getTime() <= end.getTime()) {
        var item = amPm ? moment(start).format('hh:mm a') : moment(start).format('HH:mm');
        list.push({ name: item, value: item });
        start = new Date(start.getTime() + interval * 60000);
    }
    return list;
};
var MUIDropDownTimePicker = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.fieldConfig, fieldConfig = _b === void 0 ? {} : _b, _c = props.formikProps, formikProps = _c === void 0 ? {} : _c;
    var fieldError = getFieldError((fieldProps.name || ''), formikProps);
    var _d = fieldProps.formControlProps, formControlProps = _d === void 0 ? {} : _d, _e = fieldProps.startTime, startTime = _e === void 0 ? '00:00' : _e, _f = fieldProps.endTime, endTime = _f === void 0 ? '23:45' : _f, _g = fieldProps.interval, interval = _g === void 0 ? 15 : _g, _h = fieldProps.amPm, amPm = _h === void 0 ? false : _h, label = fieldProps.label, emptyItem = fieldProps.emptyItem, helperText = fieldProps.helperText, _j = fieldProps.inputLabelProps, inputLabelProps = _j === void 0 ? {} : _j, formHelperTextProps = fieldProps.formHelperTextProps, _k = fieldProps.menuItemProps, menuItemProps = _k === void 0 ? {} : _k, _l = fieldProps.emptyMenuItemProps, emptyMenuItemProps = _l === void 0 ? {} : _l, _m = fieldProps.error, error = _m === void 0 ? !!fieldError : _m, selectProps = __rest(fieldProps, ["formControlProps", "startTime", "endTime", "interval", "amPm", "label", "emptyItem", "helperText", "inputLabelProps", "formHelperTextProps", "menuItemProps", "emptyMenuItemProps", "error"]);
    var labelId = fieldConfig.id + "_label";
    var value = lodash.get(formikProps, "values." + fieldProps.name) || '';
    var list = getOptions(startTime, endTime, interval, amPm);
    var emptyItemText = (lodash.isString(emptyItem) ? emptyItem : 'None');
    var onChange = function (event) {
        event.preventDefault();
        if (event.target.value)
            formikProps.setFieldValue(lodash.get(fieldProps, 'name'), event.target.value, false);
    };
    console.log(value);
    return (React__default.createElement(core.FormControl, __assign({}, formControlProps),
        label &&
            (React__default.createElement(core.InputLabel, __assign({ id: labelId }, inputLabelProps), label)),
        React__default.createElement(core.Select, __assign({ labelId: labelId, id: fieldConfig.id, value: value, onChange: onChange, error: error }, selectProps),
            (emptyItem) &&
                (React__default.createElement(core.MenuItem, __assign({ value: '' }, menuItemProps, emptyMenuItemProps), emptyItemText)),
            lodash.map(list, function (item, index) { return (React__default.createElement(core.MenuItem, __assign({}, menuItemProps, { key: fieldConfig.id + "_menu_item_" + index, value: item.value }), item.name)); })),
        React__default.createElement(core.FormHelperText, null, helperText)));
};

reactForms.attachField('date-picker-new', React__default.createElement(MUIDatePicker, null), { variant: 'inline', label: 'Select Date' });
reactForms.attachField('time-picker-new', React__default.createElement(MUITimePicker, null), { variant: 'inline', label: 'Select Time' });
reactForms.attachField('time-picker-select-new', React__default.createElement(MUIDropDownTimePicker, null));

var index = './lib';

exports.MUIDatePicker = MUIDatePicker;
exports.MUIDropDownTimePicker = MUIDropDownTimePicker;
exports.MUITimePicker = MUITimePicker;
exports.default = index;
//# sourceMappingURL=index.js.map
