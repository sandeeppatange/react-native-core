// Purpose: Main file for the app. This is the first file that is run when the app is started.
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function showAddGoalModel() {
    setModelIsVisible(true);
  }

  function hideAddGoalModel() {
    setModelIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModelIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" onPress={showAddGoalModel} />
        <GoalInput
          visible={modelIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={hideAddGoalModel}
        />
        <View style={styles.goalContainer}>
          // FlatList is used to display a list of items. It is more efficient
          than ScrollView. It only renders the items that are visible on the
          screen.
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              //console.log(itemData.index);
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 16,
  },
});
