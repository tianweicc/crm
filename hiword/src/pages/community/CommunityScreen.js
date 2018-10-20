import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';

export default class NewScreen extends Component {

  openthis = () => {
    const {navigation} = this.props;
    navigation.navigate('SportsexchangePage')
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          showLeftButton={false}
          title="社区"
          navigation={navigation}
        />
        <Line />
        <View>
          <Image source={{ uri: "group916" }} style={{ height: 100 }} />
        </View>

        <View>
          <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 20 }}>
          <TouchableOpacity onPress={this.openthis} style={{  height: 80, flex: 1}}>
            <ImageBackground source={{ uri: "mask" }} style={{ height: 80, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 14 }}>招聘信息展示</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openthis} style={{  height: 80, flex: 1}}>
            <ImageBackground source={{ uri: "group117" }} style={{ height: 80, flex: 1, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 14 }}>拼图结伴旅游</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 20 }}>
          <TouchableOpacity onPress={this.openthis} style={{  height: 80, flex: 1}}>
            <ImageBackground source={{ uri: "group219" }} style={{ height: 80, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 14 }}>运动交流</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openthis} style={{  height: 80, flex: 1}}>
            <ImageBackground source={{ uri: "group221" }} style={{ height: 80, flex: 1, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 14 }}>培训活动交流</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 20 }}>
          <TouchableOpacity onPress={this.openthis} style={{  height: 80, flex: 1}}>
            <ImageBackground source={{ uri: "group223" }} style={{ height: 80, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 14 }}>公司活动联谊</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openthis} style={{  height: 80, flex: 1}}>
            <ImageBackground source={{ uri: "group225" }} style={{ height: 80, flex: 1, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 14 }}>阅读</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 20 }}>
          <TouchableOpacity onPress={this.openthis} style={{  height: 80, flex: 1}}>
            <ImageBackground source={{ uri: "group227" }} style={{ height: 80, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 14 }}>楼宇政策与咨询</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openthis} style={{  height: 80, flex: 1}}>
            <ImageBackground source={{ uri: "group229" }} style={{ height: 80, flex: 1, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 14 }}>文化艺术品鉴交流</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})