import React, { Component } from 'react';
import { connect } from 'react-redux';

import ValuationForm from './Valuation/ValuationFormContainer';
import ContactForm from './Contact/ContactFormContainer';
import Map from './Map';

class FormPage extends Component {
  renderContactForm() {
    if (this.props.evaluated) {
      return <ContactForm />;
    }
  }

  render() {
    return (
      <div>
        <h1>Valuation form</h1>
        <div>
          Toimimme toistaiseksi Helsingissä, Espoossa, Vantaalla ja Kauniaisissa
          ja keskitymme alle 500 000€ arvoisiin kerrostalohuoneistoihin.
        </div>
        <p>
          Hinta-arvio perustuu keinoälyyn ja useaan datalähteeseen, joiden
          perusteella annamme mahdollisimman tarkan arvion. Mikäli haluat
          lopullisen arvion asuntosi hinnasta niin suosittelemme varaamaan myös
          maksuttoman tarkastuskäynnin, jossa tarkastajamme käy sovelluksemme
          avulla läpi asunnon tarkemman kunnon huonekohtaisesti. Tarkastus ei
          sido sinua vielä mihinkään
        </p>
        <ValuationForm />
        {this.renderContactForm()}
        <Map />
      </div>
    );
  }
}

const mapStateToProps = ({ evaluated }) => ({ evaluated });

export default connect(mapStateToProps)(FormPage);
