import { map, isString, get } from 'lodash';
export var getMenuOptions = function (options) {
    return map(options, function (item) {
        if (isString(item))
            return { name: item, value: item };
        return item;
    });
};
export var getFieldError = function (fieldName, formikProps) {
    var fieldError = get(formikProps, "errors." + fieldName);
    var isTouched = get(formikProps, "touched." + fieldName);
    if (!isTouched && formikProps.submitCount < 1)
        return '';
    return fieldError;
};
//# sourceMappingURL=Utils.js.map