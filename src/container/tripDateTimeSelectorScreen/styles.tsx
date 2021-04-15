import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  commonHeader: {
    height: scale(40),
    backgroundColor: Colors.greyShade,
    justifyContent: 'center',
    paddingLeft: scale(30),
  },
  commonHeaderText: {
    fontSize: 18,
    color: Colors.turquoisePrimary,
    fontFamily: Fonts.MuseoSansRounded9,
  },
  tabStyle: {
    backgroundColor: '#FFF',
  },
  tabIndicatorStyle: {
    backgroundColor: Colors.primaryTeal,
    height: 5,
    borderRadius: 10,
  },
  tabTitle: {
    color: Colors.turquoiseSecondary,
    fontFamily: Fonts.MuseoSansRounded5,
    fontSize: 18,
  },
  tabSubTitle: {
    color: Colors.turquoiseSecondary,
    fontFamily: Fonts.MuseoSansRounded5,
    fontSize: 12,
    marginTop: scale(3),
  },
  pickUpCal: {
    backgroundColor: '#FFF',
  },
  scrollContent: {
    paddingBottom: scale(50),
  },
  calenderHeight: {
    ...ifIphoneX(
      {
        height: scale(310),
      },
      {
        height: scale(330),
      },
    ),
  },
  dateDisp: {
    alignItems: 'center',
    paddingTop: scale(10),
    justifyContent: 'center',
  },
  dateDispText: {
    color: Colors.turquoisePrimary,
    fontFamily: Fonts.MuseoSansRounded3,
    fontSize: 14,
  },
  timeDispText: {
    color: Colors.turquoiseSecondary,
    fontFamily: Fonts.MuseoSansRounded7,
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
  },
  timeDisp: {
    backgroundColor: Colors.primaryMellow,
    height: scale(32),
    width: scale(90),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scale(5),
    zIndex: 200,
  },
  alignCenter: {
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 20,
  },
  horizontalPicker: {
    paddingHorizontal: scale(150),
  },
  horizontalPickerStyle: {
    borderTopWidth: 1.5,
    borderColor: Colors.turquoiseSecondary,
    marginTop: scale(20),
  },
  yellowDot: {
    height: scale(18),
    width: scale(18),
    backgroundColor: Colors.primaryMellow,
    position: 'absolute',
    borderRadius: 50,
    alignSelf: 'center',
    top: scale(10),
    zIndex: 900,
  },
  vertLine: {
    borderRightWidth: 1.5,
    position: 'absolute',
    top: scale(-30),
    height: scale(40),
    borderColor: Colors.turquoiseSecondary,
  },
  slideTextContain: {
    marginTop: scale(10),
    alignItems: 'center',
  },
  slideText: {
    color: Colors.turquoisePrimary,
    fontFamily: Fonts.MuseoSansRounded3,
    fontSize: 14,
  },
  customButton: {
    backgroundColor: Colors.primaryTeal,
    height: scale(40),
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(20),
  },
  timeComponentMain: {
    width: scale(50),
    alignItems: 'center',
  },
  timeSecondaryComp: {
    height: scale(20),
    borderLeftWidth: 1.5,
    alignSelf: 'center',
    borderColor: Colors.turquoiseSecondary,
    zIndex: 100,
  },
  hourText: {
    color: Colors.turquoiseSecondary,
    marginTop: scale(5),
    fontFamily: Fonts.MuseoSansRounded3,
    fontSize: 12,
  },
  buttonText: {
    color: Colors.perlWhite,
    marginTop: scale(5),
    fontFamily: Fonts.MuseoSansRounded5,
    fontSize: 18,
  },
});
