import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import device from '../device';
import Input from '../TextInput/Input';

export default class InputItem extends Component {
  static defaultProps = {
    title: '标题',
    style: null,
    inputValue: '',
    onChangeText: null,
    placeholder: '',
  }

  render() {
    const {
      title, style, inputValue, onChangeText, placeholder,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{title}</Text>
        <Input
          style={styles.input}
          value={inputValue} 
          onChangeText={onChangeText} 
          placeholder={placeholder} 
          placeholderTextColor={'#DADADA'}
        />
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
    justifyContent: 'space-between',
  },
  title: {
    marginRight: 6,
    fontSize: 15,
    color: '#777777',
  },
  input: {
    textAlign: 'right',
    fontSize: 14,
  },
});