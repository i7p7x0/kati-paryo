import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import { useSelector } from "react-redux";

// CUSTOM COMPONENTS

import PayerScrollView from "../components/molecules/payer/PayerScrollView";
import LargePayerComponent from "../components/molecules/payer/LargePayerComponent";
import GlobalSuccessfulButton from "../components/atoms/GlobalSuccessfulButton";
import ColorsCollection from "../constants/ColorsCollection";
import GlobalModal from "../components/atoms/GlobalModal";
import DispatchRoundBill from "../components/dispatchers/DispatchRoundBill";
import BackgroundColors from "../constants/colors/BackgroundColors";

const PayerScreen = (props) => {
  const billPayers = useSelector((state) => state.payers);
  const bill = useSelector((state) => state.bill);
  const [modalState, setModalState] = useState(false);

  const handleProceedBillPaymentPress = () => {
    if (bill.numberOfBillPayers <= 10) {
      if ((bill.billAmount / bill.numberOfBillPayers) % 5 !== 0) {
        setModalState(true);
      } else {
        props.navigation.navigate(ScreenNavigationScreenNames.paymentScreen);
      }
    } else {
      Alert.alert("Done", "Payment Completed");
      props.navigation.navigate(ScreenNavigationScreenNames.homeScreen);
    }
  };

  return (
    <View style={styles.screen}>
      {bill.numberOfBillPayers <= 10 ? (
        <React.Fragment>
          <View style={styles.noteContainer}>
            {/* <GlobalNote>
              <Text style={styles.noteText}>
                Payer names are randomly generated
              </Text>
              <Text style={styles.noteText}>
                You can Tap on payers to edit their name or adjust bill with
                another payer.
              </Text>
            </GlobalNote> */}
          </View>
          <PayerScrollView
            payerData={billPayers}
            navigation={props.navigation}
          />
        </React.Fragment>
      ) : (
        <LargePayerComponent bill={bill} />
      )}

      <View style={styles.buttonsContainer}>
        <GlobalModal visible={modalState}>
          <DispatchRoundBill
            billPayers={billPayers}
            navigation={props.navigation}
            styleButtonContainer={styles.revertButton}
            styleButtonText={styles.revertText}
            closeModal={() => {
              setModalState(false);
            }}
          />
        </GlobalModal>
        <GlobalSuccessfulButton
          title="Proceed"
          styleButtonContainer={styles.submitButton}
          styleButtonText={styles.submitText}
          handleButtonPress={handleProceedBillPaymentPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: BackgroundColors.lightPink,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "10%",
  },
  buttonsContainer: { flexDirection: "row", marginVertical: 10 },
  submitButton: {
    backgroundColor: ColorsCollection.primary,
  },
  revertButton: { backgroundColor: ColorsCollection.tertiary },
  submitText: { color: ColorsCollection.light },
  revertText: { color: ColorsCollection.light },
  noteContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
  },
  noteText: {
    color: ColorsCollection.light,
    fontSize: 18,
    textAlign: "center",
  },
});

export default PayerScreen;
