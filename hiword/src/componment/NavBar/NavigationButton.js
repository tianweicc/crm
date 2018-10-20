// 导航栏按钮
import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class NavigationButton extends React.Component {
   static defaultProps = {
    canClink: false,
  };

   render() {
    const { style, icon, onPress, canClink } = this.props;
    if (!icon) {
      return null;
    }
    return (
      <TouchableOpacity style={[styles.button, style]} activeOpacity={0.8} onPress={onPress} disabled={canClink}>
        {icon}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});