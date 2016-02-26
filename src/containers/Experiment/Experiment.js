import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';

export default class Experiment extends Component {

  static propTypes = {
    liked: PropTypes.object
  };

  static defaultProps = {
    liked: false
  };

  constructor(props) {
    super(props);
  }

  state = {likes: this.props.liked};

  handleClick() {
    this.setState({likes: !this.state.likes });
  }

  render() {
    const {user} = this.state.likes;
    const text = user ? 'like' : 'haven\'t liked';
    const names = ['Alice', 'Emily', 'Kate'];
    return (
      <div className="container">
      <Helmet title="Experient Page"/>
      <h1>Experiment Page</h1>
      {
        names.map((name) => {
          return <div>Hello, {name}!</div>;
        })
      }
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
      </div>
    );
  }
}
