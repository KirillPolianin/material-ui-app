import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import FormField from '../../utils/FormField';
import { valuationFieldsContent } from './ValuationFieldsContent';

export default class ValuationForm extends Component {
	renderButtons = () => {
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
	};

	onSubmit = () => this.props.giveEvaluation();

	renderFields = () =>
		valuationFieldsContent.map(field => (
			<FormField field={field} key={field.name} values={this.props.values} />
		));

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					{this.renderFields()}
					{this.renderButtons()}
				</form>
			</div>
		);
	}
}
