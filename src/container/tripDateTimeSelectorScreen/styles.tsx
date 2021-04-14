import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  commonHeader: {
    height: scale(40),
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    paddingLeft: scale(30),
  },
  commonHeaderText: {
    color: '#026786',
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  tabStyle: {
    backgroundColor: '#FFF',
  },
  tabIndicatorStyle: {
    backgroundColor: '#00a4ad',
    height: 5,
    borderRadius: 10,
  },
  tabTitle: {
    color: '#026786',
    fontWeight: '700',
    fontSize: 18,
  },
  tabSubTitle: {
    color: '#408ca3',
    fontWeight: '500',
    fontSize: 12,
  },
  pickUpCal: {
    backgroundColor: '#FFF',
  },
  calenderHeight: {
    height: scale(300),
  },
  dateDisp: {
    alignItems: 'center',
    paddingTop: scale(10),
  },
  timeDisp: {
    backgroundColor: '#fdd654',
    height: 32,
    width: 90,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scale(5),
    zIndex: 200,
  },
  alignCenter: {
    alignContent: 'center',
  },
  yellowDot: {
    height: scale(18),
    width: scale(18),
    backgroundColor: '#fdd654',
    position: 'absolute',
    borderRadius: 50,
    alignSelf: 'center',
    top: scale(10),
    // zIndex: 900,
  },
  vertLine: {
    borderWidth: 1,
    position: 'absolute',
    top: scale(-30),
    // right: scale(24),
    height: scale(40),
    borderColor: '#026786',
  },
  horizontalPicker: {
    borderTopWidth: 2,
    marginTop: 20,
    borderColor: '#026786',
    paddingHorizontal: scale(150),
  },
  slideTextContain: {
    marginTop: scale(10),
    alignItems: 'center',
  },
  slideText: {
    color: '#00a4ad',
  },
  customButton: {
    backgroundColor: '#00a4ad',
    height: scale(40),
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(10),
  },
  timeComponentMain: {
    width: scale(50),
    alignItems: 'center',
  },
  timeSecondaryComp: {
    height: scale(25),
    borderLeftWidth: 2,
    alignSelf: 'center',
    borderColor: '#026786',
    zIndex: 100,
  },
  hourText: {
    color: '#026786',
    marginTop: scale(5),
  },
});
