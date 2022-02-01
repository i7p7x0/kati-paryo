import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Keyboard,
} from "react-native";
import { useSelector } from "react-redux";

// CUSTOM COMPONENTS

import GlobalTextInput from "../components/atoms/GlobalTextInput";
import GlobalModal from "../components/atoms/GlobalModal";
import EditPlayerBillADjustment from "../components/molecules/edit-payer/EditPayerBillAdjustment";
import GlobalButton from "../components/atoms/GlobalButton";
import ColorsCollection from "../constants/ColorsCollection";
import DispatchFinalPayerButton from "../components/dispatchers/DispatchFinalPayersButton";
import * as validationInputs from "../validations/validateInputs";

const EditPayerScreen = (props) => {
  const billPayersNonAdjusted = useSelector((state) => state.payers);
  const bill = useSelector((state) => state.bill);
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

  const resetPayerStates = () => {
    setPayerTypes(() => {
      return {
        editedPayer: billPayersNonAdjusted.find((editedPayer) => {
          return editedPayer.payerId === payerId;
        }),
        otherPayers: billPayersNonAdjusted.filter((filteredPayers) => {
          return filteredPayers.payerId !== payerId;
        }),
        adjustmentPayer: "",
      };
    });
    setModalState(false);
  };

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

    setPayerTypes((prevValue) => {
      return {
        editedPayer: newEditedPayer,
        otherPayers: prevValue.otherPayers,
        adjustmentPayer: prevValue.adjustmentPayer,
      };
    });
  };

  const handlePayMoreButtonPress = () => {
    let combinedSum =
      Number(payerTypes.editedPayer.payerAmount) +
      Number(payerTypes.adjustmentPayer.payerAmount);

    let newEditedPayerPayingAmount =
      Number(payerTypes.editedPayer.payerAmount) + combinedSum / 10;

    let newEditedPayerPayingPercent =
      (newEditedPayerPayingAmount / Number(bill.billAmount)) * 100;

    let newAdjustmentPayerPayingAmount =
      Number(payerTypes.adjustmentPayer.payerAmount) - combinedSum / 10;

    let newAdjustmentPayerPayingPercent =
      (newAdjustmentPayerPayingAmount / Number(bill.billAmount)) * 100;

    let newEditedPayerValues = {
      payerAmount: newEditedPayerPayingAmount.toFixed(0).toString(),
      payerId: payerTypes.editedPayer.payerId,
      payerName: payerTypes.editedPayer.payerName,
      payerPayingPercent: newEditedPayerPayingPercent.toFixed(2).toString(),
    };
    let newAdjustmentPayerValues = {
      payerAmount: newAdjustmentPayerPayingAmount.toFixed(0).toString(),
      payerId: payerTypes.adjustmentPayer.payerId,
      payerName: payerTypes.adjustmentPayer.payerName,
      payerPayingPercent: newAdjustmentPayerPayingPercent.toFixed(2).toString(),
    };
    if (newAdjustmentPayerPayingAmount >= 0) {
      setPayerTypes((prevValue) => {
        return {
          editedPayer: newEditedPayerValues,
          otherPayers: prevValue.otherPayers,
          adjustmentPayer: newAdjustmentPayerValues,
        };
      });
    }
    return;
  };

  const handlePayLessButtonPress = () => {
    let combinedSum =
      Number(payerTypes.editedPayer.payerAmount) +
      Number(payerTypes.adjustmentPayer.payerAmount);

    let newEditedPayerPayingAmount =
      Number(payerTypes.editedPayer.payerAmount) - combinedSum / 10;

    let newEditedPayerPayingPercent =
      (newEditedPayerPayingAmount / Number(bill.billAmount)) * 100;

    let newAdjustmentPayerPayingAmount =
      Number(payerTypes.adjustmentPayer.payerAmount) + combinedSum / 10;

    let newAdjustmentPayerPayingPercent =
      (newAdjustmentPayerPayingAmount / Number(bill.billAmount)) * 100;

    let newEditedPayerValues = {
      payerAmount: newEditedPayerPayingAmount.toFixed(0).toString(),
      payerId: payerTypes.editedPayer.payerId,
      payerName: payerTypes.editedPayer.payerName,
      payerPayingPercent: newEditedPayerPayingPercent.toFixed(2).toString(),
    };
    let newAdjustmentPayerValues = {
      payerAmount: newAdjustmentPayerPayingAmount.toFixed(0).toString(),
      payerId: payerTypes.adjustmentPayer.payerId,
      payerName: payerTypes.adjustmentPayer.payerName,
      payerPayingPercent: newAdjustmentPayerPayingPercent.toFixed(2).toString(),
    };
    if (newEditedPayerPayingAmount >= 0) {
      setPayerTypes((prevValue) => {
        return {
          editedPayer: newEditedPayerValues,
          otherPayers: prevValue.otherPayers,
          adjustmentPayer: newAdjustmentPayerValues,
        };
      });
    }
    return;
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
            placeholder="Edit Player Name (2 - 10 characters)"
            value={payerTypes.editedPayer.payerName}
            handleChangeText={handleChangeText}
          />
        </View>
        <GlobalModal visible={modalState}>
          <View style={styles.selectAdjustmentPayerParentContainer}>
            <ScrollView>
              {payerTypes.otherPayers.map((payers) => {
                return (
                  <TouchableOpacity
                    key={payers.payerId}
                    onPress={() => {
                      handleSelectAdjustmentPayer(payers.payerId);
                    }}
                  >
                    <View style={styles.selectAdjustmentPayerContainer}>
                      <Text style={styles.selectAdjustmentPayerText}>
                        {payers.payerName}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </GlobalModal>
        {payerTypes.adjustmentPayer === "" ? (
          <GlobalButton
            title="Adjust
              contribution"
            styleButtonContainer={styles.adjustButtonContainer}
            styleButtonText={styles.adjustButtonText}
            handleButtonPress={handleAdjustBillPress}
          />
        ) : null}

        {payerTypes.adjustmentPayer !== "" ? (
          <EditPlayerBillADjustment
            editedPayer={payerTypes.editedPayer}
            adjustmentPayer={payerTypes.adjustmentPayer}
            handlePayMoreButtonPress={handlePayMoreButtonPress}
            handlePayLessButtonPress={handlePayLessButtonPress}
          />
        ) : null}

        <DispatchFinalPayerButton
          title="Done"
          styleButtonContainer={styles.submitButtonContainer}
          styleButtonText={styles.submitButtonText}
          disabled={
            validationInputs.validatePayer(payerTypes.editedPayer)
              ? false
              : true
          }
          navigation={props.navigation}
          payerData={payerTypes}
          resetPayerStates={resetPayerStates}
        />
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

  adjustButtonContainer: {
    backgroundColor: ColorsCollection.tertiary,
  },
  adjustButtonText: {
    color: ColorsCollection.light,
  },
  editNameContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonContainer: { backgroundColor: ColorsCollection.primary },
  submitButtonText: { color: ColorsCollection.light },
  selectAdjustmentPayerContainer: {
    backgroundColor: ColorsCollection.tertiary,
    borderRadius: 8,
    marginHorizontal: Dimensions.get("window").width / 80,
    marginVertical: Dimensions.get("window").height / 80,
    paddingHorizontal: Dimensions.get("window").width / 80,
    paddingVertical: Dimensions.get("window").height / 80,
    alignItems: "center",
  },
  selectAdjustmentPayerText: {
    color: ColorsCollection.light,
  },
  selectAdjustmentPayerParentContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: Dimensions.get("window").height / 5,
    alignItems: "center",
  },
});

export default EditPayerScreen;
