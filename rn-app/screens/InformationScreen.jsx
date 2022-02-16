import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import InformationTypes from "../constants/InformationTypes";
import BackgroundColors from "../constants/colors/BackgroundColors";

const InformationScreen = (props) => {
  let informationType = props.route.params.informationType;
  let informationParaOne, informationParaTwo, informationParaThree;
  switch (informationType) {
    case InformationTypes.PAYER_INFO:
      informationParaOne =
        "All payer names are randomly generated supervillain names. You can tap on each payer label to edit their names.";
      informationParaTwo =
        "You can also adjust the amount this payer will pay from the total bill with another payer.";
      informationParaThree =
        "You can round the bill in multiples of 5 to make the payment easy for each individual. This will cause the leftover amounts from rounded values to be added to the last payer, which will result in one payer paying slightly more than others.";
      break;
    case InformationTypes.EDIT_PAYER_INFO:
      informationParaOne =
        "You can press Adjust amount button, and select another payer you want to adjust the bill with.";
      informationParaTwo =
        "Selecting pay more will increase the amount the current payer is paying, reducing the amount the adjustment payer is paying";
      informationParaThree =
        "Selecting pay less will decrease the amount the current payer is paying, increasing the amount the adjustment payer is paying";
      break;
    default:
      (informationParaOne = ""),
        (informationParaTwo = ""),
        (informationParaThree = "");
      break;
  }
  return (
    <View style={styles.screen}>
      <View style={styles.childContainer}>
        <Text style={styles.informationText}>{informationParaOne}</Text>
      </View>
      <View style={styles.childContainer}>
        <Text style={styles.informationText}>{informationParaTwo}</Text>
      </View>
      <View style={styles.childContainer}>
        <Text style={styles.informationText}>{informationParaThree}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Dimensions.get("window").width / 10,
    backgroundColor: BackgroundColors.lightPink,
  },
  childContainer: {
    paddingVertical: Dimensions.get("window").height / 20,
  },
  informationText: { fontSize: Dimensions.get("window").width / 22, textAlign: "left" },
});

export default InformationScreen;
