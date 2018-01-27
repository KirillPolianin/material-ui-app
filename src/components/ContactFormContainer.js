import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ContactForm from './ContactForm';
import validate from '../utils/contactFormValidation';

const mapStateToProps = ({ form }) => ({
  priceFeedback: form.ContactForm.values.priceFeedback
});

export default reduxForm({
  validate,
  form: 'ContactForm',
  initialValues: {
    price: 292000
  }
})(connect(mapStateToProps)(ContactForm));
