import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors.js";
import { spacing } from "../utils/sizes.js";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(val) => setSubject(val)}
          label="What would you like to Focus on?"
        />
        <RoundedButton
          title="+"
          size={spacing.xxxl}
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    paddingTop: 1,
  },
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  textInput: {
    paddingTop: 1,
    flex: 1,
    marginRight: spacing.sm,
  },
});
