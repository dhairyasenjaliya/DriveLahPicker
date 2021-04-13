import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  accessContactButton: {
    height: verticalScale(50),
    backgroundColor: Colors.accessButtonColor,
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  accessButtonText: {
    fontSize: scale(14),
    color: Colors.perlWhite,
    fontFamily: Fonts.helveticaNeueMedium,
    paddingHorizontal: scale(10),
  },
  buttonPos: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
