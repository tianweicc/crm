import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import device from '../device';

export default class SelectSixCard extends Component {
  static defaultProps = {
    title: '标题',
    style: null,
    onPress: null,
  }

  render() {
    const {
      title, onPress1, select1, select2, onPress2,
    } = this.props;
    return (
      <View  >
        <View style={[styles.container]}>
        <Text style={styles.leftstyle}>{title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.itemstyle} onPress={onPress1} activeOpacity={0.8}>
              <Image source={{ uri: 'city' }} style={styles.imagestyle} />
              <Text style={styles.rightstyle}>{select1}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.itemstyle,{marginLeft: 15}]} onPress={onPress2} activeOpacity={0.8}>
              <Image source={{ uri: 'city' }} style={styles.imagestyle} />
              <Text style={styles.rightstyle}>{select2}</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 17,
    borderBottomWidth: device.hairlineWidth,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 15,
    color: '#999',
  },
  itemstyle: {
     flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 50
  },
  imagestyle: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  leftstyle: {
    color: '#777777',
    fontSize: 15,
  },
  rightstyle: {
    color: '#444444',
    fontSize: 14,
  }
});