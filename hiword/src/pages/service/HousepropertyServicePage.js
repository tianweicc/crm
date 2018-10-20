import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';

export default class HousepropertyServicePage extends Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          navigation={navigation}
          title="房产服务"
        />
        <View style={{ height: 10 }}></View>

        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={styles.viewstyle}>

            <Text style={[styles.titlestyle, { marginTop: 15, lineHeight: 20, marginBottom: 20 }]}>由于本公司为集地产开发与物业服务于一体的公司，可为客户提供更为专业的房产知识解答</Text>
            <Text style={[styles.titlestyle,{ marginBottom: 10}]}>(1)  房地产基础知识解答服务覆盖</Text>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>1、房屋经济形态相关知识解答</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}> 2、土地所有制及土地使用权相关知识解答</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>3、房屋种类的问询（如：期房、现房、毛胚房商品房、经济适用房、二手房的概念）</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}> 4、建筑结构的解答</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>5、房产交易及产权办理的相关解答</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>6、房产及地产的关系及差异等等</Text>
            </View>

           <Text style={[styles.titlestyle,{ marginBottom: 10, marginTop: 10}]}>(2)   房地产高端知识解答服务覆盖</Text>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>1、房地产法律知识问询（拆迁类法律知识问答、工程类法律知识问答、房地产营销类法律知识等）</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}> 2、地产金融（信息、保险、金融投资等）</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>3、房地产物业管理咨询服务</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 20}}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}> 4、房地产经营（房屋买卖、租赁、抵押等）等等</Text>
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
    fontSize: 15,
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


