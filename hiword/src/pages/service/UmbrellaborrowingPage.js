import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';
import InputItem from '../../componment/Card/InputItem';
import ImageCard from '../../componment/Card/ImageCard';

export default class UmbrellaborrowingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameValue: '',
    };
  }

  onChangeUserNameText = text => {
    this.setState({ userNameValue: text });
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar
        navigation={navigation}
          title="雨伞借用服务"
        />
        <View style={{ height: 10 }}></View>
        <ScrollView>

          <InputItem
            title="预约楼层"
            inputValue={this.state.userNameValue}
            onChangeText={this.onChangeUserNameText}
            placeholder="请输入楼层"
          />

          <InputItem
            title="联系电话"
            inputValue={this.state.userNameValue}
            onChangeText={this.onChangeUserNameText}
            placeholder="137-8727-0612"
          />

           <InputItem
            title="所在公司"
            inputValue={this.state.userNameValue}
            onChangeText={this.onChangeUserNameText}
            placeholder="万达房地产有限公司"
          />

          <InputItem
            title="备注"
            inputValue={this.state.userNameValue}
            onChangeText={this.onChangeUserNameText}
            placeholder="雨伞需要交纳三十元押金至前台"
          />



        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textstyle: {
    fontSize: 16,
    color: 'white',
  }
})


