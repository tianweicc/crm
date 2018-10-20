import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';

export default class VIPvisitPage extends Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          navigation={navigation}
          title="贵宾来访接待服务"
        />
        <View style={{ height: 10 }}></View>

        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={styles.viewstyle}>

            <Text style={[styles.textstyle, { marginTop: 15 }]}>为更好的服务本大厦的各企业，迎接即将到访的贵宾，将为企业提供专业的商务接待服务</Text>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>大堂接待服务</Text>
            </View>
            <Text style={[styles.textstyle, { marginLeft: 10 }]}>在五星级的写字楼入户大堂，聘请形象气质佳、专业素质出众的大堂经理和迎宾，同时设置商务服务台，提供国际标准的综合性商务服务与接待礼仪工作。</Text>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>泊车引导服务</Text>
            </View>
            <Text style={[styles.textstyle, { marginLeft: 10 }]}>采用全智能化的立体车库及人性化的车辆导视系统，每层配备工作人员指引泊车，让泊车成为一种享受，同时还可提供CEO专属停车位，彰显尊贵身份。</Text>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>专业会议服务</Text>
            </View>
            <Text style={[styles.textstyle, { marginLeft: 10 }]}>根据企业的需求，为企业提供大型会议或日常商务活动的组织与承办工作。</Text>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>VIP专属服务</Text>
            </View>
            <Text style={[styles.textstyle, { marginLeft: 10 }]}>针对重点客户建立VIP团队服务（客服、维修、保安），如遇公司庆典、重要客人来访等，做好迎接服务，重要活动车位预留服务，重要活动电梯控制服务，体现VIP优质服务。</Text>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>客务服务</Text>
            </View>
            <Text style={[styles.textstyle, { marginLeft: 10 }]}>将设立客户服务中心，为业主/租户提供一系列服务包括：迁入/迁出手续办理、恭贺乔迁、提供客户手册、意见征集、问题处理信息反馈服务，协助客户在大厦内进行业务宣传等服务内容。</Text>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <View style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5, marginTop: 8 }}></View>
              <Text style={styles.textstyle}>背景音乐服务</Text>
            </View>
            <Text style={[styles.textstyle, { marginLeft: 10 }]}>在大楼内特定时间播放轻柔的背景音乐，让企业员工和访客沉浸音乐，放松身心。</Text>

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


