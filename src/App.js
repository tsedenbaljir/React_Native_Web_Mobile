import React, { Component } from 'react';
import './App.css';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';

class App extends Component {
  state = {
    spinValue: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li class="dropdown">
              <a class="dropbtn">Dropdown</a>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </ul>

          <h3>Dropdown Menu inside a Navigation Bar</h3>
          <p>Hover over the "Dropdown" link to see the dropdown menu.</p>

        </div>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
