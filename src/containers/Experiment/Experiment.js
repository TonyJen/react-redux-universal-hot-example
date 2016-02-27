import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {toggle} from 'redux/modules/experiment';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

@connect(
  (state) => ({liked: state.experiment.liked}),
  dispatch => bindActionCreators({toggle}, dispatch)
)
export default class Experiment extends Component {
  static propTypes = {
    liked: PropTypes.bool,
    toggle: PropTypes.func.isRequired
  }

  render() {
    const { liked, toggle} = this.props; // eslint-disable-line no-shadow
    const text = liked ? 'like' : 'haven\'t liked';
    return (
      <div className="container">
      <Helmet title="Experient Page"/>
      <h1>Experiment Page</h1>
      <p onClick={toggle}>
        You {text} this. Click to toggle.
      </p>
      </div>
    );
  }
}
