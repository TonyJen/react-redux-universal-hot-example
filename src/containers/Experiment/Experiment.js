import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Experiment extends Component {

  state = {liked: true};

  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    const names = ['Alice', 'Emily', 'Kate'];
    const handleClick = () => {
      this.setState({
        liked: !this.state.liked
      });
    };
    return (
      <div className="container">
      <Helmet title="Experient Page"/>
      <h1>Experiment Page</h1>
      {
        names.map((name) => {
          return <div>Hello, {name}!</div>;
        })
      }
      <p onClick={handleClick}>
        You {text} this. Click to toggle.
      </p>
      </div>
    );
  }
}
