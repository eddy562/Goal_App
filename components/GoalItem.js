import React from 'react'
import{StyleSheet,View,Text,Pressable} from 'react-native'; 

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
    <Pressable 
    android_ripple={{color:'red'}} // for android
    onPress={props.onDeleteItem.bind(this,props.id)}
    style={({pressed}) =>pressed && styles.pressedItem } // for apple
    >
  
  <Text style={styles.goalText}>{props.text}</Text>
  
  </Pressable>
  </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({

    goalItem: {
        margin: 8,
        
        borderRadius: 6,
        backgroundColor: "lightgray",
      },
    
      goalText: {
        color: "black",
        padding: 8,
      },
      pressedItem:{
        opacity:0.5,
      }
});