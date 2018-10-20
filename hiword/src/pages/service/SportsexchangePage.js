import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';

export default class SportsexchangePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['a', 'b', 'c', 'd', 'e']
    };
  }

  jionTeam = () =>{
    const {navigation} = this.props;
    navigation.navigate('SportDetailsPage')
  }
  keyExtractor = (item, index) => `${item.id} ${index}`;

  renderItem = info => (
    <TouchableOpacity onPress={() => this.conversation(info)} style={styles.flexstyle} activeOpacity={0.8}>
      <View style={{ height: 210, marginHorizontal: 14 }}>

        <View style={{ height: 30, justifyContent: 'center', marginTop: 5 }}>
          <Text style={styles.textstyle}>篮球赛</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Text style={styles.lefttextstyle}>时        间:</Text>
          <Text style={styles.contentstyle}>2018-01-01</Text>
          <Text style={styles.contentstyle}>18:00</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
          <Text style={styles.lefttextstyle}>行程安排:</Text>
          <Text style={styles.contentstyle}>当天下午18：00在大厦楼下集合</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
          <Text style={styles.lefttextstyle}>地        址:</Text>
          <Text style={styles.contentstyle}>贺龙体育馆</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
          <Text style={styles.lefttextstyle}>参赛人数:</Text>
          <Text style={styles.contentstyle}>20人</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
          <Text style={styles.lefttextstyle}>啦啦队:    </Text>
          <Text style={styles.contentstyle}>人数不限</Text>
        </View>

        <Line />

        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <Text style={{ fontSize: 12, color: '#777777'}}>已加入(5)</Text>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 80, backgroundColor: '#A1B4DA', height: 30, borderRadius: 8, marginLeft: 20 }} onPress={this.jionTeam}>
            <Text style={{ fontSize: 14, color: 'white' }}>加入</Text>
          </TouchableOpacity>
        </View>

      </View>
    </TouchableOpacity>
  )

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          navigation={navigation}
          title="运动交流"
        />
        <View style={{ height: 10 }}></View>

        <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            data={this.state.data}
            contentContainerStyle={styles.ListViewStyle}
            removeClippedSubviews={false}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textstyle: {
    fontSize: 18,
    color: '#444444',
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
    marginLeft: 15,
  }
})


