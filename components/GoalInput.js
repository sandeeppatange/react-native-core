import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function inputGoalHandler(enteredText) {
  setEnteredGoal(enteredText);
}

function addGoalHandler() {
  setGoals((currentGoals) => [
    ...currentGoals,
    { text: enteredGoal, id: Math.random().toString() },
  ]);
  setEnteredGoal("");
}

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function inputGoalHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Goal"
        onChangeText={inputGoalHandler}
        value={enteredGoalText}
      />
      <Button title="ADD" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 2,
  },

  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 10,
    width: "70%",
    marginRight: 10,
  },
});
