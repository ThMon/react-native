import React from 'react'
import Navigation from './Navigation/Navigation'
import { StyleSheet } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20, // Supprimer cette ligne
  }
});
