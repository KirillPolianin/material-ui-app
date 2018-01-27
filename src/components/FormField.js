import React from 'react';
import { Field } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import {
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField
} from 'redux-form-material-ui';

export default ({
  field: { label, name, type, value, hintText, buttons, list },
  values
}) => {
  switch (type) {
    case 'text':
      return (
        <div>
          <Field
            name={name}
            component={TextField}
            hintText={hintText}
            floatingLabelText={label}
          />
        </div>
      );

    case 'radioButton':
      return (
        <div>
          <div>{label}</div>
          <Field name={name} component={RadioButtonGroup}>
            {buttons.map(button => (
              <RadioButton
                key={button.value}
                value={button.value}
                label={button.label}
              />
            ))}
          </Field>
        </div>
      );

    case 'selectField':
      return (
        <div>
          <Field name={name} component={SelectField} floatingLabelText={label}>
            {list.map(item => (
              <MenuItem
                key={item.value}
                value={item.value}
                primaryText={item.label}
              />
            ))}
          </Field>
        </div>
      );

    case 'slider':
      return (
        <div>
          <div>{label}</div>
          <div>{values[name]}</div>
          <Field
            name={name}
            component={Slider}
            format={null}
            min={value.minValue}
            max={value.maxValue}
            step={1}
          />
        </div>
      );
  }
};
