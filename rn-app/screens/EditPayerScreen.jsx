import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  ScrollView,
  Keyboard,
} from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
// CUSTOM COMPONENTS

import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import GlobalTextInput from "../components/atoms/GlobalTextInput";
import GlobalModal from "../components/atoms/GlobalModal";
import EditPlayerBillADjustment from "../components/molecules/edit-payer/EditPayerBillAdjustment";
import GlobalButton from "../components/atoms/GlobalButton";
import ColorsCollection from "../constants/ColorsCollection";

const EditPayerScreen = (props) => {
  const billPayersNonAdjusted = useSelector((state) => state.payers);
  const { payerId } = props.route.params;

  const [payerTypes, setPayerTypes] = useState({
    editedPayer: billPayersNonAdjusted.find((editedPayer) => {
      return editedPayer.payerId === payerId;
    }),
    otherPayers: billPayersNonAdjusted.filter((filteredPayers) => {
      return filteredPayers.payerId !== payerId;
    }),
    adjustmentPayer: "",
  });

  const [modalState, setModalState] = useState(false);

  const handleAdjustBillPress = () => {
    setModalState(true);
  };

  const handleSelectAdjustmentPayer = (id) => {
    setPayerTypes((prevValue) => {
      return {
        editedPayer: prevValue.editedPayer,
        otherPayers: prevValue.otherPayers,
        adjustmentPayer: billPayersNonAdjusted.find((editedPayer) => {
          return editedPayer.payerId === id;
        }),
      };
    });
    setModalState(false);
  };

  const handleChangeText = (text) => {
    let newName = text;

    const newEditedPayer = {
      payerAmount: payerTypes.editedPayer.payerAmount,
      payerId: payerTypes.editedPayer.payerId,
      payerName: newName,
      payerPayingPercent: payerTypes.editedPayer.payerPayingPercent,
    };
    console.log(newEditedPayer);

    setPayerTypes((prevValue) => {
      return {
        editedPayer: newEditedPayer,
        otherPayers: prevValue.otherPayers,
        adjustmentPayer: prevValue.adjustmentPayer,
      };
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        {/* change payer name */}
        <View style={styles.editNameContainer}>
          <GlobalButton
            title="Edit Name:"
            styleButtonContainer={styles.adjustButtonContainer}
            styleButtonText={styles.adjustButtonText}
          />
          <GlobalTextInput
            placeholder="Edit Player Name"
            value={payerTypes.editedPayer.payerName}
            handleChangeText={handleChangeText}
          />
        </View>
        <GlobalModal visible={modalState}>
          <ScrollView>
            {payerTypes.otherPayers.map((payers) => {
              return (
                <TouchableOpacity
                  key={payers.payerId}
                  onPress={() => {
                    handleSelectAdjustmentPayer(payers.payerId);
                  }}
                >
                  <View>
                    <Text>{payers.payerName}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <Button
            title="Close"
            onPress={() => {
              setModalState(false);
            }}
          />
        </GlobalModal>
        {payerTypes.adjustmentPayer === "" ? (
          <GlobalButton
            title="Adjust
              contribution"
            styleButtonContainer={styles.adjustButtonContainer}
            styleButtonText={styles.adjustButtonText}
          />
        ) : null}

        {payerTypes.adjustmentPayer !== "" ? (
          <EditPlayerBillADjustment
            editedPayer={payerTypes.editedPayer}
            adjustmentPayer={payerTypes.adjustmentPayer}
          />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  editedPayer: {
    margin: 10,
    padding: 10,
  },
  textinput: {
    padding: 10,
    borderBottomWidth: 2,
  },
  temporaryPadding: {
    margin: 10,
    padding: 10,
  },
  adjustButtonContainer: {
    backgroundColor: ColorsCollection.tertiary,
  },
  adjustButtonText: {
    color: ColorsCollection.light,
  },
  editNameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditPayerScreen;
