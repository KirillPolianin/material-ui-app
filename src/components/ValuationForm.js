import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {
  RadioButtonGroup,
  SelectField,
  TextField
} from 'redux-form-material-ui';

class ValuationForm extends Component {
  lolkek() {
    return (
      <div>
        <Field
          name="address"
          component={TextField}
          hintText="esim. Mannerheimintie 1"
          floatingLabelText="Osoite"
        />
      </div>
    );
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="address"
            component={TextField}
            hintText="esim. Mannerheimintie 1"
            floatingLabelText="Osoite"
          />
        </div>
        <div>
          <Field
            name="postcode"
            component={TextField}
            hintText="esim. 00100"
            floatingLabelText="Postinumero"
          />
        </div>
        <div>
          <Field
            name="floorNumber"
            component={SelectField}
            floatingLabelText="Asuinkerros"
          >
            {[...Array(9)].map((_, index) => (
              <MenuItem value={index + 1} primaryText={index + 1} />
            ))}
          </Field>
        </div>
        <div>
          <Field
            name="floorCount"
            component={SelectField}
            floatingLabelText="kerroksia yhteensä"
          >
            {[...Array(9)].map((_, index) => (
              <MenuItem value={index + 1} primaryText={index + 1} />
            ))}
          </Field>
        </div>
        <div>
          <Field
            name="size"
            component={TextField}
            hintText="esim. 45"
            floatingLabelText="Neliöt"
          />
        </div>
        <div>
          <Field
            name="roomCount"
            component={SelectField}
            floatingLabelText="Huoneiden määrä"
          >
            {[...Array(4)].map((_, index) => (
              <MenuItem value={index + 1} primaryText={index + 1} />
            ))}
            <MenuItem value="5+" primaryText="5+" />
          </Field>
        </div>
        <div>
          <Field
            name="year"
            component={SelectField}
            floatingLabelText="Rakennusvuosi"
          >
            {[...Array(219)].map((_, index) => (
              <MenuItem value={2018 - index} primaryText={2018 - index} />
            ))}
          </Field>
        </div>
        <div>
          <Field
            name="cost"
            component={TextField}
            hintText="esim. 250"
            floatingLabelText="Hoitovastike (€/kk)"
          />
        </div>
        <div>Tontin omistus</div>
        <div>
          <Field name="landOwnership" component={RadioButtonGroup}>
            <RadioButton value="yes" label="Oma" />
            <RadioButton value="no" label="Vuokrattu" />
          </Field>
        </div>
        <div>Onko rapussa hissi</div>
        <div>
          <Field name="elevator" component={RadioButtonGroup}>
            <RadioButton value="yes" label="Kyllä" />
            <RadioButton value="no" label="Ei" />
          </Field>
        </div>
        <div>Onko asunnossa parveke</div>
        <div>
          <Field name="balcony" component={RadioButtonGroup}>
            <RadioButton value="yes" label="Kyllä" />
            <RadioButton value="no" label="Ei" />
          </Field>
        </div>
        <div>
          Onko yhtiöön tulossa putkiremontti seuraavan 10 vuoden kuluessa
        </div>
        <div>
          <Field name="pipeRenovation" component={RadioButtonGroup}>
            <RadioButton value="yes" label="Kyllä" />
            <RadioButton value="no" label="Ei" />
          </Field>
        </div>
        <div>
          Onko yhtiöön tulossa julkisivuremontti seuraavan 5 vuoden kuluessa
        </div>
        <div>
          <Field name="facadeRenovation" component={RadioButtonGroup}>
            <RadioButton value="yes" label="Kyllä" />
            <RadioButton value="no" label="Ei" />
          </Field>
        </div>
        <div>
          <Field
            name="condition"
            component={SelectField}
            floatingLabelText="Huoneiston yleiskunto"
          >
            <MenuItem value="5" primaryText="Erinomainen" />
            <MenuItem value="4" primaryText="Hyvä" />
            <MenuItem value="3" primaryText="Tyydyttävä" />
            <MenuItem value="2" primaryText="Huono" />
          </Field>
        </div>
        <div>
          <RaisedButton
            label="Tee asunnon hinta-arvio"
            primary={true}
            onClick={this.lolkek}
          />
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  const requiredFields = ['address', 'postcode', 'size', 'cost'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required!';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'ValuationForm',
  initialValues: {
    floorNumber: 1,
    floorCount: 1,
    roomCount: 1,
    year: 2018,
    landOwnership: 'no',
    elevator: 'no',
    balcony: 'no',
    pipeRenovation: 'no',
    facadeRenovation: 'no',
    condition: '5'
  }
})(ValuationForm);
