import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SectionList, TextInput } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';

export default class PepeoSelectView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sections: [
        { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
        { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
        { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
        { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" }, { title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
      ]
    };
  }

  renderListHeaderComponent = () => {
    return (
      <View style={styles.listHeaderView}>
        <Image source={{ uri: 'redexpert' }} style={styles.imagestyle} />
        <Text style={styles.contactTitle}>请选择联系人 </Text>
      </View>
    );
  }


  keyExtractor = (item, index) => `${item.id} ${index}`;

  renderSectionHeader = (info) => {
    var txt = info.section.key;
    return <View style={{height: 30, justifyContent: 'center', backgroundColor: '#F4F4F4' }}>
      <Text
      style={{ color: '#444444', fontSize: 14, marginLeft: 15 }}>{txt}</Text>
    </View>
  }

  _renderItem = (info) => {
    var txt = '  ' + info.item.title;
    return <View style={{ height: 56, backgroundColor: 'white', alignItems: 'center', flexDirection: 'row'}}>
      <Image source={{ uri: 'city'}} style={{ width: 40, height: 40, marginLeft: 15}}/>
      <Text style={{textAlignVertical: 'center', color: '#444444', fontSize: 15, marginLeft: 5 }}>{txt}</Text>
    </View>
  }


  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
          title="联系人"
          navigation={navigation}
          rightIcon={<Text style={this.icon}>完成</Text>}
          onPress={this.PhoneListButton}
        />
        <View style={styles.inputView}>
        <Image source={{ uri: 'city'}} style={{ height: 16, width: 16, marginLeft: 10}}/>
        <TextInput
              placeholder="搜索"
              underlineColorAndroid="transparent"
              style={styles.TextInputStyle}
              onChangeText={this.onChangeText}
            />
        </View>
        <SectionList
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this._renderItem}
          sections={this.state.sections}
          ItemSeparatorComponent={() => <Line/>}
          stickySectionHeadersEnabled
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 5,
  },
  listHeaderView: {
    flexDirection: 'row',
    marginTop: 10.5,
    marginLeft: 15,
    marginBottom: 9.5,
    alignItems: 'center',
  },
  imagestyle: {
    height: 16,
    width: 16,
    marginRight: 10,
  },
  contactTitle: {
    lineHeight: 21,
    fontSize: 17,
    color: 'white',
  },
  TextInputStyle: {
    fontSize: 14,
    height: 36,
    color: '#333333',
    paddingLeft: 5,
    flex: 1,
    padding: 0,
  },
  inputView: {
    height: 36,
    marginLeft: 12,
    marginRight: 9,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: device.hairlineWidth,
    borderColor: '#E0E0E0',
    marginTop: 10,
    marginHorizontal: 15,
  },
})


