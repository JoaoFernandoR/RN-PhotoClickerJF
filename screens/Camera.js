import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default class Camera extends PureComponent {

  state = {
    temPermissaoCamera : null,
    type : RNCamera.Constants.Type.back,
    lanterna : RNCamera.Constants.FlashMode.off
  }


  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          style={styles.preview}
          type={this.state.type}
          flashMode={this.state.lanterna}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> <Icon name='camera' size={35} /> </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.ChangeCamera} style={styles.capture}>
            <Text style={{ fontSize: 10 }}> Change </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.ligarLanterna} style={styles.capture}>
            { (this.state.lanterna === RNCamera.Constants.FlashMode.on) ?
              <Ionicon name='ios-flash-off' size={30} /> :
              <Ionicon name='ios-flash' size={30} />
              }
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  ChangeCamera = () => {
    if(this.state.type === RNCamera.Constants.Type.back )
    this.setState({ type : RNCamera.Constants.Type.front })
    else this.setState({ type : RNCamera.Constants.Type.back })
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      // console.log(data.uri);
      this.props.navigation.navigate("Home", {data : data})
    }
  };

  ligarLanterna = () => {
    if(this.state.lanterna === RNCamera.Constants.FlashMode.off )
    this.setState({ lanterna : RNCamera.Constants.FlashMode.on })
    else this.setState({ lanterna : RNCamera.Constants.FlashMode.off })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});