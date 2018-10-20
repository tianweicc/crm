import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import device from './device';

// 分割线
export default class Line extends Component {
  render() {
    const { style, containerBackgroundStyle } = this.props;
    return (
      <View style={[styles.container, containerBackgroundStyle]}>
        <View style={[styles.line, style]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECECEC',
    height: device.hairlineWidth,
  },
  line: {
    flex: 1,
    height: device.hairlineWidth,
    backgroundColor: '#ECECEC',
  },
});