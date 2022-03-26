import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {useSelector} from 'react-redux';

import PopularPageTab from '../page/PopularPage';
import FavoritePageTab from '../page/FavoritePage';
import MyPageTab from '../page/MyPage';
import TrendingPageTab from '../page/TrendingPage';

const Tabs = {
  PopularPage: {
    screen: PopularPageTab,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({focused, tintColor}) => (
        <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  TrendingPage: {
    screen: TrendingPageTab,
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
    screen: FavoritePageTab,
    navigationOptions: {
      tabBarLabel: '收藏 ',
      tabBarIcon: ({focused, tintColor}) => (
        <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  MyPage: {
    screen: MyPageTab,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => (
        <Entypo name={'user'} size={26} style={{color: tintColor}} />
      ),
    },
  },
};

const CustomComponent = props => {
  const theme = useSelector(state => state.themeReducer.theme);
  const {activeTintColor, navigation} = props;
  // const [theme, setTheme] = useState({
  //   tintColor: activeTintColor,
  //   updateTime: new Date().getTime(),
  // });
  // const {routes, index} = navigation.state;
  // if (routes[index].params) {
  //   const newTheme = routes[index].params.theme;
  //   if (newTheme && newTheme.updateTime > theme.updateTime) {
  //     setTheme(newTheme);
  //   }
  // }
  return <BottomTabBar {...props} activeTintColor={theme} />;
};

const DynamicTabNavigator = ({}) => {
  let Tab = null;
  if (Tab) {
    return Tab;
  }
  const {PopularPage, FavoritePage, MyPage, TrendingPage} = Tabs;
  // PopularPage.navigationOptions.tabBarLabel = '可以';
  const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
  Tab = createAppContainer(
    createBottomTabNavigator(tabs, {
      tabBarComponent: CustomComponent,
    }),
  );

  return <Tab />;
};

export default DynamicTabNavigator;
