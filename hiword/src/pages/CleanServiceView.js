import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import NavBar from '../componment/NavBar/index';
import device from '../componment/device';
import Line from '../componment/Line';

export default class CleanServiceView extends Component {

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
      <View style={{ height: 80, marginHorizontal: 14 }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row',  marginTop: 10}}>
          <View style={{  flexDirection: 'row'}}>
          <Text style={styles.lefttextstyle}>联系人:</Text>
          <Text style={styles.contentstyle}>吴亦凡</Text>
          </View>
          <Text style={styles.contentstyle}>17612181311</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' ,  marginTop: 5}}>
          <Text style={styles.lefttextstyle}>地址:</Text>
          <Text style={styles.contentstyle}>长沙市 岳麓区 麓谷街道138号</Text>
        </View>

         <View style={{ flexDirection: 'row', alignItems: 'center',  marginTop: 5}}>
          <Text style={styles.lefttextstyle}>保洁阿姨:</Text>
          <Text style={styles.contentstyle}>13787270612</Text>
        </View>

      </View>
    </TouchableOpacity>
  )

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar title="保洁服务"
          navigation={navigation}
          rightIcon={<Text style={{ color: '#333333' }}>统计</Text>}
          onPress={this.StatisticsButton}
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
  },
  ListViewStyle: {
    marginTop: 10,
  },
  flexstyle: {
    backgroundColor: 'white',
    marginTop: 1,
  },
  lefttextstyle: {
    color: '#777777',
    fontSize: 14,
   
  },
  contentstyle: {
    color: '#444444',
    fontSize: 14,
  }
})