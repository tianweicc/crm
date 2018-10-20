import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';
import InputItem from '../../componment/Card/InputItem';

export default class SportDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  onChangeUserNameText = text => {
    this.setState({ userNameValue: text });
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          navigation={navigation}
          title="运动交流"
        />
        <View style={{ height: 10 }}></View>

        <View style={{  backgroundColor: 'white' }}>
        <View style={{ height: 100, marginHorizontal: 14}}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <View style={{ height: 30, justifyContent: 'center', marginTop: 5 }}>
          <Text style={styles.textstyle}>篮球赛</Text>
        </View>
        <Text style={{ fontSize: 12, color: '#4087EE', marginLeft: 20}}>已加入(5)</Text>
        </View>
        
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Text style={styles.lefttextstyle}>时        间:</Text>
          <Text style={styles.contentstyle}>2018-01-01</Text>
          <Text style={styles.contentstyle}>18:00</Text>
        </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
          <Text style={styles.lefttextstyle}>行程安排:</Text>
          <Text style={styles.contentstyle}>当天下午18：00在大厦楼下集合</Text>
        </View>
        </View>
        </View>

         <View style={{ height: 10 }}></View>

         <InputItem
          title="姓名"
          inputValue={this.state.userNameValue}
          onChangeText={this.onChangeUserNameText}
          placeholder="请输入姓名"
        />

         <InputItem
          title="联系方式"
          inputValue={this.state.userNameValue}
          onChangeText={this.onChangeUserNameText}
          placeholder="请输入个人联系方式"
        />

         <InputItem
          title="所属公司"
          inputValue={this.state.userNameValue}
          onChangeText={this.onChangeUserNameText}
          placeholder="请输入公司名称"
        />

        <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{  justifyContent: 'center', alignItems: 'center', width: device.width * 0.3, height: 36, marginLeft: 40, backgroundColor: '#A1B4DA', borderRadius: 8}}>
          <Text style={{ color: 'white', fontSize: 15}}>球员</Text>
          </View>
          <View style={{  justifyContent: 'center', alignItems: 'center', width: device.width * 0.3, borderWidth: 1, height: 36, marginRight: 40, borderColor: '#A1B4DA', borderRadius: 8}}>
            <Text style={{ color: '#A1B4DA', fontSize: 15}}>啦啦队</Text>
          </View>
        </View>

       <View style={{ height: 10 }}></View>

        <View style={{ height: 80, backgroundColor: 'white'}}>
        <View style={{ marginHorizontal: 20}}>
          <Text style={[styles.lefttextstyle, {marginTop: 10}]}>备注</Text>
          <Text style={{ fontSize: 14, color: '#444444', lineHeight: 18, marginTop: 10}}>参赛人员20人，其中替补10人当直接参赛人员加满时球员按钮灰。啦啦队：人数不限</Text>
        </View>
        </View>

        <View style={{ height: 40, alignItems: 'center', justifyContent: 'center', width: device.width * 0.7, marginLeft: device.width * 0.15, backgroundColor: '#4087EE', borderRadius: 8, marginTop: 40}}>
          <Text style={{ fontSize: 14, color: 'white'}}>提交</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textstyle: {
    fontSize: 18,
    color: '#444444',
  },
  flexstyle: {
    backgroundColor: 'white',
    marginTop: 1,
  },
  lefttextstyle: {
    color: '#777777',
    fontSize: 14,

  },
  contentstyle: {
    color: '#444444',
    fontSize: 14,
    marginLeft: 15,
  }
})


