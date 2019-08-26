import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Brad',
      showName: true,
      message: this.props.message,
    };
  }

  static defaultProps = {
    message: 'Hi there',
  };

  render() {
    console.log(':heelo');
    let name = this.state.showName ? this.state.name : 'No name';
    return (
      <View>
        <Text>{name}</Text>
        <Text>Hello {this.message}</Text>
      </View>
    );
  }
}
