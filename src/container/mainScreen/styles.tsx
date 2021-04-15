import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.perlWhite,
  },
  buttonInside: {
    // height: verticalScale(50),
    // borderRadius: scale(50),
  },

  buttonPos: {
    height: scale(52),
    width: scale(310),
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.borderGrey,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    marginTop: scale(10),
  },
  titleText: {
    color: Colors.textGrey,
    fontFamily: Fonts.MuseoSansRounded3,
    fontSize: 14,
  },
  subTitleText: {
    color: Colors.turquoisePrimary,
    marginTop: scale(5),
    fontFamily: Fonts.MuseoSansRounded5,
    fontSize: 18,
  },
});
