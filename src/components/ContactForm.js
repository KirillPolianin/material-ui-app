import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButtonGroup, TextField } from 'redux-form-material-ui';

class ContactForm extends Component {
  renderPriceField() {
    if (this.props.form.ContactForm.values.howIsPrice) {
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

  render() {
    console.log(this.props);
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <form>
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
          <Field name="howIsPrice" component={RadioButtonGroup}>
            <RadioButton value="priceIsHigh" label="Liian korkea" />
            <RadioButton value="priceIsOk" label="Hyvä" />
            <RadioButton value="priceIsLow" label="Liian alhainen" />
          </Field>
        </div>
        {this.renderPriceField()}
        <div>
          <Field
            name="name"
            component={TextField}
            hintText="esim. Essi Merkki"
            floatingLabelText="Nimi"
          />
        </div>
        <div>
          <Field
            name="address"
            component={TextField}
            value="gdfgdfg"
            hintText="esim. Mannerheimintie 1 A 15 00100 Helsinki"
            floatingLabelText="Osoite"
          />
        </div>
        <div>
          <Field
            name="phone"
            component={TextField}
            hintText="esim. 040 1234567"
            floatingLabelText="Puhelin"
          />
        </div>
        <div>
          <Field
            name="email"
            component={TextField}
            hintText="esim. essi@merkki@ki.fi"
            floatingLabelText="Sähkoposti"
          />
        </div>
        <RaisedButton type="submit" label="Tilaa tarkastus" primary={true} />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  const requiredFields = ['name', 'address', 'phone', 'email'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
}

const mapStateToProps = ({ form }) => ({ form });

export default reduxForm({
  validate,
  form: 'ContactForm',
  initialValues: {
    price: 292000
  }
})(connect(mapStateToProps)(ContactForm));
