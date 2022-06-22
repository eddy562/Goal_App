// 2:20:57 https://www.youtube.com/watch?v=VozPNrt-LfE&ab_channel=Academind

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {StyleSheet,View,Button,FlatList,} from "react-native";


import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [modalIsVisible, setModalIsVisible]= useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){

    setModalIsVisible(true);

  }
function endAddGoalhandler(){
  setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText,id:Math.random().toString()},
    ]);
    endAddGoalhandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals)=> {
      return currentCourseGoals.filter((goals)=> goals.id !== id);

    });
  }

  return (
    <>
   <StatusBar style="auto"/>
    <View style={styles.appContainer}>
      <Button title ='Add New Goal' color="#5e0acc" 
      onPress={startAddGoalHandler}/>

      <GoalInput visible={modalIsVisible} 
      onAddGoal={addGoalHandler}
      onCancel={endAddGoalhandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            itemData.index
        return <GoalItem text={itemData.item.text} 
        id={itemData.item.id}
        onDeleteItem={deleteGoalHandler}/>;
          }}
          keyExtractor={(item,index)=>{
            return item.id;
          } }
          alwaysBounceHorizontal={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor:'#05c538' // 2nd page color
  },

  
  goalsContainer: {
    flex: 5,
  },
  
});
