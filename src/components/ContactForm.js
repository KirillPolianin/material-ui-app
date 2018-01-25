import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButtonGroup, TextField } from 'redux-form-material-ui';

class ContactForm extends Component {
	render() {
		const { handleSubmit, pristine, submitting, reset } = this.props;
		return (
			<form>
				<div>
					<Field />
				</div>
			</form>
		);
	}
}

export default ContactForm;
