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
	onSubmit() {
		this.props.giveEvaluation();
	}

	render() {
		const { handleSubmit, pristine, submitting, reset } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<div>
					<Field
						key="address"
						name="address"
						component={TextField}
						hintText="esim. Mannerheimintie 1"
						floatingLabelText="Osoite"
					/>
				</div>
				<div>
					<Field
						key="postcode"
						name="postcode"
						component={TextField}
						hintText="esim. 00100"
						floatingLabelText="Postinumero"
					/>
				</div>
				<div>
					<Field
						key="floorNumber"
						name="floorNumber"
						component={SelectField}
						floatingLabelText="Asuinkerros"
					>
						{[...Array(9)].map((_, index) => (
							<MenuItem
								key={index + 1}
								value={index + 1}
								primaryText={index + 1}
							/>
						))}
					</Field>
				</div>
				<div>
					<Field
						key="floorCount"
						name="floorCount"
						component={SelectField}
						floatingLabelText="kerroksia yhteensä"
					>
						{[...Array(9)].map((_, index) => (
							<MenuItem
								key={index + 1}
								value={index + 1}
								primaryText={index + 1}
							/>
						))}
					</Field>
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
						key="cost"
						name="cost"
						component={TextField}
						hintText="esim. 250"
						floatingLabelText="Hoitovastike (€/kk)"
					/>
				</div>
				<div>Tontin omistus</div>
				<div>
					<Field
						key="landOwnership"
						name="landOwnership"
						component={RadioButtonGroup}
					>
						<RadioButton value="yes" label="Oma" />
						<RadioButton value="no" label="Vuokrattu" />
					</Field>
				</div>
				<div>Onko rapussa hissi</div>
				<div>
					<Field key="elevator" name="elevator" component={RadioButtonGroup}>
						<RadioButton value="yes" label="Kyllä" />
						<RadioButton value="no" label="Ei" />
					</Field>
				</div>
				<div>Onko asunnossa parveke</div>
				<div>
					<Field key="balcony" name="balcony" component={RadioButtonGroup}>
						<RadioButton value="yes" label="Kyllä" />
						<RadioButton value="no" label="Ei" />
					</Field>
				</div>
				<div>
					Onko yhtiöön tulossa putkiremontti seuraavan 10 vuoden kuluessa
				</div>
				<div>
					<Field
						key="pipeRenovation"
						name="pipeRenovation"
						component={RadioButtonGroup}
					>
						<RadioButton value="yes" label="Kyllä" />
						<RadioButton value="no" label="Ei" />
					</Field>
				</div>
				<div>
					Onko yhtiöön tulossa julkisivuremontti seuraavan 5 vuoden kuluessa
				</div>
				<div>
					<Field
						key="facadeRenovation"
						name="facadeRenovation"
						component={RadioButtonGroup}
					>
						<RadioButton value="yes" label="Kyllä" />
						<RadioButton value="no" label="Ei" />
					</Field>
				</div>
				<div>
					<Field
						key="condition"
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
				<RaisedButton
					type="submit"
					label="Tee asunnon hinta-arvio"
					primary={true}
				/>
			</form>
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
