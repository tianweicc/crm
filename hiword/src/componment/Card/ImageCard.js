import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import device from '../device';

export default class ImageCard extends Component {
  static defaultProps = {
    title: '标题',
    style: null,
    onPress: null,
    avatar: 'group25',
  }

  render() {
    const {
      title, style, onPress, avatar, textfont,
    } = this.props;
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} >
        <View style={[styles.container, style]}>
          <Text style={styles.title}>{title}</Text>
          { avatar ? 
            <View style={styles.rightView} >
            <Image source={{ uri: avatar}} style={styles.iconstyle}/>
            <Text style={styles.icon} >&#xe603;</Text>
          </View>
            : 
            <View style={styles.rightView} >
            <Text style={{ fontSize: 14, color: '#444444'}}>{textfont}</Text>
            <Text style={styles.icon} >&#xe603;</Text>
          </View>
            }
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
    fontSize: 14,
    color: '#777777',
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontFamily: 'iconfont',
    fontSize: 14,
    color: '#ECECEC',
    marginLeft: 10,
  },
  iconstyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  }
});