// Purpose: Main file for the app. This is the first file that is run when the app is started.
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);
  function inputGoalHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    setGoals([...goals, enteredGoal]);
    setEnteredGoal("");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Goal"
          onChangeText={inputGoalHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <ScrollView>
          {goals.map((goal) => (
            <View key={goal} style={styles.goalListView}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
          ;
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 16,
  },

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

  goalContainer: {
    flex: 5,
  },

  goalListView: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderColor: "#cccccc",
    borderWidth: 2,
    borderRadius: 8,
  },
  goalText: {
    fontWeight: "bold",
  },
});
