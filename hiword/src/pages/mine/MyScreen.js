import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import OptionCard from '../../componment/Card/OptionCard';
import Line from '../../componment/Line';

export default class MyScreen extends Component {

  // 我的服务订单
  onPressServiceOrder = () => {
    const { navigation} = this.props;
    navigation.navigate('ServiceOrderView')
  }
  // 个人详情
  userButton = () => {
    const { navigation} = this.props;
    navigation.navigate('User_DetailsView')
  }
  // 我的评价
  onPressEvaluateBotton = () => {
    const { navigation} = this.props;
    navigation.navigate('EvaluateView')
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ height: 128, justifyContent: 'center', backgroundColor: '#4087EE' }} onPress={this.userButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
            <Image source={{ uri: 'group25' }} style={styles.iconstyle} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.textStyle}>周杰伦老师</Text>
              <Text style={[styles.textStyle, { marginTop: 5, fontSize: 11 }]}>打扰小达人</Text>
            </View>
          </View>
        </TouchableOpacity>

        <OptionCard
          title="项目名称"
          onPress={this.onPressFriendCard}
          urlicon="group21"
          friend={false}
          rightView
        />

        <View style={{ height: 10, backgroundColor: '#F4F4F4' }}></View>

        <OptionCard
          title="我的服务订单"
          onPress={this.onPressServiceOrder}
          urlicon="group22"
          friend={false}
          rightView
        />
        <Line containerBackgroundStyle={{ marginLeft: 58 }} />

        <OptionCard
          title="我的评价"
          onPress={this.onPressEvaluateBotton}
          urlicon="group23"
          friend={false}
          rightView
        />
        <Line containerBackgroundStyle={{ marginLeft: 58 }} />

        <OptionCard
          title="访客记录"
          onPress={this.onPressFriendCard}
          urlicon="group24"
          friend={false}
          rightView
        />
        <View style={{ height: 10, backgroundColor: '#F4F4F4' }}></View>

        <View style={{ height: 50, backgroundColor: 'white' }}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
  },
  iconstyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
})


