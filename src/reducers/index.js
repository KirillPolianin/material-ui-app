import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import transactionsReducer from './transactionsReducer';
import evaluationReducer from './evaluationReducer';

export default combineReducers({
	form: reduxForm,
	transactions: transactionsReducer,
	evaluated: evaluationReducer
});
