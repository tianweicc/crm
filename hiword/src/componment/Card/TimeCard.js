import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import device from '../device';

export default class TimeCard extends Component {
  static defaultProps = {
    title: '标题',
    style: null,
    onPress: null,
  }

  render() {
    const {
      title, style, onPress, textfont, othercolor, leftcolor
    } = this.props;
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} >
        <View style={[styles.container, style]}>
          <Text style={[styles.title, { color: leftcolor}]}>{title}</Text>
          <View style={styles.rightView} >
            <Text style={[styles.fontstyle, {color: othercolor}]}>{textfont}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 17,
    borderBottomWidth: device.hairlineWidth,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 15,
    color: '#777777',
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontstyle: {
    fontSize: 15,
    color: '#777777',
  }
});