import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../TextInput/Input';
import PlainButton from '../Button/PlainButton';

// 左边带图标的文本输入框
export default class ImageInput extends Component {
  static defaultProps = {
    showRightButton: false,
    rightButtonTitle: '',
    timeout: 0,
  };

  onPress = () => {
    const { onPress } = this.props;
    if (onPress) {
      onPress();
    }
  }

  renderIconView() {
    const { icon, iconContainerStyle } = this.props;
    return <View style={[styles.imageContainer, iconContainerStyle]}>{icon}</View>;
  }

  renderRightButton(showRightButton, rightButtonTitle, disabledRightButton, timeout) {
    if (showRightButton) {
      return (
        <View style={styles.rightButton}>
          {this.renderPlainButton(rightButtonTitle, disabledRightButton, timeout)}
        </View>
      );
    }
  }

  renderPlainButton(rightButtonTitle, disabledRightButton, timeout) {
    const labelStyle = timeout == 0 ? styles.labelStyle : styles.disableLabelStyle;
    return (
      <PlainButton
        style={styles.plainButton}
        labelStyle={labelStyle} 
        onPress={this.onPress}
        title={rightButtonTitle}
        disabled={disabledRightButton}
        timeout={timeout}
      />
    );
  }

  render() {
    const {
      style, inputStyle, showRightButton, rightButtonTitle, timeout, disabledRightButton, ...restProps
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.renderIconView()}
        <Input style={[styles.input, inputStyle]} {...restProps} />
        {this.renderRightButton(showRightButton, rightButtonTitle, disabledRightButton, timeout)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
  },
  input: {
    paddingLeft: 8,
  },
  rightButton: {
    justifyContent: 'center',
    marginRight: 15,
    height: 32,
    borderRadius: 15,
    // borderWidth: 0.5,
    // borderColor: '#C8C8C8'
  },
  labelStyle: {
    fontSize: 13,
    color: '#4087EE',
    marginLeft: 8, 
    marginRight: 8
  },
  disableLabelStyle: {
    fontSize: 13,
    color: '#8F8E94',
  },
  plainButton: {
    justifyContent: 'center',
  },
});
