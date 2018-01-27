import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import ValuationForm from './ValuationForm';
import { giveEvaluation } from '../actions';
import validate from '../utils/valuationFormValidation';

function mapStateToProps({ form, evaluated }) {
  return { values: form.ValuationForm.values, evaluated };
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
    condition: 5
  }
})(connect(mapStateToProps, { giveEvaluation })(ValuationForm));
