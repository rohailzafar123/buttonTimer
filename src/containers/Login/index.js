import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View,StatusBar,} from 'react-native';


class App extends Component {
  render() {

    return (
      <View>
        <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
          <Text style={styles.sayhello}>
            Say Hello to your New app
          </Text>
          <View style={styles.view2}> 
            <TouchableOpacity 
            style={styles.Loginbut}
            onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text style={styles.tex1}>
                Log In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signinbut}>
              <Text style={styles.tex2}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
      </View>
          );
        }
      }
const styles = StyleSheet.create({
  sayhello:{
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: '50%',
    fontSize:38,
    fontWeight: '700',
    color: '#FF5A66',
    marginBottom:40,
  },
  view2:{
    justifyContent:'center',
    alignItems: 'center',
  },
  Loginbut:{
    margin:10,
    borderRadius:30,
    backgroundColor:'#FF5A66',
    width:250,
    height:40,
    justifyContent: 'center',
  },
  tex1:{
    fontSize:21,
    textAlign:'center',
    color:'white',
    fontWeight:'700',
  },
  signinbut:{
    justifyContent:'center',
    width:250,
    height:40,
    borderRadius:30,
    borderWidth:2,
    borderColor:'#FF5A66',
  },
  tex2:{
    textAlign:'center',
    fontSize:19,
    color:'#FF5A66',
    fontWeight:'700',

  },
});

export default App;
