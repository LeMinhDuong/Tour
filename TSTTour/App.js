/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import NavScreen from './screens/Nav';
import ListScreen from './screens/List';
import { createAppContainer,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';

const AppNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Nav: NavScreen,
    List: ListScreen,
  },
  {
    initialRouteName: 'Home',
    /* headerLayoutPreset: 'center', */
    contentComponent: (props) => <View style={{alignItems:'center', justifyContent: 'center'}}><DrawerItems {...props} /></View>,
    drawerWidth: Dimensions.get('window').width-130,
    defaultNavigationOptions: {
      headerStyle: {
        //backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
const AppContainer = createAppContainer(AppNavigator);
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(Dimensions.get('window').width);
    return <AppContainer />;
  }
}

export default App;
