import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import WriteCircleButton from "../../UI/WriteCircleButton";

function ContentHeader({ navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.contain}>
        <View style={styles.iconBtnWrap}>
        </View>
        <View style={styles.btns}>
          <WriteCircleButton name="delete-forever" color="#000000"
          />
          <WriteCircleButton name="check" color="#000000" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contain: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default ContentHeader;
