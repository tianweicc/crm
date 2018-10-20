import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../componment/NavBar';
import Picker from 'react-native-picker';
import InputItem from '../../componment/Card/InputItem';
import ImageCard from '../../componment/Card/ImageCard';

const newDate = new Date();
const curYear = newDate.getFullYear();
const curMonth = newDate.getMonth();

export default class SharingactivitiesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameValue: '',
    };
  }


  formatDate(date, format) {
    var paddNum = function (num) {
      num += "";
      return num.replace(/^(\d)$/, "0$1");
    }
    //指定格式字符
    var cfg = {
      yyyy: date.getFullYear() //年 : 4位
      , yy: date.getFullYear().toString().substring(2)//年 : 2位
      , M: date.getMonth() + 1  //月 : 如果1位的时候不补0
      , MM: paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
      , d: date.getDate()   //日 : 如果1位的时候不补0
      , dd: paddNum(date.getDate())//日 : 如果1位的时候补0
      , hh: date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()  //时
      , mm: date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes() //分
      , ss: date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds() //秒
    }
    format || (format = "yyyy-MM-dd hh:mm:ss");
    return format.replace(/([a-z])(\1)*/ig, function (m) { return cfg[m]; });
  }


  _createDateData() {
    let date = [];
    let timechar = new Date('2018').getTime();
    for (var c = 0; c < 10; c++) {
      timechar += 86400000;
      date.push(this.formatDate(new Date(timechar), 'yyyy/MM/dd'))
    }

    let time24 = [];
    for (var c = 0; c < 24; c++) {
      let string = (c < 10 ? "0" + c : c) + ":00";
      time24.push(string)
    }
    return [date, time24];
  }

  onPressImageItem = () => {
    Picker.init({
      pickerData: this._createDateData(),
      pickerToolBarFontSize: 16,
      pickerFontSize: 16,
      pickerFontColor: [0, 0, 0, 1],
      pickerBg: [255, 255, 255, 1],
      pickerConfirmBtnColor: [106, 181, 41, 1],
      pickerTitleColor: [0, 0, 0, 1],
      pickerCancelBtnColor: [106, 181, 41, 1],
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '时间选择',
      onPickerConfirm: (pickedValue, pickedIndex) => {
        var year;
        var month;
        year = pickedValue[0].substring(0, 4) + '-';

        if (pickedValue[1].length < 3) {
          month = '0' + pickedValue[1].substring(0, 1);
        } else {
          month = pickedValue[1].substring(0, 2);
        }
        this.setState({
          month: year + month,
        });
      },
      onPickerCancel: (pickedValue, pickedIndex) => {

      },
      onPickerSelect: (pickedValue, pickedIndex) => {
        console.log('date', pickedValue, pickedIndex);
      }
    });
    Picker.show();
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
          title="共享活动室会议室预约"
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
            title="所在公司"
            inputValue={this.state.userNameValue}
            onChangeText={this.onChangeUserNameText}
            placeholder="万达房地产有限公司"
          />

          <ImageCard title="预约时间" onPress={this.onPressImageItem} textfont="2018-06-09 14: 00" avatar="" />

          <InputItem
            title="备注"
            inputValue={this.state.userNameValue}
            onChangeText={this.onChangeUserNameText}
            placeholder="消毒服务提前一天预约"
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


