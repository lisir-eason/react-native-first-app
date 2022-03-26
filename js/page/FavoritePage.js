import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoritePage = () => {
  return (
    <View style={styles.container}>
      <Text>FavoritePage</Text>
    </View>
  );
};

export default FavoritePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
