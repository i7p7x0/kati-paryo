import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import * as billActions from "../store/actions/Bill";

// CUSTOM COMPONENTS
import ColorsCollection from "../constants/ColorsCollection";
import NUMBER_OF_PAYERS from "../data/NUMBER_OF_PAYERS";
import GlobalTextInput from "../components/atoms/GlobalTextInput";
import GlobalButton from "../components/atoms/GlobalButton";
import HorizontalNumberOfPeopleSelector from "../components/molecules/HorizontalNumberOfPeopleSelector";
import DispatchBillButton from "../components/dispatchers/DispatchBillButton";

const BillScreen = (props) => {
  const [billState, setBillState] = useState({
    billAmount: "",
    numberOfBillPayers: "",
  });

  const [isCustomInputRequired, setIsCustomInputRequired] = useState(false);
  const [customNumberOfPeople, setCustomNumberOfPeople] = useState("");

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
        <GlobalTextInput
          placeholder="Enter Bill Amount"
          keyboardType="decimal-pad"
          handleChangeText={handleChangeText}
          vaule={billState.billAmount}
        />
        <GlobalButton
          styleButtonContainer={styles.selectBillPayersButtonContainer}
          styleButtonText={styles.selectBillPayersButtonText}
          title={
            billState.numberOfBillPayers.length === 0
              ? "Select number of people"
              : "Number of Bill Payers: " + billState.numberOfBillPayers
          }
          handleButtonPress={handleSelectBillPayersParentPress}
        />

        {billState.numberOfBillPayers.length === 0 && !isCustomInputRequired ? (
          <View style={styles.numberOfPeople}>
            <HorizontalNumberOfPeopleSelector
              NUMBER_OF_PAYERS={NUMBER_OF_PAYERS}
              handleSelectBillPayersPress={handleSelectBillPayersPress}
            />
          </View>
        ) : null}
        {isCustomInputRequired ? (
          <View style={styles.customInputMembers}>
            <GlobalTextInput
              placeholder="Enter number of people"
              keyboardType="decimal-pad"
              handleChangeText={setCustomNumberOfPeople}
            />
            <GlobalButton
              styleButtonContainer={styles.submitButtonContainer}
              styleButtonText={styles.submitButtonText}
              title="+"
              disabled={customNumberOfPeople.length === 0 ? true : false}
              handleButtonPress={handleAddCustomNumberOfPeople}
            />
          </View>
        ) : null}
        <DispatchBillButton
          styleButtonContainer={styles.submitButtonContainer}
          styleButtonText={styles.submitButtonText}
          title="Go"
          dispatchAction={billActions.ADD_BILL}
          bill={billState}
          navigation={props.navigation}
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
    margin: 20,
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
  numberOfPeople: {
    height: "20%",
  },
  numberOfPeopleR1: {
    flexDirection: "row",
  },
  customInputMembers: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BillScreen;
