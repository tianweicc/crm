import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';

export default class HealthcarePage extends Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          navigation={navigation}
          title="健康医疗"
        />
        <View style={{ height: 10 }}></View>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={styles.viewstyle}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5 }}></View>
              <Text style={styles.titlestyle}>健康管理咨询,一站式康体服务:</Text>
            </View>

            <Text style={styles.textstyle}>为入驻企业提供员工定期体检服务、医疗急救服务、无偿配备急救箱与急救药品服务、健康知识培训或讲座服务。</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5 }}></View>
              <Text style={styles.titlestyle}>贴心健康活动组织:</Text>
            </View>

            <Text style={styles.textstyle}>不定期组织入驻企业之间各种体育健身、运动竞赛、康体服务，如爬楼活动、登山远足、户外拓展等，在加强身体锻炼之余，增进商务人士的交流。</Text>
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
    lineHeight: 20,
    marginLeft: 10,
  },
  viewstyle: {
    marginHorizontal: 15,
  }
})


