import React from 'react';
import Navigation from './navigation/Navigation';
import { Provider } from 'react-redux';
import Store from './Store/configureStore';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class App extends React.Component {
  render (){
    return (
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
  }
}


