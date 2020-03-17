import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View, TextInput,StatusBar,} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"


class Signup extends Component {
  render() {
    
    return (
        <View>
        <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
          <View style={styles.header}>
              <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Icon name="arrowleft" size={30}></Icon>
              </TouchableOpacity>
          </View>
          <Text style={styles.text}>
            Create New Account
          </Text>
          <View style={styles.veiw1}>
            <TextInput 
            placeholder='Full Name' 
            style={styles.inputs} 
            />
             <TextInput 
            placeholder='Phone number' 
            style={styles.inputs} 
            keyboardType = 'numeric'
            />
             <TextInput 
            placeholder='E-mail Address' 
            style={styles.inputs} 
            />
            <TextInput 
            placeholder='Password' 
            secureTextEntry={true} 
            style={styles.inputs}  
            />
          </View>
          <View style={styles.veiw2}>
          <TouchableOpacity style={styles.Loginbut}>
              <Text style={styles.tex1}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          
      </View>
          );
        }
      }
const styles = StyleSheet.create({
    header:{
        height:'10%',
        width:'100%',
        // backgroundColor:'red',

    },
  text:{
    alignSelf:'center',
    color:'#FF5A66',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 15,
  },
  veiw1:{

  },
  veiw2:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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
  inputs:{
    width:350,
    borderRadius: 30,
    borderWidth: 2,
    paddingLeft:30,
    margin:10,
    marginLeft:30,
    fontWeight:'bold',
    borderColor: '#BCBCBC',
  },
  signuptex:{
    textAlign:'right',
    marginRight:30,
    fontWeight:'bold',
    color:'#FF5A66',

  }
});
export default Signup;
