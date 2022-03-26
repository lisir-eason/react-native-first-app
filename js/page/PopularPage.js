import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PopularPage = () => {
  return (
    <View style={styles.container}>
      <Text>PopularPage</Text>
    </View>
  );
};

export default PopularPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
