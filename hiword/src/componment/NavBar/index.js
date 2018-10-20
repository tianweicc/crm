import * as React from 'react';
import { Keyboard } from 'react-native';
import NavigationBar from './NavigationBar';

export default class NavBar extends React.Component {
   static defaultProps = {
    onPressLeftButton: null,
  };
   timer;

   componentWillUnmount() {
    if (this.timer) { clearTimeout(this.timer); }
  }

   onPressLeftButton = () => {
    Keyboard.dismiss();
    const { onPressLeftButton } = this.props;
    if (onPressLeftButton) {
      onPressLeftButton();
    } else {
      this._goBack();
    }
  }

   _goBack() {
    const { navigation } = this.props;
    navigation.goBack();
    // this.timer = setTimeout(() => {
    //   if (this.timer) { clearTimeout(this.timer); }
      
    // }, 150);
  }

   render() {
    return <NavigationBar {...this.props} onPressLeftButton={this.onPressLeftButton} />;
  }
}