import * as React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import device from '../device';

export default class OptionCard extends React.Component{
   static defaultProps = {
    title: '',
    dis: true,
    right: true,
    hide: false,
  };

   showMessageCountView() {
    if (this.isShowMessageCountView()) {
      return this.renderMessageCountView();
    }
  }

   isShowMessageCountView() {
    const { number, rightView } = this.props;
    return number && rightView;
  }

   showRightIndicatorView() {
    const { right } = this.props;
    if (right) {
      return this.renderRightIndicatorView();
    }
  }

   renderContentView() {
    const {
      title, urlicon, dis, onPress,
    } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.row}>
          <Image style={styles.leftIcon} source={{ uri: urlicon}}/>
            <View style={dis === true ? styles.detail : styles.detail1}>
              <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
              </View>
              {this.showMessageCountView()}
              {this.showRightIndicatorView()}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

   renderMessageCountView() {
    const { number, friend } = this.props;
    if (friend === false) {
      return (
        <View style={styles.tinycircular} />
      );
    }
    return (
      <View style={styles.rightView}>
        <Text style={styles.righttext}>{number}</Text>
      </View>
    );
  }

   renderRightIndicatorView() {
    const { number } = this.props;
    if (number) {
      return <Text style={{ marginRight: 15 }} />;
    }
    return <Text style={styles.rightstyle}>&#xe60a;</Text>;
  }

   render() {
    const { hide } = this.props;
    if (hide) {
      return null;
    }
    return this.renderContentView();
  }
}

const styles = StyleSheet.create({
  container: {
    width: device.width,
    height: 50,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 11,
    alignItems: 'center',
    height: 51,
  },
  detail1: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 11,
    alignItems: 'center',
    height: 52,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 5,
  },
  titleText: {
    fontSize: 16,
    color: '#444444',
  },
  leftIcon: {
    marginLeft: 18,
    height: 24,
    width: 24,
  },
  rightstyle: {
    fontFamily: 'iconfont', fontSize: 13, color: '#ECECEC', marginRight: 15,
  },
  rightView: {
    height: 20, 
    width: 30, 
    backgroundColor: 'gray', 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginRight: 10,
  },
  tinycircular: {
    height: 7, 
    width: 7, 
    backgroundColor: '#EA4200', 
    borderRadius: 3.5, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 10,
  },
  righttext: {
    fontSize: 15, color: '#FFFFFF',
    fontWeight: 'bold',
  },
});