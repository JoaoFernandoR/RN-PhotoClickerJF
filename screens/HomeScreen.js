import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function HomeScreen(props) {

    let photo = props.navigation.getParam('data', 'empty')

    console.log(photo)

    return (
    <View style={estilos.container}>
        <Image 
            resizeMode = 'center'
            style = {estilos.imageHolder}
            source = {
                photo === 'empty' ? require("../assets/email.png") : photo
            } 
        />
        <TouchableOpacity style={estilos.buttonView} onPress={() => props.navigation.navigate("Camera")}>
            <Text style={estilos.buttonText}>
              <Icon name='camera-retro' color='#b83227' size={30} />
            </Text>
        </TouchableOpacity>
    </View>
  )
}


const estilos = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor : '#BB2CD9'
  },
  buttonView : {
    padding : 10,
    backgroundColor : '#c1c1c1',
    borderWidth : 2,
    borderRadius : 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText : {
    fontSize: 20,
    color : '#FFF'
  },
  imageHolder : {
    alignSelf : 'center',
    height : 400,
    margin : 10,
  }
})