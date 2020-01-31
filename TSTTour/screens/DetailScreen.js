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

class DetailScreen extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Detail',
        headerTitleAlign: 'center',
        headerLeft: () => <Button title='Menu' onPress={() => navigation.navigate('Nav')} />
    });

    constructor(props) {
      super(props);
    }
    gotoHome() {
        this.props.navigation.navigate('Home');
    }
    
    render() {
        return (
            <View style={styles.body}><TouchableOpacity onPress={() => this.gotoHome()}><Text>Detail</Text></TouchableOpacity></View>
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

export default DetailScreen;