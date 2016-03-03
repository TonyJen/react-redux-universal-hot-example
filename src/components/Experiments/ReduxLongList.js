import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {load} from 'redux/modules/longlist';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import now from 'performance-now';

@connect(
  (state) => ({list: state.longlist.list}),
  dispatch => bindActionCreators({load}, dispatch)
)
export default class ReduxLongList extends Component {
  static propTypes = {
    list: PropTypes.array,
    load: PropTypes.func.isRequired
  }
  render() {
    // <button onClick={() => {load(Math.floor((Math.random() * 100) + 1));}}> --> // eslint-disable-line
    const start = now();
    const {list,load} = this.props; // eslint-disable-line
    return (
      <div className="container">
      <Helmet title="Experient Page"/>
      <h1>Experiment Page</h1>
      <button onClick={() => {load(300);}}>
       Click to reload.
      </button>
      <p id="result"></p>
      {
        list.map((foo) => {
          return <div>Hello, {foo}!</div>;
        })
      }
      <p>Total time rendered is {now()} {start} {(now() - start)} milliseconds</p>
      </div>
    );
  }
}
