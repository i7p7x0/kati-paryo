import React from "react";
import { Modal, StyleSheet } from "react-native";

const GlobalModal = (props) => {
  <Modal visible={props.visible} animationType="slide">
    {props.children}
  </Modal>;
};

export default GlobalModal;
