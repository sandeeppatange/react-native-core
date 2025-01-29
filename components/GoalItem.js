import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalListView}>
      <Pressable
        android_ripple={{ color: "#797979" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && { backgroundColor: "#797979" }} // This presed logic is required for only IOS. for android android_ripple takes care of it.
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
    backgroundColor: "#f0f0f0",
    borderColor: "#cccccc",
    borderWidth: 2,
    borderRadius: 8,
  },
  goalText: {
    fontWeight: "bold",
    padding: 10,
  },
});
