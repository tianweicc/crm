import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import device from './componment/device';
import ImageInput from './componment/TextInput/ImageInput';

export default class Login extends Component {
  static defaultProps = {
    showRightButton: true,
    phoneValue: '',
    passwordValue: '',
    disabledRightButton: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: '',
      password1: '',
      password2: '',
      validationcode: '',
      timeout: 0,
      six: false,
    };
    this.isRegister = false;
  }

  onChangePhoneText = (text) => {
    if (text && text.length > 13) {
      return;
    }
    const phone = formatPhone(text);
    this.setState({ phoneValue: phone });
    this.state.phonenumber = formatStrWithWhitespace(phone);
  }

  reacquireCode = () => {
    // if (this.state.phonenumber == '') {
    //   Toast.info('请输入手机号');
    //   return;
    // }
    data = {
      mobile: this.state.phonenumber,
    };
    let time = 60;
    this.setState({ disabledRightButton: true });
    this.codeTimer = setInterval(() => {
      if (time < 1) {
        this.setState({ timeout: 0, disabledRightButton: false });
        clearInterval(this.codeTimer);
        this.codeTimer = null;
        return;
      }
      time -= 1;
      this.setState({ timeout: time });
    }, 1000);
  }

  Loginbut = () => {
    const { navigation } = this.props;
    navigation.navigate('Tab')
  }

  Registerbut = () => {
    const { navigation } = this.props;
    navigation.navigate('Register')
  }
  render() {
    const { navigation } = this.props;
    const { showRightButton } = this.props;
    const {
      phoneValue, password1, password2, validationcode, timeout, disabledRightButton,
    } = this.state;
    const rightButtonTitle = timeout == 0 ? '获取验证码' : '重新获取';
    return (
      <View style={styles.container}>


        <Image style={{ width: 70, height: 70, marginTop: 100, marginBottom: 50 }} source={{ uri: 'group25' }} />

        <ImageInput
          style={styles.imageInput}
          icon={<Text style={styles.icon}>&#xe64c;</Text>}
          placeholder="请输入6-20位密码"
          value={password1}
          onChangeText={this.onChangepassword1}
           />

        <ImageInput
          style={styles.imageInput}
          icon={<Text style={styles.icon}>&#xe62c;</Text>}
          placeholder="请输入验证码"
          secureTextEntry
          showRightButton={showRightButton}
          rightButtonTitle={rightButtonTitle}
          value={validationcode}
          onPress={this.reacquireCode}
          onChangeText={this.onChangevalidationcode}
          disabledRightButton={disabledRightButton}
          timeout={timeout}
          keyboardType="numeric"
        />

        <TouchableOpacity style={{borderRadius: 20, width:device.width - 76, marginHorizontal: 38, alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: '#4087EE', marginTop: 48}} onPress={this.Loginbut}>
          <Text style={{ fontSize: 14, color: 'white'}}>登录</Text>
        </TouchableOpacity>

         <TouchableOpacity style={{ position: 'absolute', bottom: 0, height: 45, width: device.width, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} onPress={this.Registerbut}>
          <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#4087EE', marginRight: 5}}></View>
          <Text style={[styles.textstyle, { color: '#818181', marginRight: 5}]}>忘记密码?</Text>
          <Text style={styles.textstyle}>立即注册</Text>
          <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#4087EE', marginLeft: 5}}></View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  flex: {
    flex: 1,
    marginTop: 5,
  },
  input: {
    height: 55,
    marginLeft: 10,
    paddingLeft: 5,
    borderColor: '#ccc',
    borderRadius: 4,
    borderBottomWidth: 1,
    color: '#C8C8C8',
    fontSize: 16,
  },
  imageInput: {
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    marginHorizontal: 40,
    height: 55,
  },

  icon: {
    fontSize: 14,
    color: '#686868',
    fontFamily: 'iconfont',
    marginRight: 5,
  },
  textstyle: {
    fontSize: 12,
    color: '#4087EE',
  }
})