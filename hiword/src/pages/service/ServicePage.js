import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';

// 一些常量的设置
const cols = 4;
const cellWh = (device.width - 70) / 4;
const vMargin = (device.width - (cellWh * cols)) / (cols + 1);
const hMargin = 50;

export default class ShopCarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ "name": "计算机服务", "image": "group14" }, { "name": "共享活动室", "image": "group6" }
        , { "name": "雨伞借用", "image": "group18" }, { "name": "健康医疗", "image": "group224" }
        , { "name": "消杀服务", "image": "group205" }, { "name": "周边配套", "image": "group247" }],

      data1: [{ "name": "贵宾来访", "image": "group256" }, { "name": "法律咨询", "image": "group28" }
        , { "name": "金融理财", "image": "group29" }, { "name": "软件开发", "image": "group114" }
        , { "name": "房产专业", "image": "group125" }, { "name": "活动策划", "image": "group925" }]
    };
  }

  conversation = (info) => {
    const {navigation} = this.props;
    if(info.item.name == '计算机服务') {
      navigation.navigate('ComputerServicePage')
    }
    if(info.item.name == '共享活动室') {
      navigation.navigate('SharingactivitiesPage')
    }
    if(info.item.name == '雨伞借用') {
      navigation.navigate('UmbrellaborrowingPage')
    }
    if(info.item.name == '健康医疗') {
      navigation.navigate('HealthcarePage')
    }
    if(info.item.name == '消杀服务') {
      navigation.navigate('DisinfectionServicePage')
    }
    if(info.item.name == '周边配套') {
      navigation.navigate('PeripheralmatchingPage')
    }
  }

  conversation1 = (info) => {
    const {navigation} = this.props;
    if(info.item.name == '贵宾来访') {
      navigation.navigate('VIPvisitPage')
    }
    if(info.item.name == '法律咨询') {
      navigation.navigate('LegalAdvisoryServicePage')
    }
    if(info.item.name == '金融理财') {
      navigation.navigate('FinancialmanagementPage')
    }
    if(info.item.name == '软件开发') {
      navigation.navigate('SoftwareDevelopmentPage')
    }
    if(info.item.name == '房产专业') {
      navigation.navigate('HousepropertyServicePage')
    }
    if(info.item.name == '活动策划') {
      navigation.navigate('SportsexchangePage')
    }
  }

  keyExtractor = (item, index) => `${item.id} ${index}`;

  renderItem = info => (
    <TouchableOpacity onPress={() => this.conversation(info)} style={styles.flexstyle} activeOpacity={0.8}>
      <Image source={{ uri: info.item.image }} style={{ height: 24, width: 24 }} />
      <Text style={styles.hottext} numberOfLines={1}>{info.item.name}</Text>
    </TouchableOpacity>
  )

  renderItem1 = info => (
    <TouchableOpacity onPress={() => this.conversation1(info)} style={styles.flexstyle} activeOpacity={0.8}>
      <Image source={{ uri: info.item.image }} style={{ height: 24, width: 24 }} />
      <Text style={styles.hottext} numberOfLines={1}>{info.item.name}</Text>
    </TouchableOpacity>
  )

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          showLeftButton={false}
          title="服务"
          navigation={navigation}
          rightIcon={<Text style={styles.topRightIcon}>&#xe906;</Text>}
          onPress={this.MessageButton}
        />
        <Line />
        <ScrollView>
          <View>
            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10 }}>
              <View style={styles.linestyle}></View>
              <Text style={styles.titlesize}>延伸服务</Text>
            </View>
            <FlatList
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              data={this.state.data}
              contentContainerStyle={styles.ListViewStyle}
              removeClippedSubviews={false}
              numColumns={4}
            />
          </View>

          <View>
            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10 }}>
              <View style={styles.linestyle}></View>
              <Text style={styles.titlesize}>专属服务</Text>
            </View>
            <FlatList
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem1}
              data={this.state.data1}
              contentContainerStyle={styles.ListViewStyle}
              removeClippedSubviews={false}
              numColumns={4}
            />
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
  ListViewStyle: {
    marginTop: 15,
  },
  hottext: {
    fontSize: 12,
    marginTop: 12,
  },
  flexstyle: {
    marginLeft: vMargin,
    marginBottom: 15,
    width: cellWh,
    height: hMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlesize: {
    fontSize: 14,
    color: '#444444',
  },
  linestyle: {
    backgroundColor: '#4054EA',
    width: 2,
    marginRight: 5,
  }
})


