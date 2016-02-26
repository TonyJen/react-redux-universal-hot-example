import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Hello extends Component {

  render() {
    return (
      <div className="container">
      <h1>Hello, World!</h1>
        Have a wonder day!
        <Helmet title="Hello!"/>
      </div>
    );
  }
}
