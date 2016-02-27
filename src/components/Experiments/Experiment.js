import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Experiment extends Component {


  state = {liked: true,
           list: this.createLongList()};

  createLongList() {
    const longNumber = 1000;
    const foo = [];
    let i = 0;
    for (i = 0; i <= longNumber; i++) {
      foo.push(i);
    }
    return foo;
  }

  render() {
    const t1 = performance.now();
    const text = this.state.liked ? 'like' : 'haven\'t liked';

    const handleClick = ()=> {
      this.setState({
        liked: !this.state.liked
      });
    };
    return (
      <div className="container">
      <Helmet title="Experient Page"/>
      <h1>Experiment Page</h1>
      {
        this.state.list.map((foo) => {
          return <div>Hello, {foo}!</div>;
        })
      }
      <p onClick={handleClick}>
        You {text} this. Click to toggle.
      </p>
      <p>
        This render took about {
             performance.now() - t1
          } milliseconds.
      </p>
      </div>
    );
  }
}
