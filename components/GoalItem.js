import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalListView}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
