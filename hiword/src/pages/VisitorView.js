import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Line from '../componment/Line';
import NavBar from '../componment/NavBar';
import TimeCard from '../componment/Card/TimeCard';
import InputItem from '../componment/Card/InputItem';
import SelectSixCard from '../componment/Card/SelectSixCard';

export default class VisitorView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userNameValue: '',
    };
  }

  onChangeUserNameText = text => {
    this.setState({ userNameValue: text });
  }

  render() {
    const { navigation } = this.props;
    const { userNameValue } = this.state;
    return (
      <View style={styles.container}>
        <NavBar
          title="访客通行"
          navigation={navigation}
          rightIcon={<Text style={styles.icon}>&#xe669;</Text>}
          onPress={this.TimeButton}
        />
        
        <View style={{ height: 10}}></View>
        
        <InputItem
          title="访客"
          inputValue={userNameValue}
          onChangeText={this.onChangeUserNameText}
          placeholder="请输入访客姓名(必填)"
        />

        <InputItem
          title="联系方式"
          inputValue={userNameValue}
          onChangeText={this.onChangeUserNameText}
          placeholder="请输入联系方式"
        />

        <SelectSixCard title="性别" onPress1={() => (alert('ss'))} select1="先生" select2="女士" onPress2={() => (alert('ss'))} />

        <TimeCard title="到访时间" onPress={this.onPressImageItem} textfont="2018-06-09 14: 00" othercolor="#777777" leftcolor="#777777"/>


        <TouchableOpacity onPress={this.okbutton} style={{ backgroundColor: '#4087EE', height: 42, marginHorizontal: 50, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 180 }}>
          <Text style={{ color: 'white', fontSize: 17 }}>生成通行证</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  icon: {
    fontSize: 23,
    color: '#686868',
    fontFamily: 'iconfont',
  },
})


