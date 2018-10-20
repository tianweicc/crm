import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
import OptionCard from '../../../componment/Card/OptionCard';
import Line from '../../../componment/Line';
import NavBar from '../../../componment/NavBar';
import device from '../../../componment/device';


export default class MessageView extends Component {

  constructor(props) {
    super(props);

    this.swipeoutopstion  = [
      {
        text: '删除',
        backgroundColor: 'red',
        onPress: ()=>{ 
          this.delect();
        },
      }
    ];
    this.state = {
      data: ['a', 'b', 'c']
    };
  }

 
  delect = () => {
    alert('确认删除？');
  }
  conversation = () => {
    const {navigation} = this.props;
    navigation.navigate('MessageDatileView');
  }
  // 点击去通讯录
  PhoneListButton = () => {
    const {navigation} = this.props;
    navigation.navigate('PepeoSelectView');
  }

  keyExtractor = (item, index) => `${item.id} ${index}`;

  renderItem = info => (
    <Swipeout right={this.swipeoutopstion}>
     <TouchableOpacity onPress={() => this.conversation(info)} style={styles.flexstyle} activeOpacity={0.8}>
      <View style={{ marginHorizontal: 15, flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
        <Image source={{ uri: 'city' }} style={styles.iconstyle} />
        <View style={{ flex: 1, marginLeft: 15 }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, color: '#444444'}}>系统消息</Text>
            <Text style={{ fontSize: 12, color: '#999999'}}>2018-8-19</Text>
          </View>
          <Text style={{ fontSize: 14, color: '#999999', marginTop: 8, lineHeight: 20}} numberOfLines={2} >尊敬的各位业主，物业中心温馨提醒您，下午15：00将停电1小时，请各位业主提前做好准备..</Text>
        </View>
      </View>
    </TouchableOpacity>
  </Swipeout>

  
  )

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          title="消息"
          navigation={navigation}
          rightIcon={<Text style={styles.topRightIcon}>&#xe66a;</Text>}
          onPress={this.PhoneListButton}
        />
      
        <FlatList
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          data={this.state.data}
          contentContainerStyle={styles.ListViewStyle}
          removeClippedSubviews={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  dartstyle: {

  },
  detailstyle: {
    marginLeft: 15,
    flex: 1
  },
  ListViewStyle: {
    marginTop: 10,
  },
  iconstyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  flexstyle: {
    borderBottomWidth: device.hairlineWidth,
    borderBottomColor: '#ECECEC',
    backgroundColor: 'white'
  },
  topRightIcon: {
    fontFamily: 'iconfont',
    fontSize: 23,
    color: '#686868',
  },
})


