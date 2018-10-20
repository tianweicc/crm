import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import OptionCard from '../../componment/Card/OptionCard';
import Line from '../../componment/Line';

export default class MyScreen extends Component {
  constructor(props) {
    super(props)    
    this.state = {
      userInfo: {
        title: '',
        nickName: ''
      }
    };
  }
  componentWillMount () {
    this.setUserInfo()
  }
  setUserInfo () {
    fetch('http://hermitcrab.vipgz1.idcfengye.com/client/info/1')
      .then(response => {  
         return response.json()
      })
      .then(response => {
        this.setState({userInfo: response});
      }).done();
  }

  // 个人详情
  userButton = () => {
    const { navigation} = this.props;
    navigation.navigate('User_DetailsView')
  }

  render() {
    const { userInfo } = this.props
    return (
      <View style={styles.container }>
        <TouchableOpacity style={{ height: 128, justifyContent: 'center', backgroundColor: '#4087EE' }} onPress={this.userButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
            <Image source={{ uri: 'group25' }} style={styles.iconstyle} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.textStyle}>{this.state.userInfo.nickName}</Text>
              <Text style={[styles.textStyle, { marginTop: 5, fontSize: 11 }]}>{this.state.userInfo.title}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <OptionCard
          title="设置"
          onPress={this.userButton}
          urlicon="group9"
          friend={false}
          rightView
        />

        <View style={{ height: 10, backgroundColor: '#F4F4F4' }}></View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
  },
  iconstyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
})


