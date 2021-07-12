import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
 import MainComponent from './components/main_component'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    );
  }
}

export default App;

