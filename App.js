import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import {Audio} from 'expo-av'


class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <Button title="Sound Button" color="red" onPress={this.playSound} />
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
            <View style={{width:200 , height:100 , marginTop:80}}>
        <Button title="sound1" color="red" onPress={() => Alert.alert('Play Sound 1')}/>
        </View>

        <View style={{width:200 , height:100 , marginTop:80, marginLeft:150}}>
        <Button title="sound2" color="blue" onPress={() => Alert.alert('Play Sound 2')}/>
        </View>
        
        <View style={{width:180 , height:100 , marginTop:20}}>
        <Button title="sound3" color="purple" onPress={() => Alert.alert('Play Sound 3')}/>
        </View>

        
        <View style={{width:200 , height:100 , marginTop:20, marginLeft:80, marginRight:80}}>
        <Button title="sound4" color="green" onPress={() => Alert.alert('Play Sound 4')}/>
        </View>
      </View>
    );
  }
}

