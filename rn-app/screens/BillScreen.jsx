import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

import * as billActions from "../store/actions/Bill";

// CUSTOM COMPONENTS
import ColorsCollection from "../constants/ColorsCollection";
import NUMBER_OF_PAYERS from "../data/NUMBER_OF_PAYERS";
import GlobalTextInput from "../components/atoms/GlobalTextInput";

import GlobalSuccessfulButton from "../components/atoms/GlobalSuccessfulButton";
import GlobalModal from "../components/atoms/GlobalModal";
import NumberOfBillPayersSelector from "../components/molecules/bill/NumberOfBillPayersSelector";
import DispatchBillButton from "../components/dispatchers/DispatchBillButton";
import * as validationInputs from "../validations/validateInputs";
import MainIconsFrame from "../components/atoms/MainIconsFrame";
import GlobalLabel from "../components/atoms/GlobalLabel";
import BackgroundColors from "../constants/colors/BackgroundColors";

const BillScreen = (props) => {
  const [billState, setBillState] = useState({
    billAmount: "",
    numberOfBillPayers: "",
  });
  const [isCustomInputRequired, setIsCustomInputRequired] = useState(false);
  const [customNumberOfPeople, setCustomNumberOfPeople] = useState("");
  const [modalState, setModalState] = useState(false);

  const handleResetStates = () => {
    setBillState(() => {
      return {
        billAmount: "",
        numberOfBillPayers: "",
      };
    });
    setIsCustomInputRequired(false);
    setCustomNumberOfPeople("");
    setModalState(false);
    console.log("Hello World");
  };

  const handleChangeText = (text) => {
    let enteredBillAmount = text;
    setBillState((prevValue) => {
      return {
        billAmount: enteredBillAmount,
        numberOfBillPayers: prevValue.numberOfBillPayers,
      };
    });
  };

  const handleSelectBillPayersPress = (id) => {
    let numberOfBillPayers = id;
    if (numberOfBillPayers === "more...") {
      setIsCustomInputRequired(true);
      return;
    }
    setBillState((prevValue) => {
      return {
        billAmount: prevValue.billAmount,
        numberOfBillPayers: numberOfBillPayers,
      };
    });
  };

  const handleSelectBillPayersParentPress = () => {
    if (billState.numberOfBillPayers.length === 0) {
      setIsCustomInputRequired(false);
    }
    setModalState(true);
    setCustomNumberOfPeople("");
    setBillState((prevValue) => {
      return {
        billAmount: prevValue.billAmount,
        numberOfBillPayers: "",
      };
    });
  };

  const handleAddCustomNumberOfPeople = () => {
    setBillState((prevValue) => {
      return {
        billAmount: prevValue.billAmount,
        numberOfBillPayers: customNumberOfPeople,
      };
    });
    setIsCustomInputRequired(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <GlobalLabel content="App Title" />
        <MainIconsFrame />
        <GlobalTextInput
          placeholder="Enter Bill Amount"
          keyboardType="decimal-pad"
          handleChangeText={handleChangeText}
          vaule={billState.billAmount}
        />
        <GlobalSuccessfulButton
          title={
            billState.numberOfBillPayers.length === 0
              ? "Select total payers"
              : "Number of Bill Payers: " + billState.numberOfBillPayers
          }
          handleButtonPress={handleSelectBillPayersParentPress}
        />

        {billState.numberOfBillPayers.length === 0 && !isCustomInputRequired ? (
          <GlobalModal visible={modalState}>
            <View style={styles.modalContent}>
              <NumberOfBillPayersSelector
                NUMBER_OF_PAYERS={NUMBER_OF_PAYERS}
                handleSelectBillPayersPress={handleSelectBillPayersPress}
              />
            </View>
          </GlobalModal>
        ) : null}
        {isCustomInputRequired ? (
          <View style={styles.customInputMembers}>
            <GlobalTextInput
              placeholder="Enter number of people"
              keyboardType="decimal-pad"
              handleChangeText={setCustomNumberOfPeople}
            />
            <GlobalSuccessfulButton
              title="+"
              disabled={customNumberOfPeople.length === 0 ? true : false}
              handleButtonPress={handleAddCustomNumberOfPeople}
            />
          </View>
        ) : null}
        <DispatchBillButton
          title="Proceed"
          dispatchAction={billActions.ADD_BILL}
          bill={billState}
          navigation={props.navigation}
          disabled={
            validationInputs.checkValidAmount(billState.billAmount) &&
            validationInputs.checkValidNumberOfPayers(
              billState.numberOfBillPayers
            )
              ? false
              : true
          }
          handleResetStates={handleResetStates}
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
    backgroundColor: BackgroundColors.lightPink,
  },
  selectBillPayersButtonContainer: {
    backgroundColor: ColorsCollection.tertiary,
  },
  selectBillPayersButtonText: {
    color: ColorsCollection.light,
  },
  submitButtonContainer: {
    backgroundColor: ColorsCollection.primary,
  },
  submitButtonText: {
    color: ColorsCollection.light,
  },

  numberOfPeopleR1: {
    flexDirection: "row",
  },
  customInputMembers: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: (250 / Dimensions.get("window").width) * 100,
    backgroundColor: BackgroundColors.lightPink,
  },
});

export default BillScreen;
