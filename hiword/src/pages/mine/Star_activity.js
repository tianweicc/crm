import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import OptionCard from '../../componment/Card/OptionCard';
import Line from '../../componment/Line';

export default class Star_activity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ['a', 'b', 'c', 'd', 'c', 'd']
    };
  }

  conversation = () => {
    alert('点击我');
  }

  keyExtractor = (item, index) => `${item.id} ${index}`;

  renderItem = info => (
    <TouchableOpacity onPress={() => this.conversation(info)} style={styles.flexstyle} activeOpacity={0.8}>
     <View style={{ height: 104, marginHorizontal: 14}}>
      <View style={{ flexDirection: 'row', marginTop: 14}}>
        <Image source={{ uri: 'city'}} style={{ height: 60, width: 60}}/>
        <View style={{ marginLeft: 14}}>
          <View style={{ flexDirection: 'row'}}>
            <Text style={styles.dartstyle}>发起时间:</Text>
            <Text style={ styles.inputstyle}>2018.5.19</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 4,}}>
            <Text style={styles.dartstyle}>维修区域:</Text>
            <Text style={ styles.inputstyle}>公共区域</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 4,}}>
            <Text style={styles.dartstyle}>维修事项:</Text>
            <Text style={ styles.inputstyle}>水管爆裂，需要紧急维修</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 4,}}>
            <Text style={styles.dartstyle}>期望时间:</Text>
            <Text style={ styles.inputstyle}>2018.5.19 18：00</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end',}}>
        <Text style={{ fontSize: 10, color: '#4087EE'}}>已受理</Text>
      </View>
      </View>
     </View>
     <Line/>
     <View style={{ height: 36, marginHorizontal: 14, justifyContent: 'center'}}>
       <Text style={{ fontSize: 10, color: '#4087EE'}}>维修人员回复：尊敬的业主，您好，我将于13：00到底您所在位置勘察</Text>
     </View>
    </TouchableOpacity>
  )

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
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
  flexstyle: {
    height: 140,
    backgroundColor: 'white',
    marginTop: 10,
  },
  dartstyle: {
    fontSize: 12,
    color: '#999999',
  },
  inputstyle: {
    fontSize: 12,
    color: '#444444',
   
  }
})


