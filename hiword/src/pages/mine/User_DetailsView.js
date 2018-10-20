import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import OptionCard from '../../componment/Card/OptionCard';
import Line from '../../componment/Line';
import NavBar from '../../componment/NavBar';
import ImageCard from '../../componment/Card/ImageCard';
import InputItem from '../../componment/Card/InputItem';
import SyanImagePicker from 'react-native-syan-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const options = {
   imageCount: 1,          // 最大选择图片数目，默认6
   isCamera: false,         // 是否允许用户在内部拍照，默认true
   isCrop: false,          // 是否允许裁剪，默认false
   isGif: false,           // 是否允许选择GIF，默认false，暂无回调GIF数据
   showCropCircle: false,  // 是否显示圆形裁剪区域，默认false
   showCropFrame: true,    // 是否显示裁剪区域，默认true
   showCropGrid: false     // 是否隐藏裁剪区域网格，默认false
};

export default class User_DetailsView extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      userNameValue:'',
      userInfo: {
        title: '',
        nickName: '',
        name: '',
        mobile: '',
        sex: '女',
        mail: '',
        password: '',
        avatarimage: 'group25'
      }
    };
  }

  componentWillMount () {
    // this.setUserInfo()
  }
  setUserInfo () {
    fetch('http://hermitcrab.vipgz1.idcfengye.com/client/info/1')
      .then(response => {  
         return response.json()
      })
      .then(response => {
        let data = {}
        for(let key in response) {
          if( key === 'sex' ) {
            data[key] = response[key] === 1 ? '男' : '女' 
          }else{
            data[key] = response[key]
          }
          
        }
        this.setState({userInfo: data});
      }).done();
  }

  onChangeUserNameText = text => {
    alert(222)
    this.setState({ userNameValue: text });
  }

  onPressImageItem = () => {
    SyanImagePicker.showImagePicker(options, (err, selectedPhotos) => {
      if (err) {
        // 取消选择
        return;
      }

      this.setState({
        avatarimage: selectedPhotos[0].uri
      });
      // 选择成功，渲染图片
      console.log(JSON.stringify(selectedPhotos))
      // ...
    })
  }

  render() {
    const { navigation } = this.props;
    const { title, nickName, name, mobile, sex, mail, password } = this.state.userInfo
    return (
      <View style={styles.container}>
        <NavBar
          title="个人信息"
          navigation={navigation}
        />
        <KeyboardAwareScrollView>
        <ImageCard title="头像" onPress={this.onPressImageItem} avatar={this.state.avatarimage} />
        <InputItem
          title="个人标题"
          inputValue={title}
          onChangeText={this.onChangeUserNameText}
          placeholder="请输入个人标题及职位"
        />

        <InputItem
          title="名称"
          inputValue={name}
          onChangeText={this.onChangeUserNameText}
          placeholder="请输入姓名"
        />

        <InputItem
          title="性别"
          inputValue={sex}
          onChangeText={this.onChangeUserNameText}
          placeholder="必填"
        />

        <View style={{ height: 10 }}></View>

        <InputItem
          title="邮箱"
          inputValue={mail}
          onChangeText={this.onChangeUserNameText}
          placeholder="请输入邮箱"
        />

        <InputItem
          title="手机号"
          inputValue={mobile}
          onChangeText={this.onChangeUserNameText}
          placeholder="请输入手机号"
        />

        <View style={{ height: 10 }}></View>

        <InputItem
          title="修改密码"
          inputValue={password}
          onChangeText={this.onChangeUserNameText}
          placeholder="必填"
        />
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
})


