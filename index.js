/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigator from './js/navigator/AppNavigators';

AppRegistry.registerComponent(appName, () => AppNavigator);
