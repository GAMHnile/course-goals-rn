import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (goalText) => {
    setEnteredGoal(goalText);
  };
  const addGoalHandler = ()=>{
    props.addHandler(enteredGoal);
    setEnteredGoal("");
    props.onCancel();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <Button title="CANCEL" onPress={props.onCancel} color="red" />
        <Button
          title="ADD"
          onPress={addGoalHandler}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: { width: "80%", padding: 10, borderWidth: 1, marginBottom: 10 },
});

export default GoalInput;
