import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';
import {isIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  headerText: {
    fontSize: scale(20),
    color: '#026786',
    fontWeight: '500',
    marginLeft: scale(20),
  },
  backContain: {
    backgroundColor: Colors.perlWhite,
    paddingVertical: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    height: scale(18),
    width: scale(18),
    marginLeft: scale(30),
    // marginRight: scale(20),
  },
});
