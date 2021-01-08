- [rf-date-time-pickers](#rf-date-time-pickers)
	- [Introduction](#introduction)

# rf-date-time-pickers

## Introduction

This package provides date and time pickers to complement Mithya labs' [react-forms](https://github.com/mithyalabs/react-forms)
 To install, 
 `

``` 
	npm i https://github.com/mithyalabs/rf-date-time-pickers
 ````

 until we release on npm. Once we release, you'll be able to install from npm itself using the package name.

## Dependencies

* react
* @material-ui/core
* @material-ui/pickers
* formik
* lodash
* moment
* react-forms
* @date-io/moment (^1.3.13)

Install these packages and wrap your app with MuiPickersUtilsProvider to use Date and time pickers.
If you're using **only** DropDownTimePicker, this step can be skipped.

To add Date picker to your form, add the following to your schema:
`

``` 
{
	type: "mui-date-picker"
	valueKey: "myValue",
	fieldProps:{

	}
}
````

fieldProps has the following interface:
`

``` 
{
    outputFormat?: string
}
	
````

In addition, all [KeyboardDatePicker props](https://material-ui-pickers.dev/api/KeyboardDatePicker) are available.

To add Time picker to your form add the following to your schema
`

``` 
{
	type: "mui-time-picker"
	valueKey: "myValue2",
	fieldProps:{

	}
}
````

fieldProps has the same interface as [TimePickerProps](https://material-ui-pickers.dev/api/TimePicker)
To add the DropDownTimePicker to your form add the following to your schema:
`

``` 
{
	type: "mui-time-picker-select"
	valueKey: "myValue2",
	fieldProps:{

	}
}
````

fieldProps has the following interface:
`

``` 
	label?: string;
	emptyItem?: string | boolean;
	helperText?: string;
	formControlProps?: FormControlProps;
	formHelperTextProps?: FormHelperTextProps;
	startTime?: string | Date;
	endTime?: string | Date;
	interval?: number;
	amPm?: boolean;
	emptyMenuItemProps?: object;
	menuItemProps?: object;
	inputLabelProps?: object;
````

All [material-ui select props](https://material-ui.com/api/select/) are available and can be used along with the above interface.
