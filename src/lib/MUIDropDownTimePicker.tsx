import { Box, BoxProps, FormControl, IconButton, IconButtonProps, InputLabel, MenuItem, Select, SelectProps, Typography, TypographyProps } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/styles';
import { FormikValues } from 'formik';
import { get, isString } from 'lodash';
import moment from 'moment';
import React, { FC, useCallback } from 'react';
import { FormConfig, IFieldProps } from 'react-forms';
import { getFieldError } from './Utils';
export interface TTime {
  hours?: string;
  minutes?: string;
}

type TDate = null | string | Date | moment.Moment;

export interface MUIDropDownTimePickerProps {
  interval?: number;
  saveAsDate?: boolean;
  clearable?: boolean;
  parseFormat?: string;
  iconButtonProps?: IconButtonProps;
  clearIcon?: React.ReactNode;
  clearButton?: React.ReactNode;
  hourLabel?: string;
  minutesLabel?: string;
  containerProps?: BoxProps;
  onTimeChange?: (time: string | null) => any;
  value?: TDate;
  selectProps?: Omit<SelectProps, 'value'>;
  startTime?: TDate;
  endTime?: TDate;
  header?: string
  headerProps?: TypographyProps
}

export interface IProps extends IFieldProps {
  fieldProps?: MUIDropDownTimePickerProps
}

const getTimeValue = (time: null | string | Date | moment.Moment, format: string = 'HH:mm'): TTime => {
  if (!time)
    return { hours: '', minutes: '' }
  let newTime = isString(time) ? moment(time, format).format("HH:mm").split(":") : moment(time).format("HH:mm").split(":");
  return { hours: newTime[0], minutes: newTime[1] }

}




export const MUIDropDownTimePicker: FC<IProps> = (props) => {
  const classes = useStyles();

  const {
    fieldProps = {} as MUIDropDownTimePickerProps,
    formikProps = {} as FormikValues,
    fieldConfig = {} as FormConfig,
  } = props;

  const {
    interval = 5,
    clearable = false,
    parseFormat,
    iconButtonProps = {} as IconButtonProps,
    clearIcon,
    clearButton,
    hourLabel = 'Hours',
    minutesLabel = 'Minutes',
    containerProps = {} as BoxProps,
    onTimeChange,
    value,
    selectProps = {} as SelectProps,
    header,
    headerProps = {} as TypographyProps,
    startTime,
    endTime,
  } = fieldProps;

  const isDisabled = useCallback((startTime: TDate, endTime: TDate, value: TTime) => {

    if (!startTime && !endTime)
      return false;
    const start = moment(startTime).clone().startOf('minute');
    const end = moment(endTime).startOf('minute');
    const toCheck = moment().clone().set('hour', value.hours ? Number(value.hours) : start.hours()).set('minute', value.minutes ? Number(value.minutes) : start.minutes()).startOf('minute');
    if (startTime && endTime) {
      return toCheck.isBefore(start) || toCheck.isAfter(end);
    } else if (startTime) {
      return toCheck.isBefore(start)
    } else if (endTime) {
      return toCheck.isAfter(end)
    }
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTime, endTime, value]);
  const fieldError = getFieldError((fieldConfig.valueKey || ''), formikProps);
  const baseValue: TTime = getTimeValue(value ? value : (get(formikProps, `values.${fieldConfig.valueKey}`) || null), parseFormat);

  const onChange = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>) => {
    event.preventDefault();
    let newValue = {
      ...baseValue,
      [event.target.name as string]: event.target.value as string
    };
    if (onTimeChange)
      onTimeChange(`${newValue.hours || '00'}:${newValue.minutes || '00'}`)
    else
      formikProps.setFieldValue(fieldConfig.valueKey, `${newValue.hours || '00'}:${newValue.minutes || '00'}`)
  }
  const onClear = () => { onTimeChange ? onTimeChange(null) : formikProps.setFieldValue(fieldConfig.valueKey, null) }
  return (
    <Box width='100%'>
      {header ? <Typography {...headerProps}>{header}</Typography> : null}
      <Box width='100%' display='flex' justifyContent='space-between' boxSizing='border-box' alignItems='flex-end' {...containerProps}>
        <Box width='50%' margin='0px 5px'>
          <FormControl className={classes.formControl} placeholder='data'>
            <InputLabel id="hrs">{hourLabel}</InputLabel>
            <Select
              fullWidth
              value={baseValue.hours || ''}
              name='hours'
              onChange={onChange}
              placeholder='Hours'
              labelId='hrs'
              {...selectProps}
            >
              {
                HOURS.map((hrs, index) => {
                  let disable = isDisabled(startTime || null, endTime || null, { ...baseValue, hours: hrs })
                  return (<MenuItem value={hrs} key={index} disabled={disable}>{hrs}</MenuItem>)
                })
              }
            </Select>
          </FormControl>
        </Box>
        <Box width='50%' margin='0px 5px'>
          <FormControl className={classes.formControl}>
            <InputLabel id="min">{minutesLabel}</InputLabel>
            <Select
              fullWidth
              value={baseValue.minutes || ''}
              name='minutes'
              placeholder='Minutes'
              labelId='min'
              onChange={onChange}
              {...selectProps}
            >
              {
                MINUTES.map((min, index) => {
                  if (index % interval > 0) {
                    return <div key={index} />
                  }
                  let disable = isDisabled(startTime || null, endTime || null, { ...baseValue, minutes: min })
                  if (index % interval === 0)
                    return (<MenuItem value={min} key={index} disabled={disable}>{min}</MenuItem>)
                  return <div key={index} />
                })
              }
            </Select>
          </FormControl>
        </Box>
        {clearable && <Box>{clearButton ? clearButton : <IconButton size='small' onClick={onClear} {...iconButtonProps}>{clearIcon ? clearIcon : <ClearIcon />}</IconButton>}</Box>}
      </Box>
      {
        fieldError && <Typography variant='overline' className={fieldError ? classes.errorField : ''}>{fieldError}</Typography>
      }
    </Box>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return (createStyles({
    formControl: {
      width: '100%'
    },
    errorField: {
      color: '#B71840',
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'none'
    },
  }))
})


const HOURS = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
const MINUTES = ['00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59']