import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigatorUtils from '../navigator/NavigatorUtils';

const WelcomePage = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // 跳转到首页
      NavigatorUtils.resetToHomePage(navigation);
    }, 2000);

    return () => {
      timer && clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text>WelcomePage</Text>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
