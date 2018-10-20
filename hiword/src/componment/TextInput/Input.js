/** 文本输入框 */
import React, { Component } from 'react';
import { TextInput, Keyboard, StyleSheet } from 'react-native';

export default class Input extends Component {
  static defaultProps = {
    placeholder: '',
    keyboardType: 'default',
    maxLength: 10000,
    multiline: false,
    editable: true,
    returnKeyType: 'default',
    secureTextEntry: false,
    value: '',
    clearButtonMode: 'never',
  };

  /** Callback */
  onChange(text) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(text);
    }
  }

  onChangeText(text) {
    const { onChangeText } = this.props;
    if (onChangeText) {
      onChangeText(text);
    }
  }

  onEndEditing(text) {
    const { onEndEditing } = this.props;
    if (onEndEditing) {
      onEndEditing(text);
    }
  }

  onFocus() {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus();
    }
  }

  onSubmitEditing(text) {
    Keyboard.dismiss();
    const { onSubmitEditing } = this.props;
    if (onSubmitEditing) {
      onSubmitEditing();
    }
  }

  render() {
    const {
      placeholder, placeholderTextColor, keyboardType, maxLength, multiline, editable, style, returnKeyType, secureTextEntry, value, clearButtonMode,
    } = this.props;
    return (
      <TextInput
        style={[styles.input, style]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChange={event => this.onChange(event.nativeEvent.text)}
        onChangeText={text => this.onChangeText(text)}
        onEndEditing={event => this.onEndEditing(event.nativeEvent.text)}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiline}
        onFocus={() => this.onFocus()}
        onSubmitEditing={event => this.onSubmitEditing(event.nativeEvent.text)}
        editable={editable}
        returnKeyType={returnKeyType}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
        clearButtonMode={clearButtonMode}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    height: 44,
    backgroundColor: 'transparent',
    fontSize: 18,
  },
});