import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Tile } from '../components/Tile';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <View style={{flexDirection: 'row', padding: 5, justifyContent: 'space-between'}}>
          <Tile />
          <Tile />
          <Tile />
        </View>
      </Container>
    );
  }
}