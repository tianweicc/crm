import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import NavBar from './componment/NavBar/index';
import ImageInput from './componment/TextInput/ImageInput';

export default class Register extends Component {
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
    navigation.navigate('Login')
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
        <NavBar
          title=""
          navigation={navigation}
          rightIcon={<Text style={styles.topRightIcon}>登录</Text>}
          onPress={this.Loginbut}
        />
        <Text style={{ fontSize: 22, color: '#444444', marginLeft: 15, marginTop: 15, marginBottom: 15 }}>注册新账号</Text>

        <TextInput
          style={styles.input}
          placeholder="手机号"
          onChangeText={(text) => this.setState({ text })} 
          underlineColorAndroid="transparent"
          />


        <ImageInput
          style={styles.imageInput}
          placeholder="请输入验证码"
          secureTextEntry
          iconContainerStyle={{ width: 0 }}
          showRightButton={showRightButton}
          rightButtonTitle={rightButtonTitle}
          value={validationcode}
          onPress={this.reacquireCode}
          onChangeText={this.onChangevalidationcode}
          disabledRightButton={disabledRightButton}
          timeout={timeout}
          keyboardType="numeric"
        />
        
        <TextInput
          style={styles.input}
          placeholder="设置密码"
          onChangeText={(text) => this.setState({ text })} 
          underlineColorAndroid="transparent"
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
    marginLeft: 8,
    height: 55,
  },
  topRightIcon: {
    color: '#4087EE'
  }
})