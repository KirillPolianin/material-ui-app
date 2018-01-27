import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { giveEvaluation } from '../actions';
import FormField from './FormField';
import { valuationFormFields } from './formFields';

export default class ValuationForm extends Component {
  renderButtons() {
    const { pristine, submitting, reset, evaluated } = this.props;
    if (!evaluated) {
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
  renderFields() {
    return valuationFormFields.map(field => (
      <FormField field={field} key={field.name} values={this.props.values} />
    ));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {this.renderFields()}
        {this.renderButtons()}
      </form>
    );
  }
}
