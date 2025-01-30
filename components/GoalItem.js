import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalListView}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem} // This presed logic is required for only IOS. for android android_ripple takes care of it.
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalListView: {
    marginVertical: 5,
    backgroundColor: "#5e0acc",
    borderColor: "#cccccc",
    borderWidth: 2,
    borderRadius: 8,
  },
  goalText: {
    fontWeight: "bold",
    padding: 10,
    color: "white",
  },

  pressedItem: {
    opacity: 0.5,
  },
});
