import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';
import {isIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  headerText: {
    fontSize: scale(20),
    alignSelf: 'center',
    color: Colors.carbonBlack,
    fontFamily: Fonts.helveticaNeueMedium,
  },
  backContain: {
    height: isIphoneX() ? scale(75) : verticalScale(60),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 20,
    borderBottomLeftRadius: scale(15),
    borderBottomRightRadius: scale(15),
    backgroundColor: Colors.perlWhite,
    justifyContent: 'center',
  },
});
