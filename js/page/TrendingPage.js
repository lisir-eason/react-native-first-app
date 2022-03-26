import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import actions from '../action';

const TrendingPage = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>TrendingPage</Text>
      <Button
        title="修改主题"
        onPress={() => {
          dispatch(actions.onThemeChange('orange'));
        }}
      />
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
