import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField
} from 'redux-form-material-ui';

import { giveEvaluation } from '../actions';
import ContactForm from './ContactForm';

class ValuationForm extends Component {
  renderContactForm() {
    if (this.props.evaluated) {
      return <ContactForm />;
    }
  }

  renderButtons() {
    const { pristine, submitting, reset } = this.props;
    if (!this.props.evaluated) {
      return (
        <div>
          <RaisedButton
            style={{ marginRight: 12 }}
            type="submit"
            label="Tee asunnon hinta-arvio"
            primary={true}
          />
          <RaisedButton
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
            label="Clear"
          />
        </div>
      );
    }
  }

  onSubmit() {
    this.props.giveEvaluation();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Valuation Form</h1>
        <div>
          Toimimme toistaiseksi Helsingissä, Espoossa, Vantaalla ja Kauniaisissa
          ja keskitymme alle 500 000€ arvoisiin kerrostalohuoneistoihin.
        </div>
        <div>
          Hinta-arvio perustuu keinoälyyn ja useaan datalähteeseen, joiden
          perusteella annamme mahdollisimman tarkan arvion. Mikäli haluat
          lopullisen arvion asuntosi hinnasta niin suosittelemme varaamaan myös
          maksuttoman tarkastuskäynnin, jossa tarkastajamme käy sovelluksemme
          avulla läpi asunnon tarkemman kunnon huonekohtaisesti. Tarkastus ei
          sido sinua vielä mihinkään
        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div style={{ width: 500 }}>
            <Field
              style={{ width: 500 }}
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
          <div>Asuinkerros</div>
          <div>{this.props.form.ValuationForm.values.floorNumber}</div>
          <div style={{ width: 500 }}>
            <Field
              name="floorNumber"
              component={Slider}
              format={null}
              min={1}
              max={9}
              step={1}
            />
          </div>
          <div>Kerroksia yhteensä</div>
          <div>{this.props.form.ValuationForm.values.floorCount}</div>
          <div>
            <Field
              name="floorCount"
              component={Slider}
              format={null}
              min={1}
              max={9}
              step={1}
            />
          </div>
          <div>
            <Field
              key="size"
              name="size"
              component={TextField}
              hintText="esim. 45"
              floatingLabelText="Neliöt"
            />
          </div>
          <div>
            <Field
              key="roomCount"
              name="roomCount"
              component={SelectField}
              floatingLabelText="Huoneiden määrä"
            >
              {[...Array(4)].map((_, index) => (
                <MenuItem
                  key={index + 1}
                  value={index + 1}
                  primaryText={index + 1}
                />
              ))}
              <MenuItem key="5+" value="5+" primaryText="5+" />
            </Field>
          </div>
          <div>
            <Field
              key="year"
              name="year"
              component={SelectField}
              floatingLabelText="Rakennusvuosi"
            >
              {[...Array(219)].map((_, index) => (
                <MenuItem
                  key={2018 - index}
                  value={2018 - index}
                  primaryText={2018 - index}
                />
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
              <MenuItem key="5" value="5" primaryText="Erinomainen" />
              <MenuItem key="4" value="4" primaryText="Hyvä" />
              <MenuItem key="3" value="3" primaryText="Tyydyttävä" />
              <MenuItem key="2" value="2" primaryText="Huono" />
            </Field>
          </div>
          {this.renderButtons()}
        </form>
        {this.renderContactForm()}
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  const requiredFields = ['address', 'postcode', 'size', 'cost'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
}

function mapStateToProps({ form, evaluated }) {
  return { form, evaluated };
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
})(connect(mapStateToProps, { giveEvaluation })(ValuationForm));
