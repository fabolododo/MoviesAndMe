import React from 'react';
import Navigation from './navigation/Navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class App extends React.Component {
  render (){
    return (
      <Navigation/>
    )
  }
}


