import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';

export default class ComputerServicePage extends Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          navigation={navigation}
          title="计算机服务"
        />
        <View style={{ height: 10 }}></View>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={styles.viewstyle}>
            <Text style={[styles.titlestyle, { marginTop: 20, marginBottom: 10 }]}>计算机服务简介</Text>

          <View>
            <Text style={styles.textstyle}>
              （1）确保网络通信传输畅通；
            </Text>
            <Text style={styles.textstyle}>
              （2）掌握主干设备的配置情况及配置参数变更情况，备份各个设备的配置文件；
            </Text>
            <Text style={styles.textstyle}>
              （2）掌握主干设备的配置情况及配置参数变更情况，备份各个设备的配置文件；
            </Text>
            <Text style={styles.textstyle}>
              （4）负责网络布线配线架的管理，确保配线的合理有序；
            </Text>
            <Text style={styles.textstyle}>
              （5）掌握用户端设备接入网络的情况，以便发现问题时可迅速定位；
            </Text>
            <Text style={styles.textstyle}>
              （6）采取技术措施，对网络内经常出现的用户需要变更位置和部门的情况进行管理；
            </Text>
            <Text style={styles.textstyle}>
              （7）掌握与外部网络的连接配置，监督网络通信状况，发现问题后与有关机构及时联系；
            </Text>
            <Text style={styles.textstyle}>
              （8）实时监控整个局域网的运转和网络通信流量情况；
            </Text>
            <Text style={styles.textstyle}>
              （9）制定、发布网络基础设施使用管理办法并监督执行情况。
            </Text>
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
  },
  titlestyle: {
    fontSize: 16,
    color: '#444444',
  },
  textstyle: {
    fontSize: 14,
    color: '#999999',
    lineHeight: 18,
    marginTop: 5,
  },
  viewstyle: {
    marginHorizontal: 15,
    alignItems: 'center'
  }
})


