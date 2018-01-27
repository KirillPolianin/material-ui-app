import { fetchTransactions } from '../actions';
import { connect } from 'react-redux';

import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    const data = this.props.fetchTransactions();
  }

  render() {
    return <div />;
  }
}

export default connect(null, { fetchTransactions })(Map);
