import axios from 'axios';

export const FETCH_TRANSACTIONS = 'fetch_transactions';

export const fetchTransactions = () => async dispatch => {
  const res = await axios.post(
    'https://corhmc10x7.execute-api.eu-central-1.amazonaws.com/data/',
    { who_rules: 'kodit.io' }
  );

  dispatch({ type: FETCH_TRANSACTIONS, payload: res.data });
};
