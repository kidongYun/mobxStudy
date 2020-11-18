import React, { Component } from 'react';
import SuperMarket from './components/SuperMarket';

class App extends Component {
  render() {
    return (
      <div>
        <CounterStore />
        <hr />
        <SuperMarket />
      </div>
    );
  }
}

export default App;