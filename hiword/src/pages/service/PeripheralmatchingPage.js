import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';

export default class PeripheralmatchingPage extends Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          navigation={navigation}
          title="周边配套"
        />
        <View style={{ height: 10 }}></View>

        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={styles.viewstyle}>

            <Text style={[styles.textstyle, { marginTop: 15 }]}>滨江华尔街中心地处滨江高端商务商业区，山水洲城近在眼前！南面邻近五一商圈，东面直通长沙金融商务区、芙蓉中路金融街，北面可观开福寺和三馆一厅，这就是长沙城市中心、商业中心、文化中心与景观旅游中心，多重世界资源的叠加，铸就无可复制的地段价值。</Text>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>周边景观：橘子洲、开福寺、三馆一厅（博物馆、图书馆、规划展示馆、音乐厅）、步行街等</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>公园绿化：沿江风光带、紫凤公园、开福寺文化广场、湘江风帆广场等</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>甲级医院：湘江医院、省妇幼保健院、长沙市第一医院</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>优质教育：长雅中学、清水塘小学、新竹小学、三角塘小学等</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>大型商场：万达广场、海信广场、世纪金源购物中心、北辰三角洲购物中心等</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>特色餐饮：秦皇食府、毛家饭店、七彩江南、徐记海鲜、好食上、坡子街等</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>星级酒店：洲际酒店、万达文华大酒店、世纪金源大酒店、君悦酒店等</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>金融机构：工商银行、建设银行、农业银行、交通银行、邮政储蓄等</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>交通配套：地铁1号线、地铁6号线、长株潭城际铁路、十余条公交线路等</Text>
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
    fontSize: 14,
    color: '#444444',
  },
  textstyle: {
    fontSize: 14,
    color: '#999999',
    lineHeight: 20,
  },
  viewstyle: {
    marginHorizontal: 15,
    marginBottom: 40,
  }
})


