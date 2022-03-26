import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import PopularPage from './PopularPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import TrendingPage from './TrendingPage';

const Tab = createAppContainer(
  createBottomTabNavigator({
    PopularPage: {
      screen: PopularPage,
      navigationOptions: {
        tabBarLabel: '最热',
        tabBarIcon: ({focused, tintColor}) => (
          <MaterialIcons
            name={'whatshot'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    TrendingPage: {
      screen: TrendingPage,
      navigationOptions: {
        tabBarLabel: '趋势',
        tabBarIcon: ({focused, tintColor}) => (
          <MaterialIcons
            name={'trending-up'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    FavoritePage: {
      screen: FavoritePage,
      navigationOptions: {
        tabBarLabel: '收藏 ',
        tabBarIcon: ({focused, tintColor}) => (
          <MaterialIcons
            name={'favorite'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    MyPage: {
      screen: MyPage,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor}) => (
          <Entypo name={'user'} size={26} style={{color: tintColor}} />
        ),
      },
    },
  }),
);

const HomePage = () => {
  return <Tab />;
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
