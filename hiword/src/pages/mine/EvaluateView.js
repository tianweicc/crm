import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import OptionCard from '../../componment/Card/OptionCard';
import Line from '../../componment/Line';
import NavBar from '../../componment/NavBar';

export default class EvaluateView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ['a', 'b', 'c']
    };
  }

  conversation = () => {
    alert('点击我');
  }

  keyExtractor = (item, index) => `${item.id} ${index}`;

  renderItem = info => (
    <TouchableOpacity onPress={() => this.conversation(info)} style={styles.flexstyle} activeOpacity={0.8}>
    <View style={{ marginHorizontal: 15}}>
    <View style={{ justifyContent: 'center', height: 45}}>
      <Text style={styles.dartstyle}>2018-5-20  16:00</Text>
    </View>
    <Line/>
    <View style={{ alignItems: 'center', flexDirection: 'row', height: 30, alignItems: 'center'}}>
      <Text style={styles.dartstyle}>区        域</Text>  
      <Text style={styles.detailstyle}>公共区域</Text>
    </View>
    <View style={{  flexDirection: 'row'}}>
      <Text style={styles.dartstyle}>维修事项</Text>
      <Text style={styles.detailstyle}>水管炸裂需要紧急维修啊 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</Text>
    </View>
    <View style={{ alignItems: 'center', flexDirection: 'row', height: 30, alignItems: 'center'}}>
      <Text style={styles.dartstyle}>期待上门世家</Text>  
      <Text style={[styles.detailstyle,{marginLeft: 15}]}>2018-5-20  16:00</Text>
    </View>
    <View style={{ alignItems: 'center', flexDirection: 'row', height: 30, alignItems: 'center'}}>
      <Text style={styles.dartstyle}>维修人员</Text>  
      <Text style={styles.detailstyle}>吴亦凡</Text>
    </View>
    <View style={{  flexDirection: 'row'}}>
      <Text style={styles.dartstyle}>服务评价</Text>
      <Text style={styles.detailstyle}>尊敬的业主您好，我将于12:45分左右到达您所在地址，进行现场勘查，希望您耐心等候</Text>
    </View>
    <View style={{  flexDirection: 'row'}}>
      <Text style={styles.dartstyle}>服务评价</Text>
      <Text style={styles.detailstyle}>吴师傅，尽职尽责，以最快的速度到达，并及时处理，还告诉我们注意事项，服务很好</Text>
    </View>
    <View style={{  flexDirection: 'row', height: 30, alignItems: 'center'}}>
      <Text style={styles.dartstyle}>服务等级</Text>
      <Text style={styles.detailstyle}>******</Text>
    </View>
    
    </View>
    <View style={{ height: 10, backgroundColor: '#F4F4F4'}}></View>
    </TouchableOpacity>
  )

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          title="我的评价"
          navigation={navigation}
        />
        <FlatList
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          data={this.state.data}
          contentContainerStyle={styles.ListViewStyle}
          removeClippedSubviews={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  dartstyle: {
    fontSize: 15,
    color: '#999999',
  },
  detailstyle: {
    marginLeft: 45,
    flex: 1,
    color: '#444444',
  },
  ListViewStyle: {
    marginTop: 10,
    backgroundColor: 'white'
  }
})


