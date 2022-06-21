import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
function goalInputHandler(){};

function addGoalHandler(){};

  return (
    
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your Course Goal' />
      <Button title ="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text> List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   
  appContainer:{
    flex:1,
    padding:50,
    paddingHorizontal:16,
  },

  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    //paddingBottom:24,
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'lightgray',

  }, 
  textInput:{
      borderWidth:1,
      borderColor:'lightgray',
      width: '70%',
      marginRight:8,
      padding:8,

  },
  goalsContainer:{

    flex:5,
  }
});
