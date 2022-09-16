import { StyleSheet } from "react-native";
import * as Colors from "./colors";
import * as Sizes from "./sizes";
import { Platform } from "react-native";
export const fontFamily = "Poppins-Regular";

export const Styles = StyleSheet.create({
  customText: {
    color: Colors.fontColor,
    fontFamily: fontFamily,
  },

  // ! Splash Screen
  splashScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  splashScreenText1: {
    fontSize: Sizes.textExtraLarge,
    color: Colors.primary,
    fontWeight: Sizes.weightDark,
    fontFamily: fontFamily,
  },
  splashScreenText2: {
    fontSize: Sizes.textExtraLarge,
    color: Colors.secondary,
    fontWeight: Sizes.weightMedium,
    fontFamily: fontFamily,
  },

  // !FB Icon
  fbIconBG: {
    height: 40,
    width: 40,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Sizes.borderRadiusSmall,
  },
  fbIconText: {
    color: "white",
    fontSize: Sizes.textExtraLarge,
    fontWeight: Sizes.weightBold,
  },

  // ! Icon Input Box
  inputBoxContainer: {
    backgroundColor: Colors.darkGray,
    flexDirection: "row",
    borderRadius: Sizes.borderRadiusSmall,
    alignItems: "center",
    paddingHorizontal: Sizes.paddingSmall,
    borderWidth: Sizes.borderWidthSmall,
  },
  inputBoxContainerError: {
    backgroundColor: Colors.darkGray,
    flexDirection: "row",
    borderRadius: Sizes.borderRadiusSmall,
    alignItems: "center",
    paddingHorizontal: Sizes.paddingSmall,
    borderWidth: Sizes.borderWidthSmall,
    borderColor: Colors.errorRed,
  },
  textInput: {
    color: Colors.white,
    flex: 1,
    fontFamily: fontFamily,
    fontWeight: Sizes.weightNormal,
    fontSize: Sizes.textNormal,
    marginVertical: Platform.OS == "ios" ? Sizes.marginMedium : 0,
    marginHorizontal: Sizes.marginSmall,
  },
  inputLabelStyle: {
    fontFamily: fontFamily,
    fontWeight: Sizes.weightMedium,
    fontSize: Sizes.textNormal,
    color: Colors.black,
  },

  //! Action Button
  actionButtonStyle: {
    backgroundColor: Colors.primary,
    paddingVertical: Sizes.paddingMedium,
    borderRadius: Sizes.infinity,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonTextStyle: {
    color: Colors.white,
    fontSize: Sizes.textMedium,
    fontWeight: Sizes.weightBold,
    fontFamily: fontFamily,
  },
  textActionButtonStyle: {
    color: Colors.primary,
    fontSize: Sizes.textNormal,
    fontWeight: Sizes.weightBold,
    fontFamily: fontFamily,
  },

  // ! Label Text
  headingTextStyle: {
    color: Colors.primary,
    fontSize: Sizes.textExtraLarge,
    fontWeight: Sizes.weightBold,
    fontFamily: fontFamily,
    alignSelf: "center",
  },

  // ! List Items
  listItemContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: Sizes.marginExtraLarge,
    marginHorizontal: Sizes.marginMedium,
    padding: Sizes.paddingSmall,
    borderWidth: Sizes.borderWidthTiny,
    borderRadius: Sizes.borderRadiusSmall,
    borderColor: Colors.primary,
  },
  listItem: {
    marginLeft: Sizes.marginMedium,
    flex: 1,
  },
  listItemDP: {
    height: Sizes.listItemDPHeight,
    width: Sizes.listItemDPWidth,
    borderRadius: Sizes.infinity,
  },
  listItemTitle: {
    fontSize: Sizes.textExtraLarge,
    fontWeight: Sizes.weightBold,
    fontFamily: fontFamily,
    color: Colors.secondary,
  },

  // ! Bottom Navigation Bar
  tabBtncontainer: {
    alignItems: "center",
    borderBottomColor: Colors.bottomNavigationBarIconHighlightColor,
    borderBottomWidth: Sizes.borderWidthSmall,
  },
  tabLabel: {
    color: Colors.bottomNavigationBarLabelColor,
    fontFamily: fontFamily,
    fontWeight: Sizes.weightBold,
    fontSize: Sizes.textMidSmall,
    marginBottom: Sizes.marginSmall,
  },
  tabBarStyle: {
    backgroundColor: Colors.bottomNavigationBarBackgroundColor,
    paddingTop: Sizes.paddingBottomNavigationBarTop,
    height: Sizes.bottomNavigationBarHeight,
    borderTopWidth: 0, // required to stop alignment change on selection
  },

  //   ----------------------------------------------------------------

  // ! Settings screen options
  settingScreenProfilePicture: {
    height: Sizes.settingsScreenDPHeight,
    width: Sizes.settingsScreenDPWidth,
    borderRadius: Sizes.infinity,
    borderWidth: Sizes.borderWidthMedium,
    borderColor: Colors.primary,
  },

  settingButtonContainer: {
    paddingHorizontal: Sizes.paddingExtraLarge,
    paddingVertical: Sizes.paddingMedium,
    marginVertical: Sizes.paddingSmall,
    marginLeft: Sizes.paddingBigLarge,
  },
  settingButtonRow: { flexDirection: "row", alignItems: "center" },
  settingButtonText: {
    fontWeight: Sizes.weightMedium,
    fontSize: Sizes.textLarge,
    color: Colors.primary,
    marginLeft: Sizes.marginMedium,
    fontFamily: fontFamily,
  },

  // !Top Navigation bar
  topNavBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.transparent,
    borderBottomColor: Colors.primary,
    paddingHorizontal: Sizes.paddingSmall,
    height: Sizes.topNavigationBarHeight,
  },
  topNavBarText: {
    fontFamily: fontFamily,
    fontWeight: Sizes.weightBold,
    fontSize: Sizes.textMedium,
    color: Colors.primary,
  },
  topNavBarBackColor: {
    color: Colors.primary,
  },

  //! Loader
  loaderBackdrop: {
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.loaderBackdropColor,
  },
  loaderText: {
    fontFamily: fontFamily,
    fontWeight: Sizes.weightBold,
    fontSize: Sizes.textMedium,
  },
});
