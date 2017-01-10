import React, { Component } from 'react';
import Auth from '@components/auth';

class LaunchApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, actions } = this.props;
    return (
      <Auth
        user={user}
        {...actions} />
    );
  }
}

import { bindActionCreators } from 'redux';
import * as userActions from '@redux/user/action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user
})
const mapActions = dispatch => ({
  actions: bindActionCreators(userActions, dispatch)
})

export default connect(mapStateToProps, mapActions)(LaunchApp);


