import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import WriteCircleButton from "../../UI/WriteCircleButton";

function ContentHeader({ navigation }) {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleDeletePress = () => {
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    // 여기에 삭제 동작을 추가할 수 있습니다.
    // 예를 들어, 작성 중인 내용을 초기화하는 등의 동작을 수행할 수 있습니다.
    setDeleteModalVisible(false);
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.contain}>
        <View style={styles.iconBtnWrap}></View>
        <View style={styles.btns}>
          {/* WriteCircleButton 사용 */}
          <WriteCircleButton
            name="delete-forever"
            color="#000000"
            onPress={handleDeletePress}
          />
          <WriteCircleButton name="check" color="#000000" />
        </View>

        {/* 모달 */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isDeleteModalVisible}
          onRequestClose={() => {
            setDeleteModalVisible(false);
          }}
        >
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Text>작성 중인 내용을 삭제하시겠습니까?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleDeleteConfirm}>
                  <Text style={styles.modalButton}>확인</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDeleteCancel}>
                  <Text style={styles.modalButton}>취소</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  modalButton: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default ContentHeader;
