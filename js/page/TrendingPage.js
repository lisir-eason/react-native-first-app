import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TrendingPage = () => {
  return (
    <View style={styles.container}>
      <Text>TrendingPage</Text>
    </View>
  );
};

export default TrendingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
