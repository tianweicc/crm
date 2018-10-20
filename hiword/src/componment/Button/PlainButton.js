/**
 * Plain Button
 */
import React, { Component } from 'react';
import { View, TouchableOpacity, Keyboard, StyleSheet, Text } from 'react-native';

export default class PlainButton extends Component {
  static defaultProps = {
    title: 'Title',
    disabled: false,
    timeout: 0,
  };

  onPress() {
    Keyboard.dismiss();
    const { onPress } = this.props;
    if (onPress) {
      onPress();
    }
  }

  render() {
    const {
      title, style, labelStyle, disabled, timeout,
    } = this.props;
    return (
      <TouchableOpacity disabled={disabled} style={style} activeOpacity={0.6} onPress={() => this.onPress()}>
        <View style={styles.title}>
          <Text style={[styles.titleText, labelStyle]}>{title}</Text>
          {timeout != 0 ? <Text style={[styles.timeText, labelStyle]}>{timeout}</Text> : null}
          {timeout != 0 ? <Text style={[styles.titleText, labelStyle]}>s</Text> : null}
        </View>
      </TouchableOpacity>
    );
  } 
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'right',
  },
  timeText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'right',
    width: 26,
  },
});