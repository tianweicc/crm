import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';

export default class SoftwareDevelopmentPage extends Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          navigation={navigation}
          title="软件开发服务"
        />
        <View style={{ height: 10 }}></View>

        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={styles.viewstyle}>

            <Text style={[styles.textstyle, { marginTop: 15 }]}>需求分析</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>全方面需求定位</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>产品需求结构化/数字化</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>辅助梳理业务流程</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>全部内容在线追踪</Text>

            <Text style={[styles.textstyle, { marginTop: 15 }]}>质量保证</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>全栈研发能力</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>专业质量保障体系</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>功能, 性能, 安全全覆盖</Text>

            <Text style={[styles.textstyle, { marginTop: 15 }]}>持续运维</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>专业互联网运维体系</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>7*24小时服务响应</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>超低价云计算资源</Text>

            <Text style={[styles.textstyle, { marginTop: 15 }]}>产品类型</Text>
            <Text style={[styles.textstyle, { marginTop: 5 }]}>企业官网搭建、WEB平台、微信服务号定制、小程序、APP</Text>

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
    fontSize: 14,
    color: '#444444',
  },
  textstyle: {
    fontSize: 14,
    color: '#999999',
  },
  viewstyle: {
    marginHorizontal: 15,
    marginBottom: 40,
  }
})


