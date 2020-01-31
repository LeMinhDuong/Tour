import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
    Linking,
    
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import React from 'react';  
  import { WebView } from 'react-native-webview';  
  const axios = require('axios');
  const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
const abortController = new AbortController();
  class ListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          //dataSource : []
          isLoading: true
        }
    }
    componentDidMount(){
      /* var request = new XMLHttpRequest();
      request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
          return;
        }

        if (request.status === 200) {
          console.log('success', request.responseText);
        } else {
          console.warn('error1');
        }
      };

      request.open('GET', 'http://apiapp.eu5.net/list.php');
      request.send(); */
      /* axios.get('http://apiapp.eu5.net/list.php')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      }); */
      dt = [];
        fetch('http://apiapp.eu5.net/list.php')
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson.dt);
      //return responseJson.dt;
      //if(responseJson.length  > 0) {
        dt = responseJson.dt;
      this.setState({
        isLoading: false,
        dataSource: dt,
      }, function(){

      });
      //} else {
      //  alert('not found')
      //}
      
      
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
    return;
    }
    render() {
       //this.getMoviesFromApi();
        //let res = this.state.dataSource;
        //console.log(res);
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <Text>Loading...</Text>
            </View>
          )
        }
        if(!this.state.isLoading){
          //console.log(res[0].image_url.toString());
        }

        return (<View><Text>Test</Text>
       
        <FlatList
          onEndReached={this._onEndReached.bind(this)}
          onEndReachedThreshold={5}
          data = {this.state.dataSource}
          renderItem = {
            ({item}) => (<View>
              <Icon name="rocket" size={30} color="#900" />
              <TouchableOpacity onPress={() => Linking.openURL('http://localhost:8081/debugger-ui/')}><Text >Click Here!</Text></TouchableOpacity>
              <Image style={{width: imageWidth, height: 100, marginBottom: 5}} source={{uri: item.image_url}}/></View>)
          }
          ListFooterComponent= {() => <View style={{height: 200}}><Text >Load More....</Text><Icon name="spinner" size={30} color="#900" /></View>}
          style={{margin: 5, padding: 5, marginBottom: 10, borderColor: '#000', borderRadius: 5}}
        />
        
        </View>);
    }

    
    _onEndReached() {
      fetch('http://apiapp.eu5.net/list.php', {signal: abortController.signal,})
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson.dt);
      //return responseJson.dt;
      //if(responseJson.length  > 0) {
      dt = this.state.dataSource;
      dt = dt.concat(responseJson.dt);
      this.setState({
        isLoading: false,
        dataSource: dt,
      }, function(){

      });
    //} else {
     //   alert('not found')
     // }
     return () => {
      abortController.abort();
    };
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
    
    //return;
    }
  }
  export default ListScreen;