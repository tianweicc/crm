import * as React from 'react';
import { View, StatusBar, Animated, StyleSheet, Text, Image, Platform  } from 'react-native';
// import { ifIphoneX } from 'react-native-iphone-x-helper';
import NavigationButton from './NavigationButton';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class NavigationBar extends React.Component {
   static defaultProps = {
    title: '',
    showLeftButton: true,
    style: null,
  };

  /** 食肉显示右边按钮文本 */
   showTitleText() {
    const { title } = this.props;
    if (typeof title === 'string') {
      return this.renderTitleText();
    }
    return this.renderTitleComponent();
  }

  /** 是否显示左边按钮 */
   showLeftButton() {
    const { showLeftButton } = this.props;
    if (showLeftButton) {
      return this.renderLeftButton();
    }
    return null;
  }

  /** 渲染标题组件 */
   renderTitleComponent() {
    const { title } = this.props;
    return title;
  }

  // ios android 状态栏不一样需要判断
   renderStatusBar(backgroundStyle) {
    if (Platform.OS === 'ios') {
      return <Animated.View style={[styles.statusBar, backgroundStyle]} />;
    }
    return (
      <View
        style={{
          height: StatusBar.currentHeight, width: width, zIndex: 1, position: 'absolute',
        }}
      />
    );
  }

  /** 渲染导航栏左边按钮 */
   renderLeftButton() {
    const { leftButtonIcon = (<Text style={styles.icon}>&#xe636;</Text>), onPressLeftButton } = this.props;
    return (
      <NavigationButton
        style={styles.leftButton}
        icon={leftButtonIcon} 
        onPress={onPressLeftButton}
      />
    );
  }

  /** 渲染导航栏右边按钮 */
   renderRightButton() {
    const { rightIcon, onPress, canClink } = this.props;
    return (
      <NavigationButton
        style={styles.rightButton}
        icon={rightIcon} 
        onPress={onPress}
        canClink={canClink}
      />
    );
  }

  /** 渲染导航栏右边视图 */
   renderRightView() {
    return (
      <View style={styles.rightView} >
        {this.renderRightButton()}
      </View>
    );
  }

  /** 渲染导航栏左边视图 */
   renderLeftView() {
    return (
      <View style={styles.leftView}>
        {this.showLeftButton()}
      </View>
    );
  }

  /** 渲染标题视图 */
   renderTitleView() {
    return (
      <View style={styles.titleView}>
        {this.showTitleText()}
      </View>
    );
  }

  /** 渲染标题文本 */
   renderTitleText() {
    const { title, titlestyle } = this.props;
    return <Text style={[styles.headerTitle,{color: titlestyle}]} numberOfLines={1} >{title}</Text>;
  }

   render() {
    const { style, backgroundColor } = this.props;
    let backgroundStyle;
    if (backgroundColor) {
      backgroundStyle = { backgroundColor };
    }
    return (
      <View style={[styles.navBar, style]}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
        />
        {this.renderStatusBar(backgroundStyle)}
        <Animated.View style={[styles.header, backgroundStyle]}>
          {this.renderLeftView()}
          {this.renderTitleView()}
          {this.renderRightView()}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    borderColor: '#535352',
  },
  statusBar: {
    height: 20,
    width: width,
    backgroundColor: 'white',
  },  
  _statusBar: {
    backgroundColor: 'white',
  },
  header: {
    width: width,
    height: Platform.OS === 'ios' ? 44 : 44 + (StatusBar.currentHeight),
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  leftView: {
    width: 80,
    height: Platform.OS === 'ios' ? 44 : 44 + (StatusBar.currentHeight),
  },
  rightView: {
    // height: device.isIos ? 44 : 44 + (StatusBar.currentHeight),
    height: Platform.OS === 'ios' ? 44 : 44 + (StatusBar.currentHeight),
    width: 80,
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    color: '#444444',
    fontWeight: 'bold',
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  leftButton: {
    paddingLeft: 9,
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  rightButton: {
    paddingRight: 16,
    alignItems: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  icon: {
    fontFamily: 'iconfont',
    fontSize: 18,
    color: '#ACACAC',
  },
});