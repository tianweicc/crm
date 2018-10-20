import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import OptionCard from '../../componment/Card/OptionCard';
import Line from '../../componment/Line';
import ScrollableTabView, {ScrollableTabBar,DefaultTabBar} from 'react-native-scrollable-tab-view';
import Star_activity from './Star_activity';
import End_activity from './End_activity';
import NavBar from '../../componment/NavBar';

export default class ServiceOrderView extends Component {


  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
       <NavBar
          title="我的服务订单"
          navigation={navigation}
          backgroundColor="#4087EE" 
          titlestyle={'white'}
          leftButtonIcon = {<Text style={styles.icon}>&#xe636;</Text>}
        />
           <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar/>}
                    tabBarUnderlineStyle={{backgroundColor:'#4087EE',height:1.5}}
                    tabBarActiveTextColor='#4087EE'
                    tabBarBackgroundColor='#fff'
                    tabBarTextStyle={{fontSize:15,color:'#666',marginTop:10}}
                    style={{height:30}}
                    tabBarInactiveTextColor='#333333'
                >
                    <Star_activity
                        tabLabel='我发起的'
                        navigation={navigation}
                    />

                    <End_activity
                        tabLabel='已结束的'
                        navigation={navigation}

                    />

                </ScrollableTabView>
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
    fontSize: 22,
    color: 'white',
  },
  iconstyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    fontFamily: 'iconfont',
    fontSize: 18,
    color: 'white',
  },
})


