import React, { Component } from 'react';
import { Field } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButtonGroup, TextField } from 'redux-form-material-ui';

import { contactFormFields } from './formFields';
import FormField from './FormField';

export default class ContactForm extends Component {
  renderPriceField() {
    if (this.props.priceFeedback) {
      return (
        <div>
          <Field
            name="price"
            component={TextField}
            hintText="esim. Essi Merkki"
            floatingLabelText="Oma hinta-arvio"
          />
        </div>
      );
    }
  }

  renderContactFields() {
    return contactFormFields.map(field => (
      <FormField field={field} key={field.name} />
    ));
  }

  onSubmit() {
    console.log('form is submitted');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          Annettu hinta-arvio on alustava ja saattaa poiketa oleellisesti
          lopullisesta hinta-arviosta. Varaa maksuton asunnon tarkastus, jossa
          saat varsinaisen hinta-arviomme ja käteistarjouksen asunnosta.
          Tarkastus ei sido sinua vielä mihinkään. Tarkastajamme ottaa sinuun
          yhteyttä vuorokauden sisällä.
        </div>
        <div>Hinta-arvio: 292 000 €</div>
        <div>Oliko hinta arvio mielestäsi?</div>
        <div>
          <Field name="priceFeedback" component={RadioButtonGroup}>
            <RadioButton value="priceIsHigh" label="Liian korkea" />
            <RadioButton value="priceIsOk" label="Hyvä" />
            <RadioButton value="priceIsLow" label="Liian alhainen" />
          </Field>
        </div>
        {this.renderPriceField()}
        {this.renderContactFields()}
        <RaisedButton type="submit" label="Tilaa tarkastus" primary={true} />
      </form>
    );
  }
}
