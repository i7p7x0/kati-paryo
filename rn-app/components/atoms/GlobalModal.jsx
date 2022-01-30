import React from "react";
import { Modal, StyleSheet } from "react-native";

const GlobalModal = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide" presentationStyle="fullScreen">
      {props.children}
    </Modal>
  );
};

export default GlobalModal;
