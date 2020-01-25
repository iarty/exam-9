import React from "react";
import { Modal, Text, View, Alert, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "native-base";

const ArtyModal = () => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >

      </Modal>
    </View>
  );
};

export default ArtyModal;
