import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StatusBar,
  StyleSheet
} from 'react-native';

import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'

const App = () => {
  
  const [uri,setUri] = useState(DiceOne)
  const [uri1,setUri1] = useState(DiceOne)
  
  const rollit = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    switch (randomNum1) {
      case 1:
        setUri1(DiceOne)        
        break;
      case 2:
        setUri1(DiceTwo)        
        break;
      case 3:
        setUri1(DiceThree)        
        break;
      case 4:
        setUri1(DiceFour)        
        break;
      case 5:
        setUri1(DiceFive)        
        break;
      case 6:
        setUri1(DiceSix)        
        break;  
      default:
        setUri1(DiceSix)
        break;
    }
    switch (randomNum) {
      case 1:
        setUri(DiceOne)        
        break;
      case 2:
        setUri(DiceTwo)        
        break;
      case 3:
        setUri(DiceThree)        
        break;
      case 4:
        setUri(DiceFour)        
        break;
      case 5:
        setUri(DiceFive)        
        break;
      case 6:
        setUri(DiceSix)        
        break;  
      default:
        setUri(DiceSix)
        break;
    }
  }
  return (
    <>
      <StatusBar />
      <View style={styles.container}>    
      <Text style={styles.gamePlayBtn}>Play The Game !!!</Text>    
        <Pressable onPress={rollit}>
        <Image style={styles.image} source={uri}/>
        <Image style={styles.image} source={uri1}/>         
        </Pressable>
        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#222831",
    alignItems:"center",
    justifyContent:"center"
  },
  image:{
    width:200,
    height:200,    
  },
  gamePlayBtn:{
    fontSize:20,
    marginTop:5,
    color:"#F2A365",
    paddingHorizontal:40,
    paddingVertical:10,
    borderColor:"#f566d6",
    borderRadius:5,
    borderWidth:3,
    fontWeight:"bold",
    marginBottom:8
  }
  
});

export default App;
