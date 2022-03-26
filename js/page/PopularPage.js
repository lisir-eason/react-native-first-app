import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, NavigationEvents} from 'react-navigation';

const PopularPage = () => {
  const [tabNames, setTabNames] = useState([
    'Java',
    'JSX',
    'IOS',
    'Javascript',
    'Python',
    'GO',
    'C++',
  ]);

  const _generateTabs = () => {
    const tabs = {};
    tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: PopularTab,
        navigationOptions: {
          title: item,
        },
      };
    });
    return tabs;
  };

  const TabNavigator = createAppContainer(
    createMaterialTopTabNavigator(_generateTabs(), {
      tabBarOptions: {
        tabStyle: styles.tabStyle,
        upperCaseLabel: false,
        scrollEnabled: true,
        style: {
          // backgroundColor: '#a67',
        },
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,
      },
    }),
  );

  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
};

const PopularTab = () => {
  return (
    <View>
      <Text>PopularTab</Text>
    </View>
  );
};

export default PopularPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 33,
  },
  tabStyle: {
    minWidth: 50,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
});
