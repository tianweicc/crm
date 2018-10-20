import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';

// 一些常量的设置
const cols = 4;
const cellWh = (device.width - 70) / 4;
const vMargin = (device.width - (cellWh * cols)) / (cols + 1);
const hMargin = 50;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ "name": "物业保修", "image": "group9" }, { "name": "访客通行", "image": "group6" }
        , { "name": "建议咨询", "image": "view1" }, { "name": "保洁服务", "image": "group7" }
        , { "name": "委托租赁", "image": "group15" }, { "name": "紧急药箱", "image": "group16" }
        , { "name": "监督管理", "image": "group" }]
    };
  }

  conversation = (info) => {
    const {navigation} = this.props;
    if(info.item.name == '访客通行') {
      navigation.navigate('VisitorView')
    }
    if(info.item.name == '保洁服务') {
      navigation.navigate('CleanServiceView')
    }
    if(info.item.name == '建议咨询') {
      navigation.navigate('AdviceView')
    }
    if(info.item.name == '物业保修') {
      navigation.navigate('SelectAdressView')
    }
    if(info.item.name == '监督管理') {
      navigation.navigate('SuperviseView')
    }
  }

  openActivity = () => {
    const { navigation } = this.props;
    navigation.navigate('Login')
  }
  // 点击消息
  MessageButton = () => {
    const { navigation } = this.props;
    navigation.navigate('MessageView')
  }

  keyExtractor = (item, index) => `${item.id} ${index}`;

  renderItem = info => (
    <TouchableOpacity onPress={() => this.conversation(info)} style={styles.flexstyle} activeOpacity={0.8}>
      <Image source={{ uri: info.item.image }} style={{ height: 24, width: 24 }} />
      <Text style={styles.hottext} numberOfLines={1}>{info.item.name}</Text>
    </TouchableOpacity>
  )

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          showLeftButton= {false}
          title="首页"
          navigation={navigation}
          rightIcon={<Text style={styles.topRightIcon}>&#xe906;</Text>}
          onPress={this.MessageButton}
        />
        <ScrollView>

          <TouchableOpacity onPress={this.openActivity}>
            <Image source={{ uri: 'city' }} style={{ height: 100, width: device.width }} />
          </TouchableOpacity>

          <View>
            <FlatList
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              data={this.state.data}
              contentContainerStyle={styles.ListViewStyle}
              removeClippedSubviews={false}
              numColumns={4}
            />
          </View>

          <Line />

          <View style={styles.viewstyle}>
            <Image source={{ uri: 'group17' }} style={{ width: 14, height: 14 }} />
            <Text style={{ fontSize: 14, marginLeft: 15, marginRight: 15, color: '#666666' }} numberOfLines={1}>各位业主，今天下午召开业主大会</Text>
          </View>

          <View style={{ height: 10, backgroundColor: '#F9F9F9' }}></View>
          <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 20, marginLeft: 15 }}>服务评价</Text>

          <View style={styles.blueviewstyle}>
            <Text style={{ fontSize: 12, color: 'white', marginTop: 22 }}>2018/5/19</Text>

            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
              <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                  <Text style={{ fontSize: 18, color: 'white', marginBottom: 4 }}>4</Text>
                  <Text style={{ fontSize: 10, color: 'white' }}>表扬/次数 </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18, color: 'white', marginBottom: 4 }}>0</Text>
                  <Text style={{ fontSize: 10, color: 'white' }}>批评/次数 </Text>
                </View>
              </View>

              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, marginBottom: 9 }}>AAAAAA</Text>
                <Text style={{ fontSize: 10, color: 'white' }}>报事综合评价</Text>
              </View>
            </View>
          </View>



        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  icon: {
    fontFamily: 'iconfont',
    fontSize: 21,
    color: '#ACACAC',
  },
  viewstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    height: 40,
  },
  blueviewstyle: {
    backgroundColor: '#4054EA',
    height: 120,
    marginHorizontal: 15,
    alignItems: 'center'
  },
  flexstyle: {
    marginLeft: vMargin,
    marginBottom: 15,
    width: cellWh,
    height: hMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListViewStyle: {
    marginTop: 15,
  },
  hottext: {
    fontSize: 12,
    marginTop: 12,
  },
  topRightIcon: {
    fontFamily: 'iconfont',
    fontSize: 23,
    color: '#686868',
  },
})