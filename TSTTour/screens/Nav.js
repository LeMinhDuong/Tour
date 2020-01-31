import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity 
} from 'react-native';
import { Button } from 'react-native-elements';

class NavScreen extends React.Component {
    static navigationOptions = {
        title: 'Nav',
        headerShown: false
    }
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <View
            ><Text>Menu</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
        flex: 1
    }
});

export default NavScreen;