import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import device from '../device';

export default class TextCard extends Component {
  static defaultProps = {
    title: '标题',
    style: null,
    onPress: null,
  }

  render() {
    const {
      title, style, onPress, textfont,
    } = this.props;
    return (
      <View onPress={onPress} activeOpacity={0.8} >
        <View style={[styles.container, style]}>
          <Text style={styles.title}>{title}</Text>
            <Text style={styles.tetxstyle}>{textfont}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 17,
    borderBottomWidth: device.hairlineWidth,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 15,
    color: '#999999',
  },
  tetxstyle: {
    marginLeft: 25,
    fontSize: 15,
    color: '#444444',
  }
});