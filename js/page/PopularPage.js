import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const PopularPage = () => {
  const TabNavigator = createAppContainer(
    createMaterialTopTabNavigator({
      PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab1',
        },
      },
      PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab2',
        },
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
    marginTop: 30,
  },
});
