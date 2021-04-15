import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';
import {ifIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  headerText: {
    fontSize: scale(20),
    color: Colors.turquoiseSecondary,
    marginLeft: scale(20),
    fontFamily: Fonts.MuseoSansRounded5,
  },
  backContain: {
    backgroundColor: Colors.perlWhite,
    flexDirection: 'row',
    ...ifIphoneX(
      {
        paddingVertical: scale(10),
      },
      {
        paddingTop: scale(20),
        paddingBottom: scale(10),
      },
    ),
  },
  backArrow: {
    height: scale(18),
    width: scale(18),
    marginLeft: scale(30),
  },
});
