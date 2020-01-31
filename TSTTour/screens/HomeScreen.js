import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground 
} from 'react-native';
import { Header } from 'react-native-elements';
//import {Ionicons} from ' @expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
class HomeScreen extends React.Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        //drawerLabel: 'home',
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24 }} />
        ),
    });

    constructor(props) {
      super(props);
    }
    gotoDetail = () => {
        this.props.navigation.navigate('Detail');
    }
    render() {
        
        return (
            
            <View style={styles.body}>
                <Header
                //leftComponent={{ icon: 'menu', color: '#fff' }}
                leftComponent= {() => <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}><Icon name="home" style={{ fontSize: 24, color: '#fff' }} /></TouchableOpacity>}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                //rightComponent= {() => <Text>Text</Text>}
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                    marginTop:0,
                    paddingTop: 0,
                    margin:0,
                    padding:0,
                    height: 50,
                  }}
            />
            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}><Text>Menu</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}><Text>Detail</Text></TouchableOpacity>
            <View style={{flexDirection:'row',  justifyContent:'center'}}>
                <View  style={{justifyContent:'center', width: '50%'}}>
                <Image style={{width: 100, height: 100, justifyContent:'center', margin: 20}} source={{uri: 'https://www.saigontourist.net/uploads/destination/TrongNuoc/DaNang/Dragon-River-Bridge_676759177.jpg'}} />
                </View>
                <Image style={{width: 100, height: 100, justifyContent:'center', margin: 20}} source={{uri: 'https://www.saigontourist.net/uploads/destination/NuocNgoai/HanQuoc/Hanbok-in-Gyeongbokgung_328303565.jpg'}} />
                
            </View>
            <View  style={{flexDirection:'row',justifyContent:'center'}}>
                <Image style={{width: 100, height: 100, alignItems:'center'}} source={{uri: 'https://www.saigontourist.net/uploads/destination/TrongNuoc/DaNang/Dragon-River-Bridge_676759177.jpg'}} />
            </View>
            </View>
            
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
export default HomeScreen;