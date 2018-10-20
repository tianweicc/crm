import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import NavBar from '../componment/NavBar/index';
import device from '../componment/device';
import SelectSixCard from '../componment/Card/SelectSixCard';

export default class AdviceView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

  }


  onChangeText = (text) => {
    if (text && text.length >= 500) {
      this.setState({ content: text.substr(0, 500) });
      Toast.info('最多输入500字');
    } else {
      this.setState({ content: text });
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar title="咨询建议" navigation={navigation} />

        <View style={{ height: 10 }}></View>
        <SelectSixCard title="请选择" onPress1={() => (alert('ss'))} select1="咨询" select2="建议" onPress2={() => (alert('ss'))} />

        <View style={{ height: 10 }}></View>
        <View style={{ height: 255, backgroundColor: 'white' }}>
          <View style={{ height: 149, borderWidth: device.hairlineWidth, marginHorizontal: 15, marginTop: 15, borderColor: '#ECECEC' }}>
            <TextInput
              placeholder="请问有什么可以帮助您"
              underlineColorAndroid="transparent"
              style={styles.TextInputStyle}
              onChangeText={this.onChangeText}
              multiline
              maxLength={500}
            />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', marginBottom: 10 }}>
            <Image source={{ uri: 'city' }} style={{ width: 65, height: 65, marginLeft: 15, marginRight: 10 }} />
            <View>
              <Text style={{ fontSize: 14, color: '#777777' }}>上传图片</Text>
              <Text style={{ fontSize: 10, color: '#999999', marginTop: 8 }}>清晰的画面使我们检测问题的关键</Text>
            </View>
          </View>

          <TouchableOpacity onPress={this.okbutton} style={{ backgroundColor: '#4087EE', height: 46, marginHorizontal: 50, borderRadius: 7, justifyContent: 'center', alignItems: 'center', marginTop: 120 }}>
            <Text style={{ color: 'white', fontSize: 17 }}>填好了</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagestyle: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  itemstyle: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
  TextInputStyle: {
    marginHorizontal: 15,
    fontSize: 14,
    height: 140,
    textAlignVertical: 'top',
    padding: 0,
    marginTop: 5,
    marginBottom: 15,
    width: device.wdth * 0.88,
  },
})