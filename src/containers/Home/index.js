import React, { Component } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, TextInput ,StatusBar,} from 'react-native';



class App extends Component {
  render() {

    return (
      <View style={styles.main}>
        <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
        <Text style={styles.text}>
          Sign In
          </Text>
        <View style={styles.veiw1}>
          <TextInput
            placeholder='E-mail or Phone number'
            style={styles.inputs}
          />
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            style={styles.inputs}
          />
        </View>
        <View style={styles.view3}>
          <Text>
            Already Have an Account?
          </Text>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Rohail')}>
          <Text style={styles.signuptex}>
              Sign Up
          </Text>
          </TouchableOpacity>

        </View>
        {/* <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Rohail')}>
            <Text style={styles.signuptex} >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.veiw2}>
          <TouchableOpacity style={styles.Loginbut}>
            <Text style={styles.tex1}>
              Log In
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main:{
      marginTop:100,
  },
  
  text: {
    color: '#FF5A66',
    fontSize: 45,
    fontWeight: 'bold',
    margin: 15,
    alignSelf:'center',
  },
  veiw1: {

  },
  veiw2: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  Loginbut: {
    margin: 10,
    borderRadius: 30,
    backgroundColor: '#FF5A66',
    width: 250,
    height: 40,
    justifyContent: 'center',
  },
  tex1: {
    fontSize: 21,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
  view3: {
    width: '80%',
    height: '10%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
  },
  inputs: {
    width: 350,
    borderRadius: 30,
    borderWidth: 2,
    paddingLeft: 30,
    margin: 10,
    marginLeft: 30,
    fontWeight: 'bold',
    borderColor: '#BCBCBC',
  },
  signuptex: {
    textAlign: 'right',
    // marginBottom: 10 ,
    fontWeight: 'bold',
    color: '#FF5A66',
    fontSize: 18,

  }
});

export default App;
