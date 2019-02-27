import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/section/components/header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Home>
            <Header/>
            <Text>Header12</Text>
            <Text>Buscador</Text>
            <Text>Categorias</Text>
            <Text>Sugerencias</Text>
        </Home>
    );
  }
}

