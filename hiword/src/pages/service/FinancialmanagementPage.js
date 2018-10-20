import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';

export default class FinancialmanagementPage extends Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          navigation={navigation}
          title="金融理财服务"
        />
        <View style={{ height: 10 }}></View>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={styles.viewstyle}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5 }}></View>
              <Text style={styles.titlestyle}>对接金融资源服务:</Text>
            </View>

            <Text style={styles.textstyle}>整合银行、担保公司等各类金融资源，帮助客户包括融资、储蓄、信贷、结算、理财、证券、商业保险、金融信息咨询、金融培训课程等多方面的对接服务，帮助客户找到金融解决方案。</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5 }}></View>
              <Text style={styles.titlestyle}>住房理财金融服务:</Text>
            </View>

            <Text style={styles.textstyle}>利用自身产业链优势，可对接地产与金融，为客户提供“金钥匙”等理财产品的金融服务，帮助客户实现住房和理财两不误。</Text>
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


