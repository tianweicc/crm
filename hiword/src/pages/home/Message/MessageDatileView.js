import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, ScrollView } from 'react-native';
import NavBar from '../../../componment/NavBar';
import device from '../../../componment/device';
import Line from '../../../componment/Line';
import TimeCard from '../../../componment/Card/TimeCard';
import TextCard from '../../../componment/Card/TextCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import KeyboardSpacer from 'react-native-keyboard-spacer';

// 一些常量的设置
const cols = 4;
const cellWh = (device.width - 70) / 4;
const vMargin = (device.width - (cellWh * cols)) / (cols + 1);
const hMargin = 80;

export default class MessageDatileView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ['a']
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

  conversation = () => {
    alert('点击我');
  }

  keyExtractor = (item, index) => `${item.id} ${index}`;

  renderItem = info => (
    <TouchableOpacity onPress={() => this.conversation(info)} style={styles.flexstyle} activeOpacity={0.8}>
      <Image source={{ uri: 'city' }} style={{ height: 80, width: 80 }} />
    </TouchableOpacity>
  )

  renderItem1 = info => (
    <View>
      <View style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center', marginTop: 10 }}>
        <Image source={{ uri: 'group247' }} style={{ width: 40, height: 40, borderRadius: 25, marginRight: 10 }} />
        <View style={{ width: 200, backgroundColor: '#f2f2f2', borderRadius: 8 }}>
          <Text style={{ marginTop: 5, marginBottom: 5, marginRight: 5, marginLeft: 5 }}>很高兴认识你。我是来自艾欧尼亚的打野瞎子，很像跟你做个朋友，交流一下</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 15, marginTop: 10, marginBottom: 5 }}>
        <View style={{ width: 200, backgroundColor: '#4087EE', borderRadius: 8 }}>
          <Text style={{ marginTop: 5, marginBottom: 5, marginRight: 5, marginLeft: 5 }}>ok 我们在艾欧尼亚见</Text>
        </View>
        <Image source={{ uri: 'group3' }} style={{ width: 40, height: 40, borderRadius: 20 }} />
      </View>
    </View>
  )

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar title="礼宾人员"
          navigation={navigation}
        />
        <View style={{ height: 10, }}></View>
        
        <ScrollView style={{  backgroundColor: 'white', flex: 1}}>
          <TimeCard title="事        项" textfont="2018-06-09 14: 00" othercolor="#999999" leftcolor="#444444" />
          <TextCard title="联系电话" textfont="13787270612" />
          <TextCard title="区        域" textfont="公共区域" />
          <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
            <Text style={styles.dartstyle}>维修事项</Text>
            <Text style={styles.detailstyle}>水管炸裂需要紧急维修啊 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</Text>
          </View>

          <View>
            <FlatList
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              data={this.state.data}
              removeClippedSubviews={false}
              contentContainerStyle={styles.ListViewStyle}
              numColumns={4}
            />
          </View>
          
          <View style={{ height: 10, backgroundColor: '#f0eff5'}}></View>

          <View>
            <FlatList
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem1}
              data={this.state.data}
              removeClippedSubviews={false}
              contentContainerStyle={styles.ListViewStyle}
            />
          </View>
          <View style={{ height: 10}}></View>
        </ScrollView>
        
        <View style={{  height: 50, width: device.width }} >
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', height: 50}}>
        <View style={{ height: 40, borderWidth: device.hairlineWidth, marginHorizontal: 15, borderColor: '#ECECEC', flex: 1 }}>
            <TextInput
              placeholder="请问有什么可以帮助您"
              underlineColorAndroid="transparent"
              style={styles.TextInputStyle}
              onChangeText={this.onChangeText}
              multiline
              maxLength={500}
            />
          </View>
          <Text style={styles.icon}>&#xe70a;</Text>
        </View>
        </View>
        {/* <View style={{ position: 'absolute', bottom: 0, height: 60, width: device.width }} >
        <View style={{ height: 10}}></View>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', height: 50}}>
        <View style={{ height: 40, borderWidth: device.hairlineWidth, marginHorizontal: 15, borderColor: '#ECECEC', flex: 1 }}>
            <TextInput
              placeholder="请问有什么可以帮助您"
              underlineColorAndroid="transparent"
              style={styles.TextInputStyle}
              onChangeText={this.onChangeText}
              multiline
              maxLength={500}
            />
          </View>
          <Text style={styles.icon}>&#xe70a;</Text>
        </View>
        </View> */}
        {/* {this.recderBottomview()} */}
        {device.isIos ? <KeyboardSpacer /> : null}
      </View>
    )
  }

  recderBottomview = () => {
    return
    <View style={{ position: 'absolute', bottom: 0, height: 60, width: device.width }} >
        <View style={{ height: 10}}></View>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', height: 50}}>
        <View style={{ height: 40, borderWidth: device.hairlineWidth, marginHorizontal: 15, borderColor: '#ECECEC', flex: 1 }}>
            <TextInput
              placeholder="请问有什么可以帮助您"
              underlineColorAndroid="transparent"
              style={styles.TextInputStyle}
              onChangeText={this.onChangeText}
              multiline
              maxLength={500}
            />
          </View>
          <Text style={styles.icon}>&#xe70a;</Text>
        </View>
        </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ListViewStyle: {
    backgroundColor: 'white',
  },
  flexstyle: {
    marginLeft: vMargin,
    marginBottom: 15,
    width: cellWh,
    height: hMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dartstyle: {
    fontSize: 15,
    color: '#999999',
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  detailstyle: {
    marginLeft: 25,
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    color: '#444444',
  },
  TextInputStyle: {
    marginHorizontal: 10,
    fontSize: 14,
    height: 38,
    padding: 0,
    textAlignVertical: 'top',
  },
  icon: {
    fontFamily: 'iconfont',
    fontSize: 18,
    color: '#ACACAC',
    marginRight: 10,
  },
})