import React from 'react'
import {View,TextInput,Button,StyleSheet,Modal,Image} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

  return (
    <Modal visible ={props.visible} animationType="slide">
    <View style={styles.inputContainer}>

        <Image style={styles.image} source={require('../assets/images/goal.png')} />

        <TextInput 
          style={styles.textInput}
          placeholder="Add Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
           
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel} color="#5e0acc"/>
            </View>
            <View style={styles.button}>
                 <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
            </View>
        </View>

      </View>
      </Modal>
  );
}

export default GoalInput;

const styles= StyleSheet.create ({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        paddingBottom: 24,
        padding:16,
        borderBottomColor: 'lightgray',
        backgroundColor:'#05c538' // first page color
      },
      textInput: {
        borderWidth: 1,
        borderColor: 'lightgray',
        backgroundColor:'#eeeeee',
        width: '100%',
        color:'black',
        borderRadius:8,
        padding: 16,
      },

      buttonContainer:{
        marginTop:16,
        flexDirection:'row'
      },

      button:{
        width:100,
        marginHorizontal:8,
      },

      image:{
        width:100,
        height:100,
        margin:20
      }
});