import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const goalAddHandler = (goalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { uid: Math.random().toString(), value: goalText },
    ]);
  };

  const deleteGoalHandler = goalUid =>{
    setGoals((currentGoals)=>{
      return currentGoals.filter(goalObj=> goalObj.uid !== goalUid)
    })
  }
  const closeAddModal = ()=>{
    setIsAddModal(false);
  }
  return (
    <View style={styles.root}>
      <Button title="Add Course Goal" onPress={()=>setIsAddModal(true)} />
      <GoalInput onCancel={closeAddModal} visible={isAddModal} addHandler={goalAddHandler} />
      <View>
        <FlatList
          keyExtractor={(item, i)=>item.uid}
          data={goals}
          renderItem={(goalItem) => <GoalItem uid={goalItem.item.uid} onDelete={deleteGoalHandler} goalObj={goalItem} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { padding: 50 }
});
