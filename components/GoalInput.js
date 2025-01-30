import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Goal"
          onChangeText={inputGoalHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} color="#6f5a9c" />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} color="#c21737" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 30,
    paddingTop: 100,
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    marginRight: 10,
    backgroundColor: "#e4d0ff",
  },

  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
