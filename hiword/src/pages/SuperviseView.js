import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import NavBar from '../componment/NavBar/index';
import device from '../componment/device';

export default class SuperviseView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

  }

  StatisticsButton = () => {
    alert();
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
        <NavBar title="监督管理" 
        navigation={navigation} 
         rightIcon={<Text style={{ color: '#333333'}}>统计</Text>}
         onPress={this.StatisticsButton}
         />
        
        <View style={{ height: 250, backgroundColor: 'white', marginTop: 10 }}>
          <View style={{ height: 140, borderWidth: device.hairlineWidth,marginHorizontal: 15, marginTop: 15, marginBottom: 8, borderColor: '#ECECEC'}}>
            <TextInput
              placeholder="请输入问题详情，以便我们更好的处理"
              underlineColorAndroid="transparent"
              style={styles.TextInputStyle}
              onChangeText={this.onChangeText}
              multiline
              maxLength={500}
            />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
            <Image source={{ uri: 'city' }} style={{ width: 60, height: 60, marginLeft: 15, marginRight: 15 }} />
            <View>
              <Text style={{ fontSize: 14, color: '#777777' }}>上传图片</Text>
              <Text style={{ fontSize: 10, color: '#999999', marginTop: 5 }}>清晰的画面使我们检测问题的关键</Text>
            </View>
          </View>

          <TouchableOpacity onPress={this.okbutton} style={{ backgroundColor: '#4087EE', height: 45, marginHorizontal: 46, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 120}}>
            <Text style={{ color: 'white', fontSize: 17}}>提交</Text>
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
    height: 130,
    textAlignVertical: 'top',
    padding: 0,
    marginTop: 5,
    marginBottom: 15,
    width: device.wdth * 0.88,
  },
})