/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// StackNavigator用于实现各个页面间的跳转。TabNavigator切换组件，实现同一页面上不同界面的切换。
import { StackNavigator, TabBarBottom, TabNavigator } from "react-navigation";

import HomeScreen from "./src/pages/home/HomeScreen";// 从HomeScreen页面导入HomeScreen组件
import ServicePage from "./src/pages/service/ServicePage";
import MyScreen from "./src/pages/mine/MyScreen";
import MemberScreen from "./src/pages/mine/MemberScreen";
import CommunityScreen from "./src/pages/community/CommunityScreen";
import TabBarItem from "./src/componment/TabBar/TabBarItem"
import Login from './src/Login';
import Register from './src/Register';
import ServiceOrderView from './src/pages/mine/ServiceOrderView';
import User_DetailsView from './src/pages/mine/User_DetailsView';
import EvaluateView from './src/pages/mine/EvaluateView';
import MessageView from './src/pages/home/Message/MessageView';
import PepeoSelectView from './src/pages/home/PepeoSelectView';
import AdviceView from './src/pages/AdviceView';
import SuperviseView from './src/pages/SuperviseView';
import CleanServiceView from './src/pages/CleanServiceView';
import SelectAdressView from './src/pages/SelectAdressView';
import VisitorView from './src/pages/VisitorView';
import MessageDatileView from './src/pages/home/Message/MessageDatileView';
import LegalAdvisoryServicePage from './src/pages/service/LegalAdvisoryServicePage';
import SharingactivitiesPage from './src/pages/service/SharingactivitiesPage';
import SportsexchangePage from './src/pages/service/SportsexchangePage';
import SportDetailsPage from './src/pages/service/SportDetailsPage';
import ComputerServicePage from './src/pages/service/ComputerServicePage';
import UmbrellaborrowingPage from './src/pages/service/UmbrellaborrowingPage';
import HealthcarePage from './src/pages/service/HealthcarePage';
import DisinfectionServicePage from './src/pages/service/DisinfectionServicePage';
import PeripheralmatchingPage from './src/pages/service/PeripheralmatchingPage';
import VIPvisitPage from './src/pages/service/VIPvisitPage';
import FinancialmanagementPage from './src/pages/service/FinancialmanagementPage';
import SoftwareDevelopmentPage from './src/pages/service/SoftwareDevelopmentPage';
import HousepropertyServicePage from './src/pages/service/HousepropertyServicePage';

export default class MainComponent extends Component {

  render() {

    return (
      
      <Navigator />

    );
  }
}

// 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
const TabRouteConfigs = {

  Home: {// 路由名称
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({

      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={{ uri: 'group111'}}
          selectedImage={{ uri: 'group11'}} />

      ),
    }),
  },
  ServicePage: {
    screen: ServicePage,
    navigationOptions: ({

      tabBarLabel: '服务',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={{ uri: 'group5'}}
          selectedImage={{ uri: 'group55'}} />


      ),

    }),
  },


  CommunityScreen: {
    screen: CommunityScreen,
    navigationOptions: ({
      tabBarLabel: '社区',
      tabBarIcon: ({ focused, tintColor }) => (

        <TabBarItem tintColor={tintColor}
          focused={focused}
          normalImage={{ uri: 'group4'}}
          selectedImage={{ uri: 'group44'}} />

      ),
    }),
  },
  My: {
    screen: MyScreen,
    navigationOptions: ({

      tabBarLabel: '我的',

      tabBarIcon: ({ focused, tintColor }) => (

        <TabBarItem tintColor={tintColor}
          focused={focused}
          normalImage={{ uri: 'group33'}}
          selectedImage={{ uri: 'group3'}} />
      ),
    }),
  }
};


//参数表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等：
const TabNavigatorConfigs = {

  initialRouteName: 'Home',// 初始显示的Tab对应的页面路由名称
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',// 设置选项卡的位置，在顶部或是底部，有'top'与'bottom'可选
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,// 是否懒加载页面
  tabBarOptions: {
    // 在属性TabBarBottom与TabBarTop中有所不同
    activeTintColor: '#4087EE',
    inactiveTintColor: '#000000',
    style: {
      backgroundColor: 'white',
    },

  },


};

const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
const StackRouteConfigs = {
  Tab: { screen: Tab },
  ServiceOrderView: { screen: ServiceOrderView },
  Login: { screen: Login },
  User_DetailsView: { screen: User_DetailsView },
  EvaluateView: { screen: EvaluateView },
  MessageView: { screen: MessageView },
  PepeoSelectView: { screen: PepeoSelectView },
  AdviceView: { screen: AdviceView },
  SuperviseView: { screen: SuperviseView },
  CleanServiceView: { screen: CleanServiceView },
  SelectAdressView: { screen: SelectAdressView },
  VisitorView: { screen: VisitorView },
  MessageDatileView: { screen: MessageDatileView },
  LegalAdvisoryServicePage: { screen: LegalAdvisoryServicePage},
  SharingactivitiesPage: { screen: SharingactivitiesPage},
  SportsexchangePage: { screen: SportsexchangePage},
  SportDetailsPage: {screen: SportDetailsPage},
  ComputerServicePage: {screen: ComputerServicePage},
  UmbrellaborrowingPage: {screen: UmbrellaborrowingPage},
  HealthcarePage: {screen: HealthcarePage},
  DisinfectionServicePage: {screen: DisinfectionServicePage},
  PeripheralmatchingPage: {screen: PeripheralmatchingPage},
  VIPvisitPage: {screen: VIPvisitPage},
  FinancialmanagementPage: {screen: FinancialmanagementPage},
  SoftwareDevelopmentPage: {screen: SoftwareDevelopmentPage},
  HousepropertyServicePage: {screen: HousepropertyServicePage},
  Register: {screen: Register},
};

const StackNavigatorConfigs = {  // 表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
  initialRouteName: 'Login',
  navigationOptions: {
    // title: 'title',
    // headerStyle: { backgroundColor: '#fff' },  // 设置导航头部样式
    // headerTitleStyle: { color: '#333333' },  // 设置导航头部标题样式
    header: null,
    gesturesEnabled: true,
  },
  onTransitionStart: () => {
    console.log('导航栏切换开始')
  },
  onTransitionEnd: () => {
    console.log('导航栏切换结束')
  },
};
// StackNavigator 导航组件，用来实现各个界面跳转
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

