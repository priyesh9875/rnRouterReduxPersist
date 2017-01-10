import React, { Component } from 'react';
import Counter from '@components/counter';

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, actions } = this.props;
    return (
      <Counter
        counter={counter.count}
        {...actions} />
    );
  }
}

import { bindActionCreators } from 'redux';
import * as counterActions from '@redux/counter/action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state.counter
})
const mapActions = dispatch => ({
  actions: bindActionCreators(counterActions, dispatch)
})

export default connect(mapStateToProps, mapActions)(CounterApp);


