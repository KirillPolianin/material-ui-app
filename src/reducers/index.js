import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import transactionsReducer from './transactionsReducer';

export default combineReducers({
  form: reduxForm,
  transactions: transactionsReducer
});
