import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import About from "../pages/About";

const BASE_URL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Loss+aversion'

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: null,
    };
  }


  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    //URL = BASE_URL + this.props.data.name
    console.log(BASE_URL)
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({summary: responseData.query.pages})
      });
  }


  render() {
    return(
      <View>
      <Text>{this.props.data.name}</Text>
      <Text>{this.state.summary}</Text>
      </View>
    );
  }
}
