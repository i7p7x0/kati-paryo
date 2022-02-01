import React, { useState } from "react";
import { View, StyleSheet, Te } from "react-native";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import { useSelector } from "react-redux";

// CUSTOM COMPONENTS
import GlobalLabel from "../components/atoms/GlobalLabel";
import PayerScrollView from "../components/molecules/PayerScrollView";
import GlobalButton from "../components/atoms/GlobalButton";
import ColorsCollection from "../constants/ColorsCollection";
import GlobalModal from "../components/atoms/GlobalModal";
import DispatchRoundBill from "../components/dispatchers/DispatchRoundBill";

const PayerScreen = (props) => {
  const billPayers = useSelector((state) => state.payers);
  const [modalState, setModalState] = useState(false);

  const handleProceedBillPaymentPress = () => {
    setModalState(true);
  };

  return (
    <View style={styles.screen}>
      <GlobalLabel content="Tap on payers to make changes" />
      <PayerScrollView payerData={billPayers} navigation={props.navigation} />

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
        <GlobalButton
          title="Proceed"
          styleButtonContainer={styles.submitButton}
          styleButtonText={styles.submitText}
          handleButtonPress={handleProceedBillPaymentPress}
        />
        <GlobalButton
          handleButtonPress={() => {
            props.navigation.navigate(ScreenNavigationScreenNames.homeScreen);
          }}
          title="Revert bill"
          styleButtonContainer={styles.revertButton}
          styleButtonText={styles.revertText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 80,
  },
  buttonsContainer: { flexDirection: "row", marginVertical: 10 },
  submitButton: {
    backgroundColor: ColorsCollection.primary,
  },
  revertButton: { backgroundColor: ColorsCollection.tertiary },
  submitText: { color: ColorsCollection.light },
  revertText: { color: ColorsCollection.light },
});

export default PayerScreen;
