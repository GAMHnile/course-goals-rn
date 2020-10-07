import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => (
  <TouchableOpacity onPress={props.onDelete.bind(this, props.uid)}>
    <View style={styles.goalItem}>
      <Text>{props.goalObj.item.value}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    backgroundColor: "#ccc",
    padding: 10,
    marginVertical: 10,
  },
});

export default GoalItem;
