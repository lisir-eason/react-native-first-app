/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './js/navigator/AppNavigators';

LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => AppNavigator);
